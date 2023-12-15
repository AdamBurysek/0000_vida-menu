import { useEffect, useRef } from "react";
import "./infoPages.css";

const KnowMorePage = (props: any) => {
  const knowMoreElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (knowMoreElement.current) {
      knowMoreElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "know-more"]);
  return (
    <div
      className={
        props.activePage === "know-more"
          ? "know-more_window"
          : "know-more_window know-more_hide"
      }
    >
      <div
        ref={knowMoreElement}
        className="know-more_content"
      >
        {props.language === "cz" && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            blanditiis, temporibus minima rerum eius commodi quae doloremque
            alias maiores. Aliquid voluptatum sint est officiis quis enim ad
            aperiam optio deleniti vitae! Vitae magnam tempore quibusdam, eum ab
            consectetur libero laudantium saepe optio deleniti tempora impedit
            quae. Natus quos dicta doloribus voluptas ab. Enim blanditiis minus,
            voluptates, laboriosam velit assumenda sequi numquam voluptas
            voluptatem reprehenderit dicta facere at nobis! Consequuntur,
            tenetur suscipit, molestiae eos sapiente et, consequatur neque
            inventore ut voluptas minus ab! Pariatur porro non praesentium
            asperiores cupiditate temporibus voluptatibus voluptate laudantium
            sunt, culpa maiores ipsum autem corrupti voluptatem sit ullam iusto
            aperiam? Odit inventore quae praesentium, natus odio atque velit
            fugiat. Voluptas magni quod, iste non repellat in est reiciendis
            dolor libero sed nemo explicabo molestias quibusdam placeat
            exercitationem porro praesentium nostrum perferendis quis cupiditate
            harum consectetur sunt. Quo maiores deleniti voluptatem. Quia, cum
            dolores? Delectus deserunt sed molestias.
          </p>
        )}
        {props.language === "en" && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            minima quam, eum reprehenderit reiciendis tenetur possimus quidem
            dolores omnis fuga corrupti nam eos pariatur totam? Maiores, eos
            totam explicabo ex tempora in accusamus praesentium aperiam quae qui
            vel deserunt velit voluptates impedit adipisci, voluptas assumenda
            sed? Debitis tempora officiis repellendus iste unde nostrum non
            totam, laborum esse obcaecati consequuntur ab nihil reprehenderit
            reiciendis magnam, alias sunt expedita quidem quas repellat fugit
            animi nisi nobis. Voluptas doloremque eligendi libero voluptatem
            earum modi ea nam animi amet id. Ipsam earum laudantium fuga quod
            quia praesentium tempora voluptatibus eveniet illo! Tempora ipsam,
            inventore quod necessitatibus sit voluptas. Quaerat nesciunt eum
            praesentium similique soluta. Sint dicta voluptatibus itaque eveniet
            magnam natus eius numquam omnis veniam, voluptatem magni enim
            nesciunt obcaecati incidunt asperiores excepturi tempora, esse nisi!
            Laudantium dignissimos ducimus optio consequatur dolorum aut,
            ratione itaque cumque voluptatem, hic autem possimus tenetur ex
            libero velit.
          </p>
        )}
        {props.language === "de" && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi
            nemo expedita, sapiente, corporis pariatur veniam dolore veritatis
            cum id atque cumque. Quas quo error magni beatae voluptatem laborum
            quibusdam! Iusto officiis numquam pariatur velit possimus quos
            impedit accusantium explicabo sunt sapiente at exercitationem,
            maiores perferendis temporibus quis laborum iste tempora dolor
            molestias sed, optio enim animi doloribus. Quibusdam amet vitae,
            nostrum quo inventore libero deleniti quis accusantium dolor
            reiciendis saepe, atque sapiente nam sunt soluta sed laboriosam?
            Quasi neque velit modi consequatur quidem ad enim voluptas molestiae
            tenetur. Qui, sapiente hic! Aliquam soluta vel recusandae nihil ab,
            facere repellendus iure neque vero, rerum officiis aperiam aliquid
            incidunt. Eum minus quas corporis natus aperiam enim ad, quae
            commodi vero neque repellendus, rem alias magnam! Illo commodi
            assumenda nisi dolore quam non, impedit aspernatur quae magni autem
            odio porro adipisci laborum nam vel expedita qui architecto labore.
            Architecto sequi cum quasi.
          </p>
        )}
      </div>
    </div>
  );
};

export default KnowMorePage;
