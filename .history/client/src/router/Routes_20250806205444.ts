import React from "react";
import { useRoutes } from "react-router-dom";
import AddOrEdit from "../components/AddOrEdit";
import Home from "../components/Home";
import About from "../components/About";
import Detail from "../components/Detail";
import Tel from "../components/Tel";
import Email from "../components/Email";
import { Navigate } from "react-router-dom";

const routes = [
  // 首页路由
  {
    path: "/home",
    element: <Home />,
  },

  // 添加页面路由
  {
    path: "/add",
    element: <AddOrEdit />,
  },

  // 关于页面及嵌套路由
  {
    path: "/about",
    element: <About />,
    children: [
      // 电话信息子路由
      { path: "tel", element: <Tel /> },
      // 邮箱信息子路由
      { path: "email", element: <Email /> },
      // 默认子路由（访问/about时自动跳转到/about/tel）
      { path: "", element: <Navigate replace to="tel" /> },
    ],
  },

  // 详情页路由（带动态参数id）
  {
    path: "/detail/:id",
    element: <Detail />,
  },

  // 编辑页路由（带动态参数id）
  {
    path: "/edit/:id",
    element: <AddOrEdit />,
  },

  // 根路径重定向到首页
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
];

function Routes() {
  return useRoutes(routes);
}

export default Routes;
