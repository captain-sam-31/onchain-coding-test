import { create } from "zustand";
import type { Currency, ExchangeRate, WalletBalance } from "../types/dashboard";
import {
  getWalletBalance,
  getSupportedCurrencies,
  getExchangeRates,
} from "../services/dashboard";

interface WalletStore {
  balances: WalletBalance[];
  currencies: Currency[];
  rates: ExchangeRate[];
  isLoading: boolean;
  error: string | null;
  fetchBalances: () => Promise<void>;
  fetchCurrencies: () => Promise<void>;
  fetchRates: () => Promise<void>;
}

export const useWalletStore = create<WalletStore>((set, get) => ({
  balances: [],
  currencies: [],
  rates: [],
  isLoading: false,
  error: null,
  fetchBalances: async () => {
    set({ isLoading: true });
    try {
      const balances = await getWalletBalance();
      set({ balances });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchCurrencies: async () => {
    try {
      const currencies = await getSupportedCurrencies();
      set({ currencies });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
  fetchRates: async () => {
    try {
      const newRates = await getExchangeRates();
      const currentRates = get().rates;

      // 检查汇率是否有变化
      const hasRatesChanged =
        JSON.stringify(newRates) !== JSON.stringify(currentRates);

      hasRatesChanged && set({ rates: newRates });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
}));
