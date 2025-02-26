import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1E3D] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">页面不存在</p>
        <Button type="primary" onClick={() => navigate("/")}>
          返回首页
        </Button>
      </div>
    </div>
  );
};
