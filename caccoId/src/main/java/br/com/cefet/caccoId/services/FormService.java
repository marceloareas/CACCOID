package br.com.cefet.caccoId.services;

import br.com.cefet.caccoId.dtos.FormRequestDTO;
import br.com.cefet.caccoId.mappers.SolicitationMapper;
import br.com.cefet.caccoId.mappers.StudentMapper;
import br.com.cefet.caccoId.models.User;
import br.com.cefet.caccoId.repositories.SolicitationRepository;
import br.com.cefet.caccoId.repositories.StudentRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

import java.io.IOException;

@Service
public class FormService {
    private final StudentRepository studentRepository;
    private final SolicitationRepository solicitationRepository;
    private final StudentMapper studentMapper;
    private final SolicitationMapper solicitationMapper;
    private static final Logger log = LoggerFactory.getLogger(FormService.class);

    public FormService(StudentRepository studentRepository,
                       StudentMapper studentMapper,
                       SolicitationMapper solicitationMapper,
                       SolicitationRepository solicitationRepository){
        this.studentRepository = studentRepository;
        this.studentMapper = studentMapper;
        this.solicitationMapper = solicitationMapper;
        this.solicitationRepository = solicitationRepository;
    }

    public void registerStudent(FormRequestDTO formRequestDTO)
            throws IllegalArgumentException, DataIntegrityViolationException{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User loggedUser = (User) auth.getPrincipal();
        MDC.put("cpf", formRequestDTO.getStudent().getCpf());

        try {
            log.info("Iniciando registro do estudante: {}", formRequestDTO.getStudent().getName());

            var student = studentMapper.toEntity(formRequestDTO.getStudent());

            if (studentRepository.existsByEmail(student.getEmail())) {
                log.warn("Tentativa de registro com e-mail já existente: {}", student.getEmail());
                throw new IllegalArgumentException("Já existe um estudante cadastrado com este e-mail.");
            }

            try {
                student.setUser(loggedUser);
                var studentSaved = studentRepository.save(student);
                log.info("Estudante registrado com sucesso. ID: {}", studentSaved.getId());

                try {
                    var solicitation = solicitationMapper.toEntity(formRequestDTO.getSolicitation());
                    solicitation.setStudent(studentSaved);
                    var solicitationSaved = solicitationRepository.save(solicitation);
                    log.info("Solicitação do estudante {} registrada com sucesso. ID: {}", studentSaved.getId(), solicitationSaved.getId());
                }catch (Exception ex){
                    log.error("Falha ao salvar solicitação: {}", ex.getMessage());
                }
            }
            catch (Exception e){
                System.out.println(e.getMessage());
                throw new DataIntegrityViolationException("Esse usuário já tem uma solicitação ativa.");
            }
        }finally {
            MDC.clear();
        }
    }
}
