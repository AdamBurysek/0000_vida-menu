import UserInterface from "../components/userInterface";
import React, { useEffect, useState } from "react";
import MapPage from "../components/mapPage";
import { findSection, switchLanguage } from "../utils/functions";

interface AdditionalGameProps {
  gameStarts: boolean;
  isActive: boolean;
  language: string;
  activePage: string;
  setGameStarts: () => void;
  sectionInfo: {
    color: any;
  };
}

function VidaMenu({ children, setup }: any) {
  const [activePage, setActivePage] = useState<string>("home");
  const [language, setLanguage] = useState<string>("cz");
  const [gameStarts, setGameStarts] = useState<boolean>(false);
  const [lastActivity, setLastActivity] = useState<Date | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sectionInfo, setSectionInfo] = useState<any>({});

  const inactivityTimeout = setup.inactivityTimeoutInMin * 60 * 1000;

  useEffect(() => {
    setSectionInfo(findSection(setup.section));
    const handleActivity = () => {
      setLastActivity(new Date());
      setIsActive(true);
    };
    handleActivity();
    window.addEventListener("mousedown", handleActivity);
    window.addEventListener("touchmove", handleActivity);
    return () => {
      window.removeEventListener("mousedown", handleActivity);
      window.removeEventListener("touchmove", handleActivity);
    };
  }, []);

  useEffect(() => {
    const checkInactivity = () => {
      if (
        lastActivity &&
        new Date().getTime() - lastActivity.getTime() > inactivityTimeout
      ) {
        if (isActive) {
          setIsActive(false);
          setActivePage("home");
          setLanguage("cz");
        }
      } else {
        setIsActive(true);
      }
    };
    let intervalId = setInterval(checkInactivity, 1000);
    return () => clearInterval(intervalId);
  }, [lastActivity, isActive]);

  function handleLanguageClick() {
    setLanguage(switchLanguage(language));
  }

  function handleSideButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonId: string = e.currentTarget.id;
    setActivePage(buttonId);
  }

  const addAdditionalProps = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        gameStarts,
        setGameStarts,
        language,
        isActive,
        activePage,
        sectionInfo: { color: sectionInfo.color },
      } as AdditionalGameProps);
    }
    return child;
  };

  return (
    <>
      <div>
        <UserInterface
          activePage={activePage}
          language={language}
          handleLanguageClick={handleLanguageClick}
          handleSideButtonClick={handleSideButtonClick}
          gameStarts={gameStarts}
          sectionInfo={sectionInfo}
          setup={setup}
        >
          <div>{React.Children.map(children, addAdditionalProps)}</div>
        </UserInterface>

        <MapPage
          activePage={activePage}
          language={language}
        ></MapPage>
      </div>
    </>
  );
}

export default VidaMenu;
