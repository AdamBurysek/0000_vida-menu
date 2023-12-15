import AppGame from "./App-Game";
import "./Game.css";

function Game(props: any) {
  return (
    <AppGame
      language={props.language}
      setGameStarts={props.setGameStarts}
      gameStarts={props.gameStarts}
      isActive={props.isActive}
      color={props.sectionInfo.color}
    ></AppGame>
  );
}

export default Game;
