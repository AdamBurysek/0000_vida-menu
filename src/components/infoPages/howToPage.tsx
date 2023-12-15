import { useEffect, useRef } from "react";
import "./infoPages.css";

const HowToPage = (props: any) => {
  const howToElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (howToElement.current) {
      howToElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "how-to"]);

  return (
    <div
      className={
        props.activePage === "how-to"
          ? "how-to_window"
          : "how-to_window how-to_hide"
      }
    >
      <div
        ref={howToElement}
        className="how-to_content"
      >
        {props.language === "cz" && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium quas fuga, aspernatur minima quam aperiam expedita,
            provident enim velit temporibus harum similique fugiat dolore
            tempora dolores architecto earum vitae suscipit voluptatum
            dignissimos tempore veniam? Sunt, perferendis officia optio aliquid
            voluptatibus tenetur voluptates esse repellat molestias vitae
            provident ipsum eos possimus.
          </p>
        )}
        {props.language === "en" && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            doloremque a autem deleniti repudiandae pariatur dolore et
            reprehenderit quos quasi temporibus doloribus recusandae laborum,
            sapiente provident eligendi mollitia dignissimos nihil aliquid
            earum. Doloremque possimus natus corporis magnam, totam at, officiis
            blanditiis praesentium fugit eius architecto dolore nobis quisquam
            earum! Tenetur!
          </p>
        )}
        {props.language === "de" && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            suscipit laboriosam ab tempora, similique quos qui soluta assumenda
            incidunt cupiditate officiis, nesciunt doloremque! Ipsa, id
            voluptatibus nostrum aperiam voluptatum repellendus omnis
            necessitatibus alias odio fuga est dolorem, explicabo quae quasi
            odit. Quibusdam aliquam fuga vel numquam qui vero, sapiente ut!
          </p>
        )}
      </div>
    </div>
  );
};

export default HowToPage;
