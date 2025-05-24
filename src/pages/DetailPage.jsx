import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock/mock"; // Adjust the path if your MOCK_DATA is elsewhere

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 20px;
`;

const PokemonImage = styled.img`
    width: 200px;
    height: 200px;
`;

const PokemonName = styled.h1`
    color: rgb(255,0,0);
    font-size: 24px;
    font-weight: 700;
    margin: 20px 0 20px 0;
    text-align: center;
`;
const TypeContainer = styled.div`
  margin: 0 0 20px 0;
`;

const TypeText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: black;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0 0 20px 0;
`;

const BackButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 0 20px 0;
  &:hover {
    background-color: #333;
  }
`;

const DetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");

    const pokemonDetail = MOCK_DATA.find(pokemon => pokemon.id === Number(id));

    const handleGoBack = () => {
        navigate(-1);
    };

    if (!pokemonDetail) {
        return (
            <DetailContainer>
                <PokemonName>포켓몬을 찾을 수 없습니다.</PokemonName>
                <BackButton onClick={handleGoBack}>뒤로 가기</BackButton>
            </DetailContainer>
        );
    }

    const pokemonTypes = pokemonDetail.types ? pokemonDetail.types.join(', ') : '알 수 없음';


    return (
        <DetailContainer>
            <PokemonImage src={pokemonDetail.img_url} alt={pokemonDetail.korean_name} />
            <PokemonName>{pokemonDetail.korean_name}</PokemonName>
            <TypeContainer>
                <TypeText>타입: {pokemonTypes}</TypeText>
            </TypeContainer>
            <Description>{pokemonDetail.description || "설명이 없습니다."}</Description>
            <BackButton onClick={handleGoBack}>뒤로 가기</BackButton>
        </DetailContainer>
    );
};

export default DetailPage;