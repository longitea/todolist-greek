import React, { useEffect, useState } from "react";
import { Layout, Menu, Input, Button, Divider, Select, List } from "antd";
import axios from "axios";
import styled from "styled-components";
import UserSelect from "../components/UserSelect";
import Typography from "antd/es/typography/Typography";
import Task from "../components/Task";

//  CSS Antd
const { Content } = Layout;

const contentStyle = {
  textAlign: "",
  minHeight: 120,
  paddingInline: 40,
  paddingBlock: 24,
};

// <!--===============  ===============-->

export default function TodoPage() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Get List User
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const option = [];
  users?.map((user) =>
    option.push({ value: `${user.id}`, label: `${user.name}` })
  );

  const onChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedUserId(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };



  return (
    <Content style={contentStyle}>
      <Divider orientation="left" orientationMargin="0"> User </Divider>

      <Select
        style={{ width: 200 }}
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={option}
      />

      <Divider orientation="left" orientationMargin="0"> Task </Divider>
      
      <Task id={selectedUserId}/>
    </Content>
  );
}
