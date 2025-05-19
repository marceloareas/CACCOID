package br.com.cefet.caccoId.controllers;


import br.com.cefet.caccoId.dtos.ApiResponseDTO;
import br.com.cefet.caccoId.dtos.FormRequestDTO;
import br.com.cefet.caccoId.services.FormService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/form")
public class FormController {
    @Autowired
    private FormService formService;


    @PostMapping("/register-student")
    public  ResponseEntity<ApiResponseDTO<Object>> registerStudent(@Valid @ModelAttribute FormRequestDTO formRequestDTO){
        try {
            formService.registerStudent(formRequestDTO);
            var response = new ApiResponseDTO<>(true, "Estudante registrado com sucesso!", null);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException | DataIntegrityViolationException e) {
            var response = new ApiResponseDTO<>(false, e.getMessage(),null);
            return ResponseEntity.badRequest().body(response);
        }
    }
}
