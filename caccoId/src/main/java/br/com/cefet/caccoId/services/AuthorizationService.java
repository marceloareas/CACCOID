package br.com.cefet.caccoId.services;

import br.com.cefet.caccoId.dtos.AuthenticationDTO;
import br.com.cefet.caccoId.infra.security.TokenService;
import br.com.cefet.caccoId.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService{
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;


    public String login(AuthenticationDTO data){
        var userPassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword());
        try {
            var auth = this.authenticationManager.authenticate(userPassword);
            return tokenService.generateToken((User) auth.getPrincipal());
        }catch (InternalAuthenticationServiceException e){
            return "";
        }
    }
}
