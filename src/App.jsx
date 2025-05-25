import { PokemonProvider } from "./context"
import Router from "./router"

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  )
}

export default App
