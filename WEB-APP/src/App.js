import React from 'react';
import './App.css';
import styled from 'styled-components';
import UserCardGrid from './components/UserCardGrid';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #333;
  color: white;
`;

const Brand = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const GetUsersButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function App() {
  return (
    <AppContainer>
      <Navbar>
        <Brand>Brand Name</Brand>
        <GetUsersButton>Get Users</GetUsersButton>
      </Navbar>
      <UserCardGrid />
    </AppContainer>
  );
}

export default App;
