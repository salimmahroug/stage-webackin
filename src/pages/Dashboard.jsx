import React, { useReducer, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import './css/Dashboard.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import logo from '../assets/logo.svg';
import { contex } from '../AppContex';

          //styled components
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
const SearchbarContainer = styled.div`
  width: 100%;
  padding: 15px 35px;
  padding-right: 20px;
  background-color: rgba(241, 241, 241, 0.929);
  margin-top: 30px;
  border-radius: 5px;
`;
const Logo = styled.img``
;
const Dash = styled.div``
;
const Card = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 31.85%;
  margin-top: 28px;
  border: 0.5px solid rgb(190, 187, 187);
  border-radius: 7px;
`;
const Addbutton = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  width: 31.85%;
  margin-top: 28px;
  border: 0.5px solid rgb(190, 187, 187);
  border-radius: 7px;
  justify-content: center;
  font-size: 50px;
  padding-bottom: 5px;
  background-color: rgb(221, 217, 225);
  color: grey;
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
const FormContainer = styled.div`
background-color: rgba(189, 166, 215, 0.5);
padding: 40px;
position: fixed;
max-width: 500px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`;
const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(190, 187, 187);
`;
const SubmitButton = styled.button`
padding: 10px;
border-radius: 5px;
background-color: rgb(87, 56, 116);
color: white;
border: none;
cursor: pointer;
margin-top: 10px;
`;
const CancelButton = styled.button`
padding: 10px 20px;
margin: 0 20px ;
border-radius: 5px;
background-color: red;
color: white;
border: none;
cursor: pointer;
margin-top: 10px;
`;
// 


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, search: [...state.search, action.payload] };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
function Dashboard() {
  const contextData = useContext(contex);
  const initialState = { search: contextData };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isprompt, setIsprompt] = useState(false);
  const [numbre, setNumbre] = useState('');
  const [discription, setDiscription] = useState('');

  const handleshowprompt = () => {
    setIsprompt(!isprompt);
  };
  const handleremoveprompt = () => {
    setIsprompt(false);
  };
  const handleAddItem = () => {
    if (numbre && discription) {
      const newItem = { numbre, discription };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setNumbre('');
      setDiscription('');
      setIsprompt(false);
    }
  };
  const handleFilterChange = (filteredData) => {
    dispatch({ type: 'SET_SEARCH', payload: filteredData });
  };
  useEffect(() => {
    dispatch({ type: 'SET_SEARCH', payload: contextData });
  }, [contextData]);

  return (
    <Dash>
      <Logo src={logo} alt="Logo" />
      <NavBar />
      <SearchbarContainer>
        <SearchBar onFilterChange={handleFilterChange} calcule={state.search} />
      </SearchbarContainer>
      <DashboardContainer className="dashboard">
        <Addbutton className='addbuttonn' onClick={handleshowprompt}>+</Addbutton>
        {state.search.map((item, index) => (
          <Card key={index}>
            <Number>{item.numbre}</Number>
            <Paragraph>{item.discription}</Paragraph>
          </Card>
        ))}
      </DashboardContainer>
      {isprompt && (
          <FormContainer>
          <Input 
            type="text" 
            placeholder="Enter number" 
            value={numbre} 
            onChange={(e) => setNumbre(e.target.value)} 
          />
          <Input 
            type="text" 
            placeholder="Enter description" 
            value={discription} 
            onChange={(e) => setDiscription(e.target.value)} 
          />
          <SubmitButton  onClick={handleAddItem}>Add Item</SubmitButton>
          <CancelButton  onClick={handleremoveprompt}>cancel</CancelButton>
        </FormContainer>
      )}
    </Dash>
  );
}
export default Dashboard ;