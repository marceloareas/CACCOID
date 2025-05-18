import React from 'react';
import { useForm } from 'react-hook-form';
import {
  OuterContainer,
  AuthTitle,
  AuthButton,
  AuthInput,
  RegisterContainer,
} from './AuthStyles';

export default function RegisterComponent() {
  const { register, watch } = useForm();
  const senha = watch('senha');

  return (
    <div>
      <RegisterContainer>
        <OuterContainer>
          <AuthTitle>Crie uma conta com seu e-mail pessoal</AuthTitle>
          <form>
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <AuthInput
                id="email"
                type="email"
                placeholder="📧 Digite seu e-mail"
                required
                autoComplete="username"
                {...register('email')}
              />
            </div>
            <div>
              <label htmlFor="senha" className="sr-only">
                Senha
              </label>
              <AuthInput
                id="senha"
                type="password"
                placeholder="🔒 Digite sua senha"
                required
                minLength={8}
                autoComplete="new-password"
                {...register('senha')}
              />
            </div>
            <div>
              <label htmlFor="confirmar-senha" className="sr-only">
                Confirmar Senha
              </label>
              <AuthInput
                id="confirmar-senha"
                type="password"
                placeholder="🔒 Digite sua senha novamente"
                required
                autoComplete="new-password"
                {...register('confirmarSenha', {
                  validate: (value) =>
                    value === senha || 'As senhas não coincidem',
                })}
              />
            </div>
            <AuthButton
              onClick={() => {
                alert('Registrado com sucesso!');
              }}
              type="submit"
            >
              <span>Registre-se</span>
            </AuthButton>
          </form>
        </OuterContainer>
      </RegisterContainer>
    </div>
  );
}
