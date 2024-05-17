import React from 'react'
import './css/Login.css'
import LoginCard from '../components/LoginCard'
import ScroledPage from '../components/ScroledPage'
import logo from '../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

function Login() {
    const Title = styled.h1`
color: rgb(96, 51, 138);
margin-top: 20px;
font-size: 20px;
font-weight: 400;
`;
    const Head = styled.div`
`;
    const Footer = styled.div`
position: relative;
    right: 27px;
    margin: auto;
    width: 115%;
`;
    const Container = styled.div`
text-align: center;
    padding-top: 100px;
    padding-bottom: 20px;
    width: 320px;
    margin: auto;
`;
    const Text = styled.h5`
font-size: 15px;
color: rgb(121, 86, 154);
margin-bottom: 5px;
font-weight: 500;
`;
    const Paragraph = styled.p`
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 17px;
    color: rgba(116, 114, 114, 0.592);
`;
    const Logo = styled.img`
margin-left: 35px;
width: 80%;
`;
    const navigate = useNavigate()
    const handleclic = () => {
        navigate("/session-timed-out");
    }
    return (
        <Container>
            <Head className="header">
                <Logo src={logo} alt="Logo" />
                <Title>Classification Selection Tips</Title>
            </Head>
            <LoginCard clic={handleclic} />
            <Paragraph>
                In a few easy steps, determine
                <br />
                your customer’s NAICS, SIC and NACE
            </Paragraph>
            <Text> Important regulatory information</Text>
            <Footer className='scroled-page'>
                <ScroledPage />
            </Footer>
        </Container>
    )
}

export default Login