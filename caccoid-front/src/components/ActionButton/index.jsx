import * as S from "./styles";

export const ActionButton = ({
  className,
  variant = "primary",
  children,
  disabled,
  size,
  type = "button",
  onClick,
  iconSrc,
  ...props
}) => {
  return (
    <S.Button
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
      iconSrc={iconSrc}
      {...props}
    >
      <span>{children}</span>
      {iconSrc && <img src={iconSrc} alt="ícone" width={16} height={16} />}
    </S.Button>
  );
};
