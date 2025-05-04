import { formatDate } from "./formatDate";

export const getTableReturn = (x, k) => {
  switch (k) {
    case "total":
      return x[k]?.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    case "percentual":
      return `${Number(x[k]).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`;
    case "rep":
      return `${Number(x[k]).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`;
    case "data":
      return formatDate(x[k])
    default:
      return x[k];
  }
};
