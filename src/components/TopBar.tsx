import { ScanOutlined, SettingOutlined } from "@ant-design/icons";
import { message } from "antd";

export const TopBar = () => {
  // 设置
  const handleSetting = () => {
    message.info("设置");
  };
  // 扫码
  const handleScan = () => {
    message.info("扫码");
  };

  return (
    <div className="h-[2rem] text-white text-xl flex justify-between items-center px-4">
      <SettingOutlined onClick={handleSetting} />
      <ScanOutlined onClick={handleScan} />
    </div>
  );
};
