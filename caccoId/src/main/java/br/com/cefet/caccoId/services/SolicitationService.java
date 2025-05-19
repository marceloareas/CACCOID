package br.com.cefet.caccoId.services;

import br.com.cefet.caccoId.models.Solicitation;
import br.com.cefet.caccoId.models.User;
import br.com.cefet.caccoId.models.enums.SolicitationStatus;
import br.com.cefet.caccoId.repositories.SolicitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@Service
public class SolicitationService {
    @Autowired
    private SolicitationRepository solicitationRepository;

    public Solicitation getStatus(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();
        return solicitationRepository.getSolicitationStatusByLoggedUser(user.getId());
    }

    public Solicitation updateStatus(Short newStatus){
        SolicitationStatus[] statuses = SolicitationStatus.values();

        if (newStatus < 0 || newStatus >= statuses.length) {
            throw new IllegalArgumentException("Status inválido.");
        }

        var solicitation = this.getStatus();
        SolicitationStatus updatedStatus = statuses[newStatus];

        if (solicitation.getStatus().equals(updatedStatus)) {
            throw new IllegalArgumentException("O estado passado como parâmetro é o estado atual.");
        }

        if(!(this.finalStatusReached(solicitation.getStatus()))){
            solicitation.setStatus(updatedStatus);
            solicitationRepository.save(solicitation);
        }
        return solicitation;
    }

    public Solicitation setSolicitationInitialValues(Solicitation solicitation){
        solicitation.setStatus(SolicitationStatus.UNDER_REVIEW);
        solicitation.setPaid(false);
        solicitation.setNeedsCorrection(false);
        solicitation.setCorrected(false);
        solicitation.setAdminNote("");
        if(solicitation.isVirtualOnly()) {
            solicitation.setPickupLocation("");
        }
        ZonedDateTime zonedNow = ZonedDateTime.now(ZoneId.of("America/Sao_Paulo"));
        solicitation.setRequestDate(zonedNow.toLocalDateTime());
        return solicitation;
    }

    public boolean finalStatusReached(SolicitationStatus solicitationStatus){
        return solicitationStatus == SolicitationStatus.AUTHORIZED;
    }
}
