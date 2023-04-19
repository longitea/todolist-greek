import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { HOME_PATH, TODO_PATH } from "../constants/path";
import { Link } from "react-router-dom";
import { useState } from "react";
const { Header } = Layout;

// CSS Ant Design
const headerStyle = {
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  background: "white",
  height: 64,
  paddingInline: 16,
  lineHeight: "64px",
  borderBottom: "2px solid rgba(5, 5, 5, 0.06)",
};

const layoutStyle = {
  flex:'none',
  background:'red'
}


// Menu Antd Here
const items = [
  {
    label: (
      <Link to={HOME_PATH} rel="noopener noreferrer">
        Test
      </Link>
    ),
    key: "test",
  },
  {
    label: <Link to={TODO_PATH}>Todo</Link>,
    key: "todo",
  },
];

// My Custom CSS -Styled
const LogoStyle = styled.div`
  display: flex;
  width: 120px;
  height: 64px;
  align-items: center;
  a {
    display: inline-flex;
    img {
      width: auto;
      min-height: 32px;
    }
  }
`;

export default function HeaderLayout() {
  const [current, setCurrent] = useState("todo");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <LogoStyle>
          <a href="#">
            <img
              src="https://geekup.vn/Icons/geekup-logo-general.svg"
              alt="Logo"
            />
          </a>
        </LogoStyle>

        {/* <Link to={HOME_PATH}>
          <h3 style={{ margin: "0px 0px 0px 6px" }}>thanh</h3>
        </Link>
        <Link to={TODO_PATH}>
          <text style={{ margin: "0px 0px 0px 6px" }}>thanh</text>
        </Link> */}
        <Menu
        style={{ width: "200px" }}
          theme="light"
          mode="horizontal"
          // defaultSelectedKeys={["test"]}
          items={items}
        />

        {/* <Menu
          style={{ width: "100%" }}
          onClick={onClick}
          // selectedKeys={[current]}
          mode="horizontal"
          items={items}
        /> */}
      </Header>
      {/* content here -> tách ra component khác */}
      {/* <Content style={contentStyle}>Content</Content> */}
    </Layout>
  );
}
