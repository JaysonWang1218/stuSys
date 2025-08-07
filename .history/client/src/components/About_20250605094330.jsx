import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {Tabs} from 'antd';
const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;
function About(props) {
  return (
    <div className="about container">
      <h1 className="page-header">使用说明</h1>
      <p>通过此系统来熟悉 react 以及 react router 的使用</p>
      <NavLink to="/about/email" className="navigation">
        邮箱
      </NavLink>
      <NavLink to="/about/tel" className="navigation">
        电话
      </NavLink>
      <Outlet />
    </div>
  );
}

export default About;
