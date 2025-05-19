import { ActionButton } from '../components/ActionButton';
import trashIcon from '../assets/trash-icon.svg';

export default function Home() {
  return (
    <>
      <ActionButton disabled>Voltar</ActionButton>
      <ActionButton>Voltar</ActionButton>
      <ActionButton iconSrc={trashIcon} size="small" variant="danger" />
      <ActionButton iconSrc={trashIcon} variant="danger">
        Voltar
      </ActionButton>
      <ActionButton size="large">Voltar</ActionButton>
    </>
  );
}
