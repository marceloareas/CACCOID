package br.com.cefet.caccoId.controllers;


import br.com.cefet.caccoId.dtos.StudentRequestDTO;
import br.com.cefet.caccoId.services.FormService;
import jakarta.validation.Valid;
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
    public ResponseEntity<String> registerStudent(@Valid @RequestBody StudentRequestDTO studentRequestDTO){
        var studentId = formService.registerStudent(studentRequestDTO);
        return ResponseEntity.ok("Estudante registrado com sucesso!");
    }
}
