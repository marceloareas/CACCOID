import React, { useState } from 'react';
import { Wrapper, Label, Input, ErrorMessage } from './styles';

export default function LabeledInput({
  title,
  placeholder,
  type = 'text',
  onChange,
  confirmPassword = false,
  password = '',
}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (val) => {
    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val) ? '' : 'E-mail inválido.';
    }

    if (type === 'password') {
      if (val.length < 6) return 'A senha deve ter no mínimo 6 caracteres.';
      if (confirmPassword && val !== password)
        return 'As senhas não coincidem.';
      return '';
    }

    return '';
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    const validationError = validate(val);
    setError(validationError);
    if (onChange) onChange(val, validationError);
  };

  return (
    <Wrapper>
      <Label>{title}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
}
