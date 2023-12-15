import VidaMapCZ from "../img/vida_map-cz.webp";
import VidaMapEN from "../img/vida_map-en.webp";
import VidaMapDE from "../img/vida_map-de.webp";
import { MapArrow } from "../img/mapArrow";
import "./mapPage.css";

interface MapPageProps {
  activePage: string;
  language: string;
  exhibitPostion: any;
  sectionColor: string;
}

const MapPage: React.FC<MapPageProps> = (props) => {
  return (
    <div
      className={
        props.activePage === "map" ? "map_window" : "map_window map_hide"
      }
    >
      <div className="map_background">
        <div className="map_content">
          <span
            className="map_arrow"
            style={{
              left: props.exhibitPostion.x,
              top: props.exhibitPostion.y,
            }}
          >
            <MapArrow />
          </span>
          {props.language === "cz" && (
            <img
              className="vida_map"
              src={VidaMapCZ}
              alt="VIDA MAP"
            />
          )}
          {props.language === "en" && (
            <img
              className="vida_map"
              src={VidaMapEN}
              alt="VIDA MAP"
            />
          )}
          {props.language === "de" && (
            <img
              className="vida_map"
              src={VidaMapDE}
              alt="VIDA MAP"
            />
          )}
        </div>

        <div
          className="map-active_btn-background"
          style={{ backgroundColor: props.sectionColor }}
        ></div>
      </div>
    </div>
  );
};

export default MapPage;
