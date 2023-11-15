interface GameProps {
  language: string;
  setGameStarts: (value: boolean) => void;
  gameStarts: boolean;
  isActive: boolean;
}

function AppGame(props: GameProps) {
  function handleShowUiClick() {
    props.setGameStarts(!props.gameStarts);
  }

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "grey",
        width: "1920px",
        height: "1080px",
      }}
    >
      <div className="button-container">
        <button
          className="test-button"
          disabled
        >
          Actual Language: {props.language}
        </button>
        <button
          className="test-button"
          disabled
          style={{ backgroundColor: props.isActive ? "green" : "red" }}
        >
          User is Active
        </button>
        <button
          className="test-button"
          onClick={handleShowUiClick}
        >
          Show/Hide UI
        </button>
      </div>
    </div>
  );
}

export default AppGame;
