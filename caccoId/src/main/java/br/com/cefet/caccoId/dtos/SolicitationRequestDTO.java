package br.com.cefet.caccoId.dtos;

import br.com.cefet.caccoId.models.Student;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SolicitationRequestDTO {
    private boolean virtualOnly;

    private MultipartFile enrollmentProof;

    private MultipartFile identityDocument;
}
