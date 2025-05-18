package br.com.cefet.caccoId.controllers;


import br.com.cefet.caccoId.dtos.ApiResponseDTO;
import br.com.cefet.caccoId.dtos.FormRequestDTO;
import br.com.cefet.caccoId.dtos.StudentRequestDTO;
import br.com.cefet.caccoId.services.FormService;
import jakarta.validation.Valid;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/form")
public class FormController {
    private final FormService formService;

    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/register-student")
    public  ResponseEntity<ApiResponseDTO<Object>> registerStudent(@Valid @ModelAttribute FormRequestDTO formRequestDTO){
        try {
            formService.registerStudent(formRequestDTO);
            var response = new ApiResponseDTO<>(true, "Estudante registrado com sucesso!", null);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException | DataIntegrityViolationException e) {
            var response = new ApiResponseDTO<>(true, e.getMessage(),null);
            return ResponseEntity.badRequest().body(response);
        }
    }
}
