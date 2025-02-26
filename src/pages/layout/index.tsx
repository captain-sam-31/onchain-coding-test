import { Outlet, useLocation } from "react-router-dom";
import { TabBar } from "../../components/TabBar";
import { TopBar } from "../../components/TopBar";

export const Layout = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes("defi") ? "defi" : "wallet";

  return (
    <div className="h-screen bg-[#0A1E3D]">
      <TopBar />
      <div className="h-[calc(100vh-6rem)]">
        <Outlet />
      </div>
      <TabBar activeTab={activeTab} />
    </div>
  );
};
