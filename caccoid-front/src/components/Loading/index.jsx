import * as S from './styles';

export default function Loading() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}
    >
      <S.Loader />
      <S.LoadingText>Carregando...</S.LoadingText>
    </div>
  );
}
