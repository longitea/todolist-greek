import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { Header, Content, Footer } = Layout;

const LogoDiv = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0px;
  /* background: red; */
  a {
    display: block;
    /* background-color: yellow; */
  }
`;

// Menu Antd Here
const items = [
  {
    label: "Navigation One",
    key: "mail",
  },

  {
    label: (
      <Link to="/" rel="noopener noreferrer">
        Test
      </Link>
    ),
    key: "test",
  },
  {
    label: <Link to="/todo">Todo</Link>,
    key: "todo",
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <main>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            background: "white",
            borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
          }}
        >
          <LogoDiv>
            <a href="#">
              <img
                src="https://geekup.vn/Icons/geekup-logo-general.svg"
                alt="logo"
              />
            </a>
          </LogoDiv>

          {/* <div style={{ float: "left", width: 120, height: 31, margin: "16px 24px 16px 0", }} /> */}
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          />
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          {" "}
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
            }}
          >
            {" "}
            Content{" "}
          </div>{" "}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          TASK DONE 8/10 Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </main>
  );
};
export default App;
