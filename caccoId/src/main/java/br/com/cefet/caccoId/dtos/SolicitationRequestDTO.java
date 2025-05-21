package br.com.cefet.caccoId.dtos;

import jakarta.persistence.Lob;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SolicitationRequestDTO {
    private boolean virtualOnly;

    private String pickupLocation;

    private MultipartFile enrollmentProof;

    private MultipartFile identityDocumentFront;

    private MultipartFile identityDocumentBack;

    private MultipartFile studentPhoto;

    private MultipartFile paymentProof;
}
