package br.com.cefet.caccoId.mappers;

import br.com.cefet.caccoId.dtos.StudentRequestDTO;
import br.com.cefet.caccoId.models.Student;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    Student toEntity(StudentRequestDTO dto);
    StudentRequestDTO toDto(Student entity);
}
