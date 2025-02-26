import { Currency, ExchangeRate, WalletBalance } from "@/types/dashboard";
import { CurrencyItem } from "./CurrencyItem";
import { memo } from "react";

interface CurrencyListProps {
  balances: WalletBalance[];
  currencies: Currency[];
  rates: ExchangeRate[];
}

export const CurrencyList = memo(
  ({ balances, currencies, rates }: CurrencyListProps) => {
    return (
      <div className="grow overflow-y-auto px-4 pb-4 w-full rounded-t-2xl bg-[#F4FAFE]">
        {balances.map((balance) => {
          const currency = currencies.find(
            (c) => c.coin_id === balance.currency
          );
          const rate = rates.find(
            (r) =>
              r.from_currency === balance.currency && r.to_currency === "USD"
          );

          if (!currency || !rate) return null;

          return (
            <CurrencyItem
              key={balance.currency}
              currency={currency}
              balance={balance}
              rate={rate}
            />
          );
        })}
      </div>
    );
  }
);
