import SideButton from "../components/sideButton";
import { CzechImage, EnglishImage, DeutschImage } from "../img/languageImages";
import MapButton from "../components/mapButton";
import SectionBadge from "../components/sectionBadge";
import "../App.css";
import BlackPage from "./blackPage";

interface UserInterfaceProps {
  children: React.ReactNode;
  activePage: string;
  language: string;
  handleLanguageClick: () => void;
  handleSideButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  gameStarts: boolean;
  sectionInfo: any;
  setup: any;
}

const UserInterface: React.FC<UserInterfaceProps> = ({
  activePage,
  language,
  handleLanguageClick,
  handleSideButtonClick,
  gameStarts,
  sectionInfo,
  setup,
  children,
}) => {
  return (
    <>
      <div>
        <div className={gameStarts ? "ui_screen ui_hide" : "ui_screen"}>
          <div className={gameStarts ? "top-bar top-bar_hide" : "top-bar"}>
            <SectionBadge
              sectionInfo={sectionInfo}
              language={language}
            ></SectionBadge>
            <h1 className="top-bar_heading">
              {language === "cz" && setup.label.cz}
              {language === "en" && setup.label.en}
              {language === "de" && setup.label.de}
            </h1>
            <button
              className="language_select"
              onClick={handleLanguageClick}
            >
              {language === "de" && <CzechImage></CzechImage>}
              {language === "cz" && <EnglishImage></EnglishImage>}
              {language === "en" && <DeutschImage></DeutschImage>}
            </button>
          </div>
          <div className={gameStarts ? "side-bar side-bar_hide" : "side-bar"}>
            <SideButton
              color={sectionInfo.color}
              className={"home"}
              activePage={activePage}
              language={language}
              onClick={handleSideButtonClick}
            ></SideButton>
            <SideButton
              color={sectionInfo.color}
              className={"how-to"}
              activePage={activePage}
              language={language}
              onClick={handleSideButtonClick}
            ></SideButton>
            <SideButton
              color={sectionInfo.color}
              className={"know-more"}
              activePage={activePage}
              language={language}
              onClick={handleSideButtonClick}
            ></SideButton>
          </div>
          <div className={gameStarts ? "map map_hide" : "map"}>
            <MapButton
              onClick={handleSideButtonClick}
              activePage={activePage}
              language={language}
            ></MapButton>
          </div>
        </div>
        <div>{children}</div>
        <BlackPage></BlackPage>
      </div>
    </>
  );
};

export default UserInterface;