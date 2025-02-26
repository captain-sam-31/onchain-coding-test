import { useEffect, useRef } from "react";
import { useWalletStore } from "@/store/wallet";
import { REFRESH_INTERVAL } from "@/constants/config";

export const useWallet = () => {
  const {
    balances,
    currencies,
    rates,
    isLoading,
    error,
    fetchBalances,
    fetchCurrencies,
    fetchRates,
  } = useWalletStore();

  // 用于存储轮询定时器
  const pollInterval = useRef<number>();

  useEffect(() => {
    // 初始化数据
    fetchBalances();
    fetchCurrencies();
    fetchRates();

    // 由于汇率频繁更新，需定时刷新最新汇率
    pollInterval.current = window.setInterval(() => {
      fetchRates();
    }, REFRESH_INTERVAL);

    // 组件卸载时清除轮询
    return () => {
      if (pollInterval.current) {
        clearInterval(pollInterval.current);
      }
    };
  }, []);

  return {
    balances,
    currencies,
    rates,
    isLoading,
    error,
  };
};
