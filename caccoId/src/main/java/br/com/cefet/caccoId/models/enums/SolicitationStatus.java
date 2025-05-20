package br.com.cefet.caccoId.models.enums;

import lombok.Getter;

@Getter
public enum SolicitationStatus {
    UNDER_REVIEW("Em análise"),
    PENDING("Pendente"),
    AUTHORIZED("Autorizada");

    private final String status;

    SolicitationStatus(String status) {
        this.status = status;
    }

    public SolicitationStatus next() {
        return switch (this) {
            case UNDER_REVIEW -> PENDING;
            case PENDING, AUTHORIZED -> AUTHORIZED;
        };
    }
}
