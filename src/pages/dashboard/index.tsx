import { useMemo } from "react";
import { useWallet } from "@/hooks/useWallet";
import { Header } from "./components/Header";
import { CurrencyList } from "./components/CurrencyList";
import { Spin } from "antd";

export const Dashboard = () => {
  const { balances, currencies, rates, isLoading } = useWallet();

  // 计算总资产
  const totalAssets = useMemo(() => {
    return balances.reduce((total, balance) => {
      const rate = rates.find(
        (r) => r.from_currency === balance.currency && r.to_currency === "USD"
      );
      if (!rate || !rate.rates[0]?.rate) return total;
      return total + balance.amount * Number(rate.rates[0].rate);
    }, 0);
  }, [balances, rates]);

  return (
    <Spin spinning={isLoading}>
      <div className="h-[calc(100vh-6rem)] flex flex-col">
        <Header totalAssets={totalAssets} />
        <CurrencyList
          balances={balances}
          currencies={currencies}
          rates={rates}
        />
      </div>
    </Spin>
  );
};
