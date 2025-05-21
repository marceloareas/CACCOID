package br.com.cefet.caccoId.services;

import br.com.cefet.caccoId.dtos.ApiResponseDTO;
import br.com.cefet.caccoId.dtos.AuthenticationDTO;
import br.com.cefet.caccoId.dtos.UserRegisterDTO;
import br.com.cefet.caccoId.infra.security.TokenService;
import br.com.cefet.caccoId.models.User;
import br.com.cefet.caccoId.models.enums.UserRole;
import br.com.cefet.caccoId.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserRepository userRepository;


    public String login(AuthenticationDTO data){
        var userPassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword());
        try {
            var auth = this.authenticationManager.authenticate(userPassword);
            return tokenService.generateToken((User) auth.getPrincipal());
        }catch (InternalAuthenticationServiceException e){
            return "";
        }
    }

    public void register(UserRegisterDTO userRegisterDTO, boolean admin) throws  InternalAuthenticationServiceException {
        if (this.userRepository.findByEmail(userRegisterDTO.getEmail()) != null) {
            throw new InternalAuthenticationServiceException("Já existe um usuário com esse e-mail.");
        }

        var encryptedPassword = new BCryptPasswordEncoder().encode(userRegisterDTO.getPassword());

        User newUser;
        if(admin){
            newUser = new User(userRegisterDTO.getEmail(), encryptedPassword, UserRole.ADMIN);
        }
        else{
            newUser = new User(userRegisterDTO.getEmail(), encryptedPassword, UserRole.USER);
        }

        this.userRepository.save(newUser);
    }
}
