package br.com.cefet.caccoId.controllers;

import br.com.cefet.caccoId.dtos.ApiResponseDTO;
import br.com.cefet.caccoId.dtos.AuthenticationDTO;
import br.com.cefet.caccoId.dtos.UserRegisterDTO;
import br.com.cefet.caccoId.repositories.UserRepository;
import br.com.cefet.caccoId.services.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponseDTO<Map<String, String>>> login(@Valid @RequestBody AuthenticationDTO data){
        var token = this.authenticationService.login(data);
        if(!token.isBlank()){
            var response = new ApiResponseDTO<>(true, "Usuário válido.", Map.of("token", token));
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        else{
            var response = new ApiResponseDTO<>(false, "Não foi possível realizar o login. Verifique seus dados e tente novamente.", Map.of("token", ""));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponseDTO<Object>> register(@Valid @RequestBody UserRegisterDTO userRegisterDTO){
        try {
            authenticationService.register(userRegisterDTO, false);
            var response = new ApiResponseDTO<>(true, "Usuário registrado com sucesso.", null);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch (InternalAuthenticationServiceException e){
            var response = new ApiResponseDTO<>(false, "Já existe um usuário com esse e-mail.", null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/register-admin")
    public ResponseEntity<ApiResponseDTO<Object>> createAdmin(@Valid @RequestBody UserRegisterDTO userRegisterDTO){
        try {
            authenticationService.register(userRegisterDTO, true);
            var response = new ApiResponseDTO<>(true, "Administrador registrado com sucesso.", null);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch (InternalAuthenticationServiceException e){
            var response = new ApiResponseDTO<>(false, "Já existe um usuário com esse e-mail.", null);
            return ResponseEntity.badRequest().body(response);
        }
    }
}
