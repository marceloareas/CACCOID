import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Correção da importação
import { useSchema } from "../hooks/useSchema"; // Ajuste conforme o caminho correto
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { UserDataForm } from "../components/form/UserDataForm";

export const FormPage = () => {
  const { schema } = useSchema();
  const [step, setStep] = useState(0);
  const methods = useForm({
    defaultValues: schema.cast(),
    resolver: yupResolver(schema),
    mode: "all",
  });

  console.log(methods.formState);

  return (
    <div className="form-page">
      <DevTool control={methods.control} />
      <h1>Form Page</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
          <Controller
            control={methods.control}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                type="text"
                onChange={(e) => {
                  console.log(e.target.value);
                  onChange(e.target.value);
                }}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <input onChange={onChange} onBlur={onBlur} value={value} />
            )}
          />
          <input type="submit" />
          {step === 0 && (
            <UserDataForm control={methods.control} setStep={setStep} />
          )}
        </form>
      </FormProvider>
    </div>
  );
};
