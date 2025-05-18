import { Controller, useFormContext } from 'react-hook-form';

export const UserDataForm = ({ control, setStep }) => {
  const { watch } = useFormContext();
  const nome = watch('username');
  console.log(nome);
  return (
    <div className="user-data-form">
      <h2>User Data Form</h2>
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            type="text"
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <button type="button" onClick={() => setStep(1)}>
        Next
      </button>
    </div>
  );
};
