import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const InputMask = ({ type, value, onChange, ...props }) => {
  // Funções de formatação
  const formatDateToString = (date) => date ? new Date(date).toISOString().split('T')[0] : '';
  
  const handleChange = (e) => {
    let val = e.target.value;
    
    if (type === 'cpf') {
      val = val.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    }
    else if (type === 'rg') {
      val = val.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1})$/, '$1-$2');
    }
    else if (type === 'phone') {
      val = val.replace(/\D/g, '')
        .replace(/^(\d{0,2})/, '($1')
        .replace(/^\((\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .substring(0, 15);
    }
    
    onChange({ target: { value: val } });
  };

  if (type === 'date') {
    return (
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={date => onChange({ target: { value: formatDateToString(date) } })}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        dropdownMode="select"
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        className="form-input"
        placeholderText="DD/MM/AAAA"
        {...props}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="form-input"
      {...props}
    />
  );
};