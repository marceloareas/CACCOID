import React from 'react';
import { Link } from 'react-router-dom';
import {
  OuterContainer,
  AuthTitle,
  AuthLink,
  AuthButton,
  AuthInput,
  LoginContainer,
} from './AuthStyles';

export default function LoginComponent() {
  return (
    <div>
      <LoginContainer>
        <OuterContainer>
          <AuthTitle>Faça login com seu e-mail pessoal</AuthTitle>
          <form>
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <AuthInput
                type="email"
                placeholder="📧 Digite seu e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="sr-only">
                Senha
              </label>
              <AuthInput
                type="password"
                placeholder="🔒 Digite sua senha"
                required
              />
            </div>
            <div>
              <AuthButton
                onClick={() => {
                  alert('Login realizado com sucesso!');
                }}
              >
                <span>Login</span>
              </AuthButton>
            </div>
          </form>
        </OuterContainer>
      </LoginContainer>
    </div>
  );
}
