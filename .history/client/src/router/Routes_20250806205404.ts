import { route, index } from "@react-router/dev/routes";
import { type RouteConfig } from "@react-router/dev/routes";
import Home from "../components/Home";
import AddOrEdit from "../components/AddOrEdit";
import About from "../components/About";
import Tel from "../components/Tel";
import Email from "../components/Email";
import Detail from "../components/Detail";
import { Navigate } from "react-router-dom";

export default [
  // 首页路由
  route("home", () => <Home />),

  // 添加页面路由
  route("add", () => <AddOrEdit />),

  // 关于页面及嵌套路由
  route("about", () => <About />, [
    // 电话信息子路由
    route("tel", () => <Tel />),
    // 邮箱信息子路由
    route("email", () => <Email />),
    // 默认子路由（空路径）
    index(() => <Navigate replace to="tel" />),
  ]),

  // 详情页路由（带动态参数id）
  route("detail/:id", () => <Detail />),

  // 编辑页路由（带动态参数id）
  route("edit/:id", () => <AddOrEdit />),

  // 根路径重定向到首页
  route("", () => <Navigate replace to="home" />),
] satisfies RouteConfig;
