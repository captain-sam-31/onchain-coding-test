import { formatThousands, formatUSD } from "@/utils/format";
import DefaultLogo from "/logo.png";
import type { Currency, WalletBalance, ExchangeRate } from "@/types/dashboard";
import { memo, useMemo } from "react";
import { Tooltip } from "antd";

interface CurrencyItemProps {
  currency: Currency;
  balance: WalletBalance;
  rate: ExchangeRate;
}

export const CurrencyItem = memo(
  ({ currency, balance, rate }: CurrencyItemProps) => {
    const usdVal = useMemo(() => {
      return rate.rates[0]?.rate
        ? formatUSD(balance.amount * Number(rate.rates[0].rate))
        : "-";
    }, [rate.rates[0]?.rate]);

    return (
      <Tooltip
        trigger="hover"
        placement="topRight"
        title={
          <div>
            <p>{currency.name}</p>
            <p>
              {formatThousands(balance.amount)} {currency.symbol}
            </p>
            <p>{usdVal}</p>
          </div>
        }
      >
        <div className="flex items-center justify-between p-4 rounded-lg mt-4 gap-2 shadow-md border border-gray transition-all hover:bg-blue-200">
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              src={currency.colorful_image_url}
              alt={currency.name}
              className="w-10 h-10 rounded-full"
              onError={(e) => (e.currentTarget.src = DefaultLogo)}
            />
            <h3 className="font-medium text-gray-900 ellipsis">
              {currency.name}
            </h3>
          </div>
          <div className="text-right max-w-[50%] min-w-[30%] overflow-hidden">
            <div className="flex items-center justify-end gap-1">
              <p className="font-medium text-gray-900 ellipsis">
                {formatThousands(balance.amount)}
              </p>
              <p>{currency.symbol}</p>
            </div>
            <p className="text-sm text-gray-500 ellipsis">{usdVal}</p>
          </div>
        </div>
      </Tooltip>
    );
  }
);
