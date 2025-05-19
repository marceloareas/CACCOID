import { Controller, useFormContext } from 'react-hook-form';
import { formatInput } from '../../utils/formatInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import * as S from './styles';
import GenericInput from '../GenericInput';

export const FormGenericStep = ({ fields }) => {
  const { control, formState } = useFormContext();

  const formatDateToString = (date) =>
    date ? new Date(date).toISOString().split('T')[0] : '';

  return (
    <S.FormStep>
      <S.Title>{fields.title}</S.Title>
      <S.FormGrid>
        <S.FormColumn>
          {fields.column1.map((item) => (
            <S.FormGroup key={item.name}>
              <S.FormInputLabel>
                {item.label}
                <span>*</span>
              </S.FormInputLabel>
              <Controller
                name={item.name}
                control={control}
                render={({ field }) => {
                  return item.name === 'birthDate' ? (
                    <S.DatePickerContainer>
                      <DatePicker
                        selected={field.value ? new Date(field.value) : null}
                        onChange={(date) =>
                          field.onChange(formatDateToString(date))
                        }
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        dropdownMode="select"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown
                        className="form-input"
                        placeholderText="DD/MM/AAAA"
                      />
                    </S.DatePickerContainer>
                  ) : (
                    <GenericInput
                      name={item.name}
                      placeholder={item.placeholder}
                      value={field.value || ''}
                      onChange={(e) => {
                        field.onChange(
                          formatInput({
                            type: item.name,
                            value: e.target.value,
                          })
                        );
                      }}
                      {...item}
                    />
                  );
                }}
              />
              {formState?.errors[item.name] && (
                <S.ErrorMessage>
                  {formState?.errors[item.name].message}
                </S.ErrorMessage>
              )}
            </S.FormGroup>
          ))}
        </S.FormColumn>

        {fields.column2.length > 0 && (
          <S.FormColumn>
            {fields.column2.map((item) => (
              <S.FormGroup key={item.name}>
                <S.FormInputLabel>
                  {item.label}
                  <span>*</span>
                </S.FormInputLabel>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => {
                    return item.name === 'birthDate' ? (
                      <S.DatePickerContainer>
                        <DatePicker
                          selected={field.value ? new Date(field.value) : null}
                          onChange={(date) =>
                            field.onChange({
                              target: { value: formatDateToString(date) },
                            })
                          }
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          dropdownMode="select"
                          yearDropdownItemNumber={100}
                          scrollableYearDropdown
                          className="form-input"
                          placeholderText="DD/MM/AAAA"
                        />
                      </S.DatePickerContainer>
                    ) : (
                      <GenericInput
                        name={item.name}
                        placeholder={item.placeholder}
                        value={field.value || ''}
                        onChange={(e) => {
                          field.onChange(
                            formatInput({
                              type: item.name,
                              value: e.target.value,
                            })
                          );
                        }}
                        {...item}
                      />
                    );
                  }}
                />
                {formState?.errors[item.name] && (
                  <S.ErrorMessage>
                    {formState?.errors[item.name].message}
                  </S.ErrorMessage>
                )}
              </S.FormGroup>
            ))}
          </S.FormColumn>
        )}
      </S.FormGrid>
    </S.FormStep>
  );
};
