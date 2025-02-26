import { formatThousands } from "../../../utils/format";
import SendSVG from "../../../assets/SendSVG";
import Logo from "/logo.png";
import { useMemo } from "react";
import { Tooltip } from "antd";

interface HeaderProps {
  totalAssets: number;
  onSend: () => void;
  onReceive: () => void;
}

export const Header = ({ totalAssets, onSend, onReceive }: HeaderProps) => {
  const total = useMemo(() => formatThousands(totalAssets), [totalAssets]);

  return (
    <div className="pt-4 pb-6 rounded-b-3xl shadow-sm">
      <div className="text-center text-white mb-4 max-w-2xl mx-auto">
        <div className="text-sm mb-3 flex items-center justify-center h-6 gap-2 text-[#B6B8BA]">
          <img src={Logo} alt="logo" className="h-full rounded-full" />
          <p className="leading-[1.5rem] text-[1.125rem] text-white">
            crypto.com
          </p>
          <p> | </p>
          <p className="font-bold">DEFI WALLET</p>
        </div>
        <div className="text-lg font-bold text-[#797877] flex items-center justify-center gap-1">
          <p>$ </p>
          <Tooltip title={`$ ${total}`} trigger="hover">
            <p className="text-white text-2xl max-w-[50%] ellipsis">{total}</p>
          </Tooltip>
          <p> USD</p>
        </div>
      </div>
      <div className="flex gap-10 pb-6 justify-center">
        <div
          onClick={onSend}
          className="bg-[#4998F3] relative text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors"
        >
          <SendSVG className="w-4 h-4" />
          <span className="text-sm absolute bottom-[-24px]">Send</span>
        </div>
        <div
          onClick={onReceive}
          className="bg-[#4998F3] relative text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors"
        >
          <SendSVG className="w-4 h-4 rotate-180" />
          <span className="text-sm absolute bottom-[-24px]">Receive</span>
        </div>
      </div>
    </div>
  );
};
