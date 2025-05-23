package br.com.cefet.caccoId.controllers;

import br.com.cefet.caccoId.dtos.ApiResponseDTO;
import br.com.cefet.caccoId.dtos.UpdateStatusDTO;
import br.com.cefet.caccoId.models.enums.SolicitationStatus;
import br.com.cefet.caccoId.services.SolicitationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Base64;
import java.util.Map;

@RestController
@RequestMapping("/solicitation")
public class SolicitationController {
    @Autowired
    private SolicitationService solicitationService;

    @GetMapping()
    public ResponseEntity<ApiResponseDTO<?>> GetStatus(){
        try {
            var solicitation = solicitationService.getSolicitation();
            var requestDate = solicitation.getRequestDate();

            var requestDateFormated = String.format("%02d/%02d/%d",
                    requestDate.getDayOfMonth(),
                    requestDate.getMonthValue(),
                    requestDate.getYear());
            var body = Map.of(
                    "studentName", solicitation.getStudent().getName(),
                    "requestDate", requestDateFormated,
                    "status", solicitation.getStatus().getStatus(),
                    "photo", "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(solicitation.getStudentPhoto()),
                    "rejected", solicitation.getRejected(),
                    "pendingEdit", solicitation.getPendingEdit());
            var response = new ApiResponseDTO<>(true, "Dados da solicitação retornados com sucesso.", body);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch(NullPointerException e){
            var response = new ApiResponseDTO<>(false, "Esse usuário não possui uma solicitação ativa.", null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        catch (Exception e){
            var response = new ApiResponseDTO<>(false, "Falha ao retornar dados da solicitação: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/update")
    public ResponseEntity<ApiResponseDTO<?>> updateSolicitationStatus(@RequestBody UpdateStatusDTO updateStatusDTO){
        try {
            var solicitation = solicitationService.updateStatus(updateStatusDTO.getNewStatus());
            ApiResponseDTO<Map<String, Integer>> response;
            if (!(solicitationService.finalStatusReached(solicitation.getStatus()))) {
                response = new ApiResponseDTO<>(
                        true,
                        "Estado alterado com sucesso.",
                        Map.of("status", solicitation.getStatus().ordinal())
                );
            } else {
                response = new ApiResponseDTO<>(
                        true,
                        "Último estado alcançado.",
                        Map.of("status", solicitation.getStatus().ordinal())
                );
            }
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        catch (IllegalArgumentException e){
            var response = new ApiResponseDTO<>(false, e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        catch (Exception e){
            var response = new ApiResponseDTO<>(false, "Falha ao retornar dados da solicitação: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
