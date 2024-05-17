import React, { useState } from 'react';
import styled from 'styled-components';
import './css/Dashboard.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import logo from '../assets/logo.svg';
import { data } from '../Data.js';


const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
const SearchbarContainer = styled.div`
  width: 100%;
  padding: 15px 35px;
  padding-right:20px;
  background-color: rgba(241, 241, 241, 0.929);
  margin-top: 30px;
  border-radius: 5px;
`;
const Logo = styled.img``;
const Dash = styled.div``;
const Card = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 31.85%;
  margin-top:28px;
  border: 0.5px solid rgb(190, 187, 187);
  border-radius: 7px;
`;
const Number = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: rgb(87, 56, 116);
  border-right: 0.5px solid rgba(190, 187, 187, 0.552);
  width: 90px;
  height: 100%;
`;
const Paragraph = styled.h1`
  margin-left: 30px;
  color: rgb(166, 164, 164);
`;
function Dashboard() {
  //data after filtred in SearchBar.js
  const [search, setSearch] = useState(data);

  return (
    <Dash>
      <Logo src={logo} alt="Logo" />
      <NavBar />
      <SearchbarContainer>
        <SearchBar onFilterChange={setSearch} calcule={search} />
      </SearchbarContainer>
      <DashboardContainer className='dashboard'>
        {search.map((item, index) => (
          <Card key={index}>
            <Number>{item.numbre}</Number>
            <Paragraph>{item.discription}</Paragraph>
          </Card>
        ))}
      </DashboardContainer>
    </Dash>
  );
}
export default Dashboard;
