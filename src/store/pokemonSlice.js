import { createSlice } from "@reduxjs/toolkit";


const savedTeam = localStorage.getItem('myTeam');
const initialState = {
    myTeam: savedTeam ? JSON.parse(savedTeam) : [],
    alertMessage: null, 
};

const pokemonSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{
        addToTeam:(state,action)=>{
            const pokemon = action.payload;
            if(state.myTeam.length>=6){
                state.alertMessage = "팀에는 최대 6마리의 포켓몬만 담을 수 있습니다!";
                return;
            }
            if(state.myTeam.some(p=>p.id ===pokemon.id)){
                state.alertMessage = "이미 팀에 있는 포켓몬입니다!";
                return;
            }
            state.myTeam.push(pokemon);
        },
        removeFromTeam:(state,action)=>{
            const pokemon = action.payload;
            state.myTeam = state.myTeam.filter(p=>p.id!==pokemon.id);
            state.alertMessage = null;
        },
        clearAlert:(state)=>{
            state.alertMessage = null;
        }
    }
})

export const {addToTeam,removeFromTeam,clearAlert} = pokemonSlice.actions;

export const selectMyTeam = (state) => state.pokemon.myTeam;
export const selectIsInTeam = (pokemon) => (state) => 
    state.pokemon.myTeam.some(p => p.id === pokemon.id);
export const selectTeamCount = (state) => state.pokemon.myTeam.length;
export const selectAlertMessage = (state) => state.pokemon.alertMessage; 

export default pokemonSlice.reducer;