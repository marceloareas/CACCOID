import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';
import { formatInput } from '../../utils/formatInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import * as S from './styles';



export const FormGenericStep = ({ fields }) => {
  const {
    control,
    formState,
  } = useFormContext();

  const fieldNames = [...fields.column1, ...fields.column2].map((f) => f.name);

  const formatDateToString = (date) =>
    date ? new Date(date).toISOString().split('T')[0] : '';

  const renderInput = ({
    field,
    name,
    type = 'text',
    placeholder,
    options,
  }) => {
    const inputProps = {
      ...field,
      className: `form-input ${formState?.formState?.errors[name] ? 'error' : ''}`,
      placeholder,
    };

    if (type === 'select') {
      return (
        <S.GenericSelect {...inputProps}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.GenericSelect>
      );
    }

    if (type === 'date') {
      <S.DatePickerContainer>
        <DatePicker
          selected={field.value ? new Date(field.value) : null}
          onChange={(date) =>
            field.onChange({ target: { value: formatDateToString(date) } })
          }
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          dropdownMode="select"
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          className="form-input"
          placeholderText="DD/MM/AAAA"
        />;
      </S.DatePickerContainer>
    }

    if (['phone', 'cpf', 'rg'].includes(type)) {
      return (
        <S.GenericInput
          type="text"
          value={field.value}
          onChange={(e) =>
            field.onChange(formatInput({ type, value: e.target.value }))
          }
        />
      );
    }
  };

  return (
    <S.FormStep>
      <S.Title>{fields.title}</S.Title>
      <S.FormGrid>
        <S.FormColumn>
          {fields.column1.map((field) => (
            <S.FormGroup key={field.name}>
              <S.FormInputLabel>
                {field.label}
                <span>*</span>
              </S.FormInputLabel>
              <Controller
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <>
                    {renderInput({
                      field: controllerField,
                      name: field.name,
                      type: field.type,
                      placeholder: field.placeholder,
                      options: field.options,
                    })}
                    {formState?.errors[field.name] && (
                      <S.ErrorMessage>
                        {formState?.errors[field.name].message}
                      </S.ErrorMessage>
                    )}
                  </>
                )}
              />
            </S.FormGroup>
          ))}
        </S.FormColumn>

        {fields.column2.length > 0 && (
          <S.FormColumn>
            {fields.column2.map((field) => (
              <div className="form-group" key={field.name}>
                <p className="form-input-label">
                  {field.label}
                  <span>*</span>
                </p>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: controllerField }) => (
                    <>
                      {renderInput({
                        field: controllerField,
                        name: field.name,
                        type: field.type,
                        placeholder: field.placeholder,
                        options: field.options,
                      })}
                      {formState?.errors[field.name] && (
                        <S.ErrorMessage>
                          {formState?.errors[field.name].message}
                        </S.ErrorMessage>
                      )}
                    </>
                  )}
                />
              </div>
            ))}
          </S.FormColumn>
        )}
      </S.FormGrid>
    </S.FormStep>
  );
};
