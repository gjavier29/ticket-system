
import React, { useState } from 'react';
import { UserOutlined, BellOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Input  } from "antd";

type Props = {};

const NavItems = (props: Props) => {
  const { Search } = Input; 

  const onSearch = (value: string) => console.log(value);

  return (
    <div className="" style={{ width: "100%", padding: "0px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className="">Sample</div>
      <div style={{ display: "flex",alignItems: "center", justifyContent: "center", height: "100%", gap: 8 }}>
        <Search placeholder="input search text" onSearch={onSearch} style={{ backgroundColor: "transparent" }} />
        <Button type="primary" icon={<PlusOutlined />}>
          Add
        </Button>
        <Badge count={5} size="default">
          <Button type="link" style={{padding: 0}}>
            <BellOutlined style={{ fontSize: 24 }} />
          </Button>
        </Badge>
        <div className="">
          <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default NavItems;
