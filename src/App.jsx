import { PokemonProvider } from "./context/PokemonContext"
import Router from "./router"

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  )
}

export default App
