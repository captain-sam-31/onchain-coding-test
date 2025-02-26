import request from "../utils/request";
import { API } from "../constants/api";
import type { ApiResponse } from "../types/api";
import type { Currency, ExchangeRate, WalletBalance } from "../types/dashboard";

// 实际项目中，需使用后端提供的api
export const walletAPI = {
  // 获取钱包余额
  getWalletBalance: () => {
    return request
      .get<ApiResponse<WalletBalance[]>>(API.WALLET.GET_BALANCES)
      .then((res) => res.data);
  },

  // 获取支持的币种
  getSupportedCurrencies: () => {
    return request
      .get<ApiResponse<Currency[]>>(API.WALLET.GET_CURRENCIES)
      .then((res) => res.data);
  },

  // 获取汇率
  getExchangeRates: () => {
    return request
      .get<ApiResponse<ExchangeRate[]>>(API.WALLET.GET_RATES)
      .then((res) => res.data);
  },
};

// 以下为模拟数据，实际项目中应该调用上面的 walletAPI.xxx()
export const getWalletBalance = async (): Promise<WalletBalance[]> => {
  return {
    ok: true,
    warning: "",
    wallet: [
      { currency: "USDT", amount: 1245 },
      { currency: "BTC", amount: 1.4 },
      { currency: "ETH", amount: 20.3 },
      { currency: "CRO", amount: 259.1 },
      { currency: "DAI", amount: 854 },
    ],
  }.wallet;
};

export const getSupportedCurrencies = async (): Promise<Currency[]> => {
  return {
    currencies: [
      {
        coin_id: "BTC",
        name: "Bitcoin",
        symbol: "BTC",
        token_decimal: 8,
        contract_address: "",
        withdrawal_eta: ["30 secs", "2 mins", "30 mins"],
        colorful_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1246f55568a400e48ac233/bitcoin.png",
        gray_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/gray_logo/5c1246f55568a400e48ac233/bitcoin1.png",
        has_deposit_address_tag: false,
        min_balance: 0,
        blockchain_symbol: "BTC",
        trading_symbol: "BTC",
        code: "BTC",
        explorer: "https://blockchair.com/bitcoin/transaction/",
        is_erc20: false,
        gas_limit: 0,
        token_decimal_value: "10000000",
        display_decimal: 8,
        supports_legacy_address: false,
        deposit_address_tag_name: "",
        deposit_address_tag_type: "",
        num_confirmation_required: 1,
      },
      {
        coin_id: "ETH",
        name: "Ethereum",
        symbol: "ETH",
        token_decimal: 18,
        contract_address: "",
        withdrawal_eta: ["30 secs", "2 mins", "30 mins"],
        colorful_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c12487d5568a4017c20a993/ethereum.png",
        gray_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/gray_logo/5c12487d5568a4017c20a993/ethereum.png",
        has_deposit_address_tag: false,
        min_balance: 0,
        blockchain_symbol: "ETH",
        trading_symbol: "ETH",
        code: "ETH",
        explorer: "https://etherscan.io/tx/",
        is_erc20: false,
        gas_limit: 21000,
        token_decimal_value: "100000000000000000",
        display_decimal: 8,
        supports_legacy_address: false,
        deposit_address_tag_name: "",
        deposit_address_tag_type: "",
        num_confirmation_required: 1,
      },
      {
        coin_id: "CRO",
        name: "Crypto.com Coin",
        symbol: "CRO",
        token_decimal: 8,
        contract_address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
        withdrawal_eta: ["30 secs", "2 mins", "30 mins"],
        colorful_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1248c15568a4017c20aa87/cro.png",
        gray_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/gray_logo/5c1248c15568a4017c20aa87/cro.png",
        has_deposit_address_tag: false,
        min_balance: 0,
        blockchain_symbol: "CRO",
        trading_symbol: "CRO",
        code: "CRO",
        explorer: "https://etherscan.io/tx/",
        is_erc20: true,
        gas_limit: 200000,
        token_decimal_value: "10000000",
        display_decimal: 8,
        supports_legacy_address: false,
        deposit_address_tag_name: "",
        deposit_address_tag_type: "",
        num_confirmation_required: 1,
      },
      {
        coin_id: "USDT",
        name: "Tether",
        symbol: "USDT",
        token_decimal: 6,
        contract_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        withdrawal_eta: ["30 secs", "2 mins", "30 mins"],
        colorful_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c12487f5568a4017c20a999/tether.png",
        gray_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/gray_logo/5c12487f5568a4017c20a999/tether.png",
        has_deposit_address_tag: false,
        min_balance: 0,
        blockchain_symbol: "USDT",
        trading_symbol: "USDT",
        code: "USDT",
        explorer: "https://etherscan.io/tx/",
        is_erc20: true,
        gas_limit: 200000,
        token_decimal_value: "100000",
        display_decimal: 8,
        supports_legacy_address: false,
        deposit_address_tag_name: "",
        deposit_address_tag_type: "",
        num_confirmation_required: 1,
      },
      {
        coin_id: "DAI",
        name: "Dai",
        symbol: "DAI",
        token_decimal: 18,
        contract_address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        withdrawal_eta: ["30 secs", "2 mins", "30 mins"],
        colorful_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5e01c4cd49cde700adb27b0d/4943__1_.png",
        gray_image_url:
          "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/gray_logo/5e01c4cd49cde700adb27b0d/DAIxxxhdpi.png",
        has_deposit_address_tag: false,
        min_balance: 0,
        blockchain_symbol: "DAI",
        trading_symbol: "DAI",
        code: "DAI",
        explorer: "https://etherscan.io/tx/",
        is_erc20: true,
        gas_limit: 200000,
        token_decimal_value: "100000000000000000",
        display_decimal: 8,
        supports_legacy_address: false,
        deposit_address_tag_name: "",
        deposit_address_tag_type: "",
        num_confirmation_required: 1,
      },
    ],
  }.currencies;
};

export const getExchangeRates = async (): Promise<ExchangeRate[]> => {
  return [
    {
      from_currency: "USDT",
      to_currency: "USD",
      rates: [{ amount: "1000", rate: "1.000727" }],
      time_stamp: 1602080062,
    },
    {
      from_currency: "BTC",
      to_currency: "USD",
      rates: [{ amount: "1000", rate: "10603.900000" }],
      time_stamp: 1602080062,
    },
    {
      from_currency: "ETH",
      to_currency: "USD",
      rates: [{ amount: "1000", rate: "340.210000" }],
      time_stamp: 1602080062,
    },
    {
      from_currency: "CRO",
      to_currency: "USD",
      rates: [{ amount: "1000", rate: "0.147268" }],
      time_stamp: 1602080062,
    },
    {
      from_currency: "DAI",
      to_currency: "USD",
      rates: [{ amount: "1000", rate: "1.010000" }],
      time_stamp: 1602080062,
    },
  ];
};
