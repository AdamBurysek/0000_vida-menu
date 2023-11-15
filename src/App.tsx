import VidaMenu from "./components/vidaMenu";
import Game from "./game/Game";
import HowToPage from "./gameInfo/howToPage";
import KnowMorePage from "./gameInfo/knowMorePage";
import setup from "../setup.json";

function App() {
  return (
    <>
      <VidaMenu setup={setup}>
        <Game></Game>
        <HowToPage></HowToPage>
        <KnowMorePage></KnowMorePage>
      </VidaMenu>
    </>
  );
}

export default App;
