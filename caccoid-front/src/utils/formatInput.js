export const formatInput = ({ type, value }) => {
  if (type === 'cpf') {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  } else if (type === 'rg') {
    return value.substring(0, 20);

  } else if (type === 'phone') {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{0,2})/, '($1')
      .replace(/^\((\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 15);
  }
};
