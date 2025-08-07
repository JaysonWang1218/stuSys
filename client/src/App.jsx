import { NavLink } from "react-router-dom";
import "./css/App.css";
import RouterConfig from "./router/Routes";
function App() {
  return (
    //最外层容器
    <div id="app" className="container">
      {/* 导航栏 */}
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              学生管理系统
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <NavLink to="/home" className="navigation">
                主页
              </NavLink>
              <NavLink to="/about" className="navigation">
                关于我们
              </NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NavLink to="/add" className="navigation">
                添加任务
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      {/* 匹配的路由器所对应的组件显示在这个位置 */}
      <div className="content">
        <RouterConfig />
      </div>
    </div>
  );
}
export default App;
