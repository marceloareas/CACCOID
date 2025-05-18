package br.com.cefet.caccoId.exceptions.custom;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class CustomApplicationException extends RuntimeException{
    private final HttpStatus status;

    public CustomApplicationException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

}
