import { type RouteConfig, route, index } from "@react-router/dev/routes";
import Home from "../components/Home";
import AddOrEdit from "../components/AddOrEdit";
import About from "../components/About.tsx";
import Detail from "../components/Detail";
import Tel from "../components/Tel";
import Email from "../components/Email";
import { Navigate } from "react-router-dom";

export default [
  // 首页路由
  route("home", () => <Home />),

  // 添加页面路由
  route("add", () => <AddOrEdit />),

  // 关于页面及嵌套路由
  route("about", () => <About />, [
    route("tel", () => <Tel />),
    route("email", () => <Email />),
    index(() => <Navigate replace to="tel" />),
  ]),

  // 详情页路由（带动态参数）
  route("detail/:id", () => <Detail />),

  // 编辑页路由（带动态参数）
  route("edit/:id", () => <AddOrEdit />),

  // 根路径重定向
  route("", () => <Navigate replace to="home" />),
] satisfies RouteConfig;
