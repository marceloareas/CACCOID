package br.com.cefet.caccoId.models;

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

    private int status;

    private LocalDateTime requestDate;

    private boolean corrected;

    private String adminNote;

    private boolean needsCorrection;

    private boolean paid;

    @OneToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Lob
    private byte[] enrollmentProof;

    @Lob
    private byte[] identityDocument;
}
