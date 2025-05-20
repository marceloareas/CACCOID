import { useForm } from 'react-hook-form';
import * as S from './styles';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <S.Legend>Fale conosco</S.Legend>

        <S.FormGroup>
          <S.Label>Nome</S.Label>
          <S.Input
            type="text"
            {...register('nome', { required: 'Nome é obrigatório' })}
          />
          {errors.nome && <S.ErrorMsg>{errors.nome.message}</S.ErrorMsg>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>Email</S.Label>
          <S.Input
            type="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email inválido',
              },
            })}
          />
          {errors.email && <S.ErrorMsg>{errors.email.message}</S.ErrorMsg>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>Mensagem</S.Label>
          <S.TextArea
            rows={5}
            {...register('mensagem', { required: 'Mensagem é obrigatória' })}
          />
          {errors.mensagem && (
            <S.ErrorMsg>{errors.mensagem.message}</S.ErrorMsg>
          )}
        </S.FormGroup>

        <S.SubmitButton type="submit">Enviar mensagem</S.SubmitButton>
      </fieldset>
    </S.FormContainer>
  );
}
