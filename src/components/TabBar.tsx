import { useNavigate } from "react-router-dom";
import DeFiSVG from "@/assets/DeFiSVG";
import WalletSVG from "@/assets/WalletSVG";
import { memo } from "react";

interface TabBarProps {
  activeTab: "wallet" | "defi";
}

export const TabBar = memo(({ activeTab }: TabBarProps) => {
  const navigate = useNavigate();

  const handleTabChange = (tab: "wallet" | "defi") => {
    navigate(tab === "wallet" ? "/dashboard" : "/defi");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[4rem] bg-white border-t border-gray-200 flex">
      <div
        onClick={() => handleTabChange("wallet")}
        className={`flex w-1/2 h-full flex-col items-center justify-center gap-1 text-sm font-medium ${
          activeTab === "wallet" ? "text-[#4998F3]" : "text-gray-500"
        }`}
      >
        <WalletSVG className="w-6 h-6" />
        <p>Wallet</p>
      </div>
      <div
        onClick={() => handleTabChange("defi")}
        className={`flex w-1/2 h-full flex-col items-center justify-center gap-1 text-sm font-medium ${
          activeTab === "defi" ? "text-[#4998F3]" : "text-gray-500"
        }`}
      >
        <DeFiSVG className="w-6 h-6" />
        <p>DeFi</p>
      </div>
    </div>
  );
});
