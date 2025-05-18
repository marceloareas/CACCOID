package br.com.cefet.caccoId.repositories;

import br.com.cefet.caccoId.models.Solicitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long> {
}
