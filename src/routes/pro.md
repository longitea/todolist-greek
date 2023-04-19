import React, { useState, useEffect } from 'react';
import { Layout, Menu, Select, Button } from 'antd';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import axios from 'axios';
import './App.css';

const { Header, Content } = Layout;
const { Option } = Select;

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
    };
    getUsers();
  }, []);

  const handleUserChange = async (value) => {
    setUser(value);
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${value}/todos`);
    setTasks(result.data);
  };

  const handleTaskDone = async (task) => {
    const result = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, { completed: true });
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return result.data;
      }
      return t;
    });
    setTasks(newTasks);
  };

  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter((t) => t.completed).length;

  return (
    <ProLayout
      title="TODO List"
      menuHeaderRender={(logoDom, titleDom) => (
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {logoDom}
          {titleDom}
        </a>
      )}
    >
      <PageContainer>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">TODO List</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ marginTop: 30, marginBottom: 30 }}>
              <Select
                placeholder="Select User"
                style={{ width: 200 }}
                value={user}
                onChange={handleUserChange}
              >
                {users.map((u) => (
                  <Option value={u.id} key={u.id}>
                    {u.name}
                  </Option>
                ))}
              </Select>
            </div>
            {user && (
              <div>
                <div style={{ marginBottom: 10 }}>
                  <Button type="primary" onClick={() => handleTaskDone}>
                    Mark as Done
                  </Button>
                </div>
                {tasks
                  .sort((a, b) => a.completed - b.completed)
                  .map((task) => (
                    <div
                      key={task.id}
                      style={{
                        backgroundColor: task.completed ? '#f0f0f0' : '',
                        padding: '10px',
                       
