import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';
import { formatInput } from '../../utils/formatInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FormGenericStep = ({ fields, formData, updateFormData }) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const previousValues = useRef(formData);

  const fieldNames = [...fields.column1, ...fields.column2].map((f) => f.name);
  const watchedValues = watch(fieldNames);

  const formatDateToString = (date) =>
    date ? new Date(date).toISOString().split('T')[0] : '';

  useEffect(() => {
    if (!isEqual(previousValues.current, watchedValues)) {
      previousValues.current = watchedValues;
      updateFormData(watchedValues);
    }
  }, [watchedValues, updateFormData]);

  const renderInput = ({
    field,
    name,
    type = 'text',
    placeholder,
    options,
  }) => {
    const inputProps = {
      ...field,
      className: `form-input ${errors[name] ? 'error' : ''}`,
      placeholder,
    };

    if (type === 'select') {
      return (
        <select {...inputProps}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === 'date') {
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
    }

    if (['phone', 'cpf', 'rg'].includes(type)) {
      return (
        <input
          type="text"
          value={field.value}
          onChange={(e) =>
            field.onChange(formatInput({ type, value: e.target.value }))
          }
          className="form-input"
        />
      );
    }

    return <input type={type} {...inputProps} />;
  };

  return (
    <div className="form-step">
      <h2>{fields.title}</h2>
      <div className="form-grid">
        <div className="form-first-column">
          {fields.column1.map((field) => (
            <div className="form-group" key={field.name}>
              <p className="form-input-label">
                {field.label}
                <span>*</span>
              </p>
              <Controller
                name={field.name}
                control={control}
                defaultValue={formData[field.name] || ''}
                render={({ field: controllerField }) => (
                  <>
                    {renderInput({
                      field: controllerField,
                      name: field.name,
                      type: field.type,
                      placeholder: field.placeholder,
                      options: field.options,
                    })}
                    {errors[field.name] && (
                      <span className="error-message">
                        {errors[field.name].message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          ))}
        </div>

        {fields.column2.length > 0 && (
          <div className="form-second-column">
            {fields.column2.map((field) => (
              <div className="form-group" key={field.name}>
                <p className="form-input-label">
                  {field.label}
                  <span>*</span>
                </p>
                <Controller
                  name={field.name}
                  control={control}
                  defaultValue={formData[field.name] || ''}
                  render={({ field: controllerField }) => (
                    <>
                      {renderInput({
                        field: controllerField,
                        name: field.name,
                        type: field.type,
                        placeholder: field.placeholder,
                        options: field.options,
                      })}
                      {errors[field.name] && (
                        <span className="error-message">
                          {errors[field.name].message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
