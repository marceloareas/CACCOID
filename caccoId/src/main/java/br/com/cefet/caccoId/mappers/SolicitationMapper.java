package br.com.cefet.caccoId.mappers;

import br.com.cefet.caccoId.dtos.SolicitationRequestDTO;
import br.com.cefet.caccoId.models.Solicitation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring", uses = FileMapper.class)
public interface SolicitationMapper {
    @Mappings({
            @Mapping(source = "enrollmentProof", target = "enrollmentProof", qualifiedByName = "multipartFileToBytes"),
            @Mapping(source = "identityDocumentFront", target = "identityDocumentFront", qualifiedByName = "multipartFileToBytes"),
            @Mapping(source = "identityDocumentBack", target = "identityDocumentBack", qualifiedByName = "multipartFileToBytes"),
            @Mapping(source = "studentPhoto", target = "studentPhoto", qualifiedByName = "multipartFileToBytes"),
            @Mapping(source = "paymentProof", target = "paymentProof", qualifiedByName = "multipartFileToBytes")
    })
    Solicitation toEntity(SolicitationRequestDTO dto);
}
