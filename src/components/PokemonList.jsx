import styled from "styled-components"
import PokemonCard from "./PokemonCard"

const ListContainer = styled.div`
    background-color: rgb(248, 248, 248);
    border-radius: 10px;
    padding: 20px;
    margin: 0 0 20px 0;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 18px;
`
const PokemonList = ({ pokemon, onClick }) => {
   
    return (
        <ListContainer>
            <Grid>
                {pokemon.map((poke) => (
                    <PokemonCard key={poke.id} pokemon={poke} onClick={onClick}/>
                ))}
            </Grid>
        </ListContainer>
    )
}
export default PokemonList