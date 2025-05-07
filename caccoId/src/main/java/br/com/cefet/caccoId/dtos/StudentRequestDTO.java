package br.com.cefet.caccoId.dtos;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentRequestDTO {
    @NotBlank(message = "O nome é obrigatório e não pode estar em branco")
    private String name;

    @NotBlank(message = "O e-mail é obrigatório e não pode estar em branco")
    @Email(message = "O e-mail deve ser válido")
    private String email;

    @NotBlank(message = "O rg é obrigatório não pode estar em branco")
    @Pattern(
            regexp = "^(\\d{2}\\.\\d{3}\\.\\d{3}-\\d{1}|\\d{9})$",
            message = "RG deve estar no formato XX.XXX.XXX-X ou XXXXXXXXX"
    )
    private String rg;

    @NotBlank(message = "O cpf é obrigatório e não pode estar em branco")
    @Pattern(
            regexp = "^(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}|\\d{11})$",
            message = "O cpf deve estar no formato XXX.XXX.XXX-XX ou XXXXXXXXXXX"
    )
    private String cpf;

    @NotBlank(message = "O telefone é obrigatório e não pode estar em branco")
    @Pattern(
            regexp = "^(\\d{10,11}|\\(\\d{2}\\)\\s?\\d{4,5}-?\\d{4})$",
            message = "Telefone deve conter 10 ou 11 dígitos, com ou sem formatação"
    )
    private String telephone;

    @NotNull(message = "A data de nascimento é obrigatória")
    @Past(message = "A data de nascimento deve estar no passado")
    private LocalDate dateOfBirth;
}
