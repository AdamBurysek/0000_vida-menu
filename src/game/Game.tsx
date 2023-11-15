import AppGame from "./App-Game";
import "./Game.css";

// interface GameProps {
//   language: string;
//   setGameStarts: (value: boolean) => void;
//   gameStarts: boolean;
//   isActive: boolean;
// }

function Game(props: any) {
  return (
    <AppGame
      language={props.language}
      setGameStarts={props.setGameStarts}
      gameStarts={props.gameStarts}
      isActive={props.isActive}
    ></AppGame>
  );
}

export default Game;
