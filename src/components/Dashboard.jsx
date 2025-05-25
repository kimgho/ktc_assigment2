import {useSelector,useDispatch} from "react-redux"
import styled from "styled-components"
import MOCK_DATA from "../mock/mock"
import PokemonList from "./PokemonList"
import pokeball from "../assets/pokeball.png"
import PokemonCard from "./PokemonCard"
import { selectMyTeam, addToTeam, removeFromTeam, clearAlert,selectAlertMessage, } from '../store/pokemonSlice';
import { useEffect } from "react"
import { AlertModal } from "../utils/alert-modal"

const DashboardContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`

const MyPokemon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(248, 248, 248);
    border-radius: 10px;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const MyPokemonTitle = styled.h1`
    color: #e53e3e;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

const MyPokemonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
    padding: 20px;
`

const EmptyCard = styled.div`
    border: 2px dashed #ccc;
    border-radius: 10px;
    height: 100px;
    width: 100px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`
const PokemonSlot = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const PokeBall = styled.img`
    width: 50px;
    height: 50px;
`

const Dashboard = () => {
  const dispatch = useDispatch();
  const myTeam = useSelector(selectMyTeam);
  const alertMessage = useSelector(selectAlertMessage);

  useEffect(() => {
      if (alertMessage) {
          AlertModal(alertMessage);
          dispatch(clearAlert());
      }
  }, [alertMessage, dispatch]);
  const handlePokemonAction = (pokemon) => {
        const isCurrentlyInTeam = myTeam.some(p => p.id === pokemon.id);
        if (isCurrentlyInTeam) {
            dispatch(removeFromTeam(pokemon));
        } else {
            dispatch(addToTeam(pokemon));
        }
    };

  return (
        <DashboardContainer>
            <MyPokemon>
                <MyPokemonTitle>나만의 포켓몬</MyPokemonTitle>
                <MyPokemonGrid>
                    {Array(6)
                        .fill(0)
                        .map((_, index) =>
                            myTeam[index] ? (
                                <PokemonSlot key={index}>
                                    <PokemonCard
                                        pokemon={myTeam[index]}
                                        onClick={handlePokemonAction}
                                        isInTeam={true}
                                    />
                                </PokemonSlot>
                            ) : (
                                <EmptyCard key={index}>
                                    <PokeBall src={pokeball} alt="포켓볼" />
                                </EmptyCard>
                            )
                        )}
                </MyPokemonGrid>
            </MyPokemon>
            <PokemonList 
                pokemon={MOCK_DATA} 
                onClick={handlePokemonAction}
            />
        </DashboardContainer>
    );
};

export default Dashboard;