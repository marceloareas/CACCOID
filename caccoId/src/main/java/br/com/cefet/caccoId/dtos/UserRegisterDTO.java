package br.com.cefet.caccoId.dtos;

import br.com.cefet.caccoId.models.enums.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRegisterDTO {
    @NotBlank(message = "O e-mail é obrigatório e não pode estar em branco")
    @Email(message = "O e-mail deve ser válido")
    private String email;

    @NotBlank(message = "A senha é obrigatória e não pode estar em branco")
    private String password;
}
