export function cpfMask(e: any) {
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);

  x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
  e.target.value = !x[2]
    ? x[1]
    : x[1] + "." + x[2] + (x[3] ? "." : "") + x[3] + (x[4] ? "-" + x[4] : "");

  return e.target.value;
}

export function cellMask(e: any) {
  e.target.maxLength = "15";
  let value = e.target.value.replace(/\D/g, "");
  let value2 = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  let value3 = value2.replace(/(\d)(\d{4})$/, "$1-$2");
  return value3;
}

export function cepMask(e: any) {
  let value = e.target.value.replace(/\D/g, "");
  let value2 = value.replace(/(\d{5})(\d)/, "$1-$2");
  let value3 = value2.replace(/(-\d{3})\d+?$/, "$1");
  return value3;
}

export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value

  value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(value) / 100
  )
    return result
}
