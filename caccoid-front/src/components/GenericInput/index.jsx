import * as S from '../FormGenericStep/styles';

export default function GenericInput(props) {
  const { inputType, inputOptions } = props;
  if (inputType === 'select') {
    return (
      <S.GenericSelect {...props}>
        {inputOptions?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.GenericSelect>
    );
  }
  return <S.GenericInput type={inputType} {...props} />;
}
