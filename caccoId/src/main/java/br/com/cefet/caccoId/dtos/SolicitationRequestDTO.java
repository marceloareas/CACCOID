package br.com.cefet.caccoId.dtos;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SolicitationRequestDTO {
    private boolean virtualOnly;

    private MultipartFile enrollmentProof;

    private MultipartFile identityDocument;
}
