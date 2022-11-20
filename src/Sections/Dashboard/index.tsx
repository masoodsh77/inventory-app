import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("داشبورد", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5")
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8")
    ]),
    getItem("Files", "9", <FileOutlined />)
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger headerIcon",
              onClick: () => setCollapsed(!collapsed)
            }
          )}
          Welcome to your inventory app
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 100
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
