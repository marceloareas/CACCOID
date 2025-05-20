package br.com.cefet.caccoId.mappers;

import br.com.cefet.caccoId.dtos.StudentRequestDTO;
import br.com.cefet.caccoId.models.Student;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    Student toEntity(StudentRequestDTO dto);
}
