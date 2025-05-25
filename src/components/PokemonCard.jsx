import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { selectIsInTeam } from "../store/pokemonSlice"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid rgb(221,221,221);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    padding: 10px;
    text-align: center;
    font-weight: 400;
    cursor: pointer;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
    transition: transform 0.25s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-8px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px 0px;
    }
`
const PokemonImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
`
const PokemonNumber = styled.p`
    color: rgb(102, 102, 102);
    font-size: 12px;
    margin: 5px 0;
`

const PokemonName = styled.h3`
    font-size: 14px;
    font-weight: 700;
    margin: 5px 0;
    color: rgb(0, 0, 0);
    cursor: pointer;
`
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

const PokemonCard = ({ pokemon, onClick}) => {
    const formattedNumber = String(pokemon.id).padStart(3, "0")
    const navigate = useNavigate();
    const isInTeam = useSelector(selectIsInTeam(pokemon));
    
    const handlePokemonDetail = (id) => {
        navigate(`/pokemon-detail?id=${id}`);
    }
    
    return (
        <CardContainer onClick={() => handlePokemonDetail(pokemon.id)}>
            <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonName>{pokemon.korean_name}</PokemonName>
            <PokemonNumber>No. {formattedNumber}</PokemonNumber>
            <ActionButton
                onClick={e => {
                    e.stopPropagation();
                    onClick(pokemon);
                }}
            >
                {isInTeam ? "삭제" : "추가"}
            </ActionButton>
        </CardContainer>
    )
}

export default PokemonCard