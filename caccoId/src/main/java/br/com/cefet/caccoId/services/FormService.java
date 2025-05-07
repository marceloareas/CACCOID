package br.com.cefet.caccoId.services;

import br.com.cefet.caccoId.dtos.StudentRequestDTO;
import br.com.cefet.caccoId.models.Student;
import br.com.cefet.caccoId.repositories.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class FormService {
    private final StudentRepository studentRepository;

    public FormService(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }
    public Long registerStudent(StudentRequestDTO studentRequestDTO){
        var entity = Student.builder()
                .name(studentRequestDTO.getName())
                .email(studentRequestDTO.getEmail())
                .rg(studentRequestDTO.getRg())
                .cpf(studentRequestDTO.getCpf())
                .telephone(studentRequestDTO.getTelephone())
                .dateOfBirth(studentRequestDTO.getDateOfBirth())
                .build();

        Student studentSaved = studentRepository.save(entity);
        return studentSaved.getId();
    }
}
