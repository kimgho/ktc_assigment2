import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { AlertModal } from "../utils/alert-modal";

const PokemonProvider = ({ children }) => {
    const [myTeam, setMyTeam] = useState(() => {
        const savedTeam = localStorage.getItem('myTeam');
        return savedTeam ? JSON.parse(savedTeam) : [];
    });

    useEffect(() => {
        localStorage.setItem('myTeam', JSON.stringify(myTeam));
    }, [myTeam]);

    const addToTeam = (pokemon) =>
        setMyTeam(team => {
            if (team.length >= 6) {
                AlertModal("팀에는 최대 6마리의 포켓몬만 담을 수 있습니다!");
                return team;
            }
            if (team.some(p => p.id === pokemon.id)) {
                AlertModal("이미 팀에 있는 포켓몬입니다!");
                return team;
            }
            return [...team, pokemon];
        });

    const removeFromTeam = (pokemon) =>
        setMyTeam(team => team.filter(p => p.id !== pokemon.id));

    const isInTeam = (pokemon) =>
        myTeam.some(p => p.id === pokemon.id);

    const handlePokemonAction = (pokemon) =>
        isInTeam(pokemon) ? removeFromTeam(pokemon) : addToTeam(pokemon);

    const value = {
        myTeam,
        addToTeam,
        removeFromTeam,
        handlePokemonAction,
        isInTeam
    };

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;