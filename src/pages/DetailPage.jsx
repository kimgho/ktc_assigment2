import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addToTeam,removeFromTeam,selectAlertMessage,clearAlert, selectIsInTeam } from '../store/pokemonSlice';
import { AlertModal } from '../utils/alert-modal';
import MOCK_DATA from '../mock/mock';
import styled from 'styled-components';
import { useEffect } from 'react';



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

const ActionButton = styled.button`
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
     opacity:0.2;
    }
`

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
    const dispatch = useDispatch();
    const alertMessage = useSelector(selectAlertMessage);

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const pokemonDetail = MOCK_DATA.find(pokemon => pokemon.id === Number(id));

    useEffect(() => {
        if (alertMessage) {
            AlertModal(alertMessage);
            dispatch(clearAlert());
        }
    }, [alertMessage, dispatch]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const inTeam = useSelector(selectIsInTeam(pokemonDetail));

    const handleAddOrRemove = () => {
        if (!pokemonDetail) return;

        if (inTeam) {
            dispatch(removeFromTeam(pokemonDetail));
        } else {
            dispatch(addToTeam(pokemonDetail));
        }
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
            <ActionButton onClick={handleAddOrRemove}>
                {inTeam ? '삭제' : '추가'}
            </ActionButton>
            <BackButton onClick={handleGoBack}>뒤로 가기</BackButton>
        </DetailContainer>
    );
};

export default DetailPage;