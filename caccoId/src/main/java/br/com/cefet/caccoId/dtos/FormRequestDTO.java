package br.com.cefet.caccoId.dtos;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FormRequestDTO {
    @Valid
    @NotNull(message = "Os dados do estudante são obrigatórios")
    private StudentRequestDTO student;

    private SolicitationRequestDTO solicitation;
}
