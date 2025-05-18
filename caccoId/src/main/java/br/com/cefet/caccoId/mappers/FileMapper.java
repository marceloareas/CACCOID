package br.com.cefet.caccoId.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Mapper(componentModel = "spring")
public class FileMapper {

    @Named("multipartFileToBytes")
    public byte[] multipartFileToBytes(MultipartFile file) {
        try {
            return file != null ? file.getBytes() : null;
        } catch (IOException e) {
            throw new RuntimeException("Erro ao converter arquivo para bytes", e);
        }
    }
}