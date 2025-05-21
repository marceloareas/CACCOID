package br.com.cefet.caccoId.repositories;

import br.com.cefet.caccoId.models.Solicitation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long> {
    @Query(value = """
            SELECT s.*
            FROM solicitation s
            JOIN student st ON s.student_id = st.id
            WHERE st.user_id = :userId
            """, nativeQuery = true)
    Solicitation getSolicitationStatusByLoggedUser(Long userId);
}
