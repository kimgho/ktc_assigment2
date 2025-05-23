import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pokemon-logo.png";

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`
const LogoStyle = styled.img`
    width:600px;
    height:220px;
    margin-bottom:20px;
`

const HomeStartButton = styled.button`
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    color:white;
    font-weight:500;
    font-size: 18px;
    padding: 10px 20px 10px 20px;
    background-color:rgb(255,0,0);
    &:hover{
        opacity: 0.8;
        translation-duration:0.3s
    }
`

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartButton = () => {
        navigate('/dex');
    }

    return (
        <HomeContainer>
            <LogoStyle src={logo} />
            <HomeStartButton onClick={handleStartButton}>
                포켓몬 도감 시작하기
            </HomeStartButton>
        </HomeContainer>
    )
}

export default HomePage;