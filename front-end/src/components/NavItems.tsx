import React from "react";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space, Button } from "antd";

type Props = {};

const NavItems = (props: Props) => {
  return (
    <Space align="center">
      <Badge count={5} size="default">
        <Button type="link" style={{padding: 0}}>
          <BellOutlined style={{ fontSize: 24 }} />
        </Button>
      </Badge>
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    </Space>
  );
};

export default NavItems;
