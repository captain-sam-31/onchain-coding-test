import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./router";
import { ConfigProvider } from "antd";
import { themeConf } from "./constants/theme";

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <ConfigProvider theme={themeConf}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
