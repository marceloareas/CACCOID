package br.com.cefet.caccoId.services;

import br.com.cefet.caccoId.dtos.FormRequestDTO;
import br.com.cefet.caccoId.mappers.SolicitationMapper;
import br.com.cefet.caccoId.mappers.StudentMapper;
import br.com.cefet.caccoId.models.Solicitation;
import br.com.cefet.caccoId.repositories.SolicitationRepository;
import br.com.cefet.caccoId.repositories.StudentRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@Service
public class FormService {
    private final StudentRepository studentRepository;
    private final SolicitationRepository solicitationRepository;
    private final StudentMapper studentMapper;
    private final SolicitationMapper solicitationMapper;
    private static final Logger log = LoggerFactory.getLogger(FormService.class);

    public FormService(StudentRepository studentRepository,
                       StudentMapper studentMapper,
                       SolicitationMapper solicitationMapper,
                       SolicitationRepository solicitationRepository){
        this.studentRepository = studentRepository;
        this.studentMapper = studentMapper;
        this.solicitationMapper = solicitationMapper;
        this.solicitationRepository = solicitationRepository;
    }
    public void registerStudent(FormRequestDTO formRequestDTO)
            throws IllegalArgumentException, DataIntegrityViolationException{
        MDC.put("cpf", formRequestDTO.getStudent().getCpf());

        try {
            log.info("Iniciando registro do estudante: {}", formRequestDTO.getStudent().getName());

            var student = studentMapper.toEntity(formRequestDTO.getStudent());

            if (studentRepository.existsByEmail(student.getEmail())) {
                log.warn("Tentativa de registro com e-mail já existente: {}", student.getEmail());
                throw new IllegalArgumentException("Já existe um estudante cadastrado com este e-mail.");
            }

            var studentSaved = studentRepository.save(student);
            log.info("Estudante registrado com sucesso. ID: {}", studentSaved.getId());

            try {
                var solicitation = solicitationMapper.toEntity(formRequestDTO.getSolicitation());
                solicitation.setStudent(studentSaved);
                var filledSolicitation = setInitialSolicitationValues(solicitation);
                var solicitationSaved = solicitationRepository.save(filledSolicitation);
                log.info("Solicitação do estudante {} registrada com sucesso. ID: {}", studentSaved.getId(), solicitationSaved.getId());
            }catch (Exception ex){
                log.error("Falha ao salvar solicitação: {}", ex.getMessage());
            }
        }finally {
            MDC.clear();
        }
    }

    public Solicitation setInitialSolicitationValues(Solicitation solicitation){
        solicitation.setNeedsCorrection(false);
        solicitation.setCorrected(false);
        solicitation.setPaid(false);
        solicitation.setAdminNote("");
        solicitation.setStatus(0);
        ZonedDateTime zonedNow = ZonedDateTime.now(ZoneId.of("America/Sao_Paulo"));
        solicitation.setRequestDate(zonedNow.toLocalDateTime());
        return solicitation;
    }
}
