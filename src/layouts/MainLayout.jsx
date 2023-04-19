import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/header";
import { Layout } from "antd";

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
