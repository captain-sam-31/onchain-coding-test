import { ScanOutlined, SettingOutlined } from "@ant-design/icons";
import { message } from "antd";
import { memo } from "react";

export const TopBar = memo(() => {
  const [msg, contextHolder] = message.useMessage();
  // 设置
  const handleSetting = () => {
    msg.info("设置");
  };
  // 扫码
  const handleScan = () => {
    msg.info("扫码");
  };

  return (
    <>
      {contextHolder}
      <div className="h-[2rem] text-white text-xl flex justify-between items-center px-4">
        <SettingOutlined onClick={handleSetting} />
        <ScanOutlined onClick={handleScan} />
      </div>
    </>
  );
});
