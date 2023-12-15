import VidaMenu from "./components/vidaMenu";
import Game from "./game/Game";
import HowToPage from "./components/infoPages/howToPage";
import KnowMorePage from "./components/infoPages/knowMorePage";
import setup from "../setup.json";

function App() {
  return (
    <>
      <VidaMenu setup={setup}>
        <Game />
        <HowToPage />
        <KnowMorePage />
      </VidaMenu>
    </>
  );
}

export default App;
