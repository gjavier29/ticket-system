import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "./Dashboard.css";

// import { SidebarLogo } from '../assets'

// import { SidebarLogo } from '../assets'

const { Header, Sider, Content } = Layout;
type Props = {};

const Dashboard: React.FC = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedLayout, setCollapsedLayout] = useState(200);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function collapseHandler() {
    setCollapsed(!collapsed);
    if (collapsed) {
      setCollapsedLayout(200);
    } else {
        setCollapsedLayout(80);
      }
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          background: colorBgContainer
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {/* <div className="logo"><img src={SidebarLogo} alt="" /></div> */}
        <Menu
          // theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: collapsedLayout }}>
        <Header style={{ padding: "0px 25px", background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => collapseHandler(),
            }
          )}
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;