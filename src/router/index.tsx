import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../pages/layout";
import { Dashboard } from "../pages/dashboard";
import { Page404 } from "../pages/page404";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      // 后续添加更多路由
      //   {
      //     path: "defi",
      //     element: <DeFi />,
      //   },
    ],
  },
  {
    path: "404",
    element: <Page404 />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];
