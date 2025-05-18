// import { Controller, useFormContext } from "react-hook-form";
// import { useEffect, useRef } from "react";
// import { isEqual } from "lodash";
// import './styles.css';

// export const GenericStep = ({ fields, formData, updateFormData }) => {
//   const { control, watch, formState: { errors } } = useFormContext();
//   const previousValues = useRef(formData);

//   const fieldNames = [...fields.column1, ...fields.column2].map(f => f.name);
//   const watchedValues = watch(fieldNames);

//   useEffect(() => {
//     if (!isEqual(previousValues.current, watchedValues)) {
//       previousValues.current = watchedValues;
//       updateFormData(watchedValues);
//     }
//   }, [watchedValues, updateFormData]);

//   return (
//     <div className="form-step">
//       <h2>{fields.title}</h2>
//       <div className="form-grid">
//         <div className="form-first-column">
//           {fields.column1.map(({ name, label, placeholder, type = "text" }) => (
//             <div className="form-group" key={name}>
//               <p className="form-input-label">{label}<span>*</span></p>
//               <Controller
//                 name={name}
//                 control={control}
//                 defaultValue={formData[name] || ""}
//                 render={({ field }) => (
//                   <>
//                     <input
//                       {...field}
//                       type={type}
//                       placeholder={placeholder}
//                       className={`form-input ${errors[name] ? 'error' : ''}`}
//                     />
//                     {errors[name] && (
//                       <span className="error-message">{errors[name].message}</span>
//                     )}
//                   </>
//                 )}
//               />
//             </div>
//           ))}
//         </div>

//         {fields.column2.length > 0 && (
//           <div className="form-second-column">
//             {fields.column2.map(({ name, label, placeholder, type = "text" }) => (
//               <div className="form-group" key={name}>
//                 <p className="form-input-label">{label}<span>*</span></p>
//                 <Controller
//                   name={name}
//                   control={control}
//                   defaultValue={formData[name] || ""}
//                   render={({ field }) => (
//                     <>
//                       <input
//                         {...field}
//                         type={type}
//                         placeholder={placeholder}
//                         className={`form-input ${errors[name] ? 'error' : ''}`}
//                       />
//                       {errors[name] && (
//                         <span className="error-message">{errors[name].message}</span>
//                       )}
//                     </>
//                   )}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';
import { InputMask } from '../../utils/inputs-masks/InputMasks';
import './styles.css';

export const GenericStep = ({ fields, formData, updateFormData }) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const previousValues = useRef(formData);

  const fieldNames = [...fields.column1, ...fields.column2].map((f) => f.name);
  const watchedValues = watch(fieldNames);

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

    if (['date', 'phone', 'cpf', 'rg'].includes(type)) {
      return <InputMask type={type} {...inputProps} />;
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
