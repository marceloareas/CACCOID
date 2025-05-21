package br.com.cefet.caccoId.models;

import br.com.cefet.caccoId.models.enums.SolicitationStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "solicitation")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@EqualsAndHashCode(of = "id")
public class Solicitation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean virtualOnly;

    private SolicitationStatus status;

    private LocalDateTime requestDate;

    private boolean corrected;

    private String adminNote;

    private boolean needsCorrection;

    private boolean paid;

    private String pickupLocation;

    private Boolean rejected;

    private Boolean pendingEdit;

    @OneToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Lob
    private byte[] enrollmentProof;

    @Lob
    private byte[] identityDocumentFront;

    @Lob
    private byte[] identityDocumentBack;

    @Lob
    private byte[] studentPhoto;

    @Lob
    private byte[] paymentProof;
}
