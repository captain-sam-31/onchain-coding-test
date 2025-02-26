// 美元格式化
export const formatUSD = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}; 
// 千分位格式化
export const formatThousands = (amount: number, maxDecimals: number = 2): string => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals,
  }).format(amount);
};
