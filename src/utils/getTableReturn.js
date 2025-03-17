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
      return x[k]
        .toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
        .slice(0, 10);
    default:
      return x[k];
  }
};
