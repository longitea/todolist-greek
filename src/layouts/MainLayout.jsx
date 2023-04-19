import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderLayout from "./../components/HeaderLayout"

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
}

export default function () {
  return (
    <Layout style={layoutStyle}>
      <HeaderLayout />
      <Outlet />
    </Layout>
  );
}
