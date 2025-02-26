import { CurrencyItem } from "./CurrencyItem";
import type {
  Currency,
  WalletBalance,
  ExchangeRate,
} from "../../../types/index";

interface CurrencyListProps {
  balances: WalletBalance[];
  currencies: Currency[];
  rates: ExchangeRate[];
}

export const CurrencyList = ({
  balances,
  currencies,
  rates,
}: CurrencyListProps) => {
  return (
    <div className="grow overflow-y-auto px-4 pb-4 w-full rounded-t-2xl bg-[#F4FAFE]">
      {balances.map((balance) => {
        const currency = currencies.find((c) => c.coin_id === balance.currency);
        const rate = rates.find(
          (r) => r.from_currency === balance.currency && r.to_currency === "USD"
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
};
