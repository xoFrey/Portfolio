import { Html } from "@react-three/drei";
import "./EarthCard.css";

const EarthCard = () => {
  return (
    <Html position={[0, 0, 0]}>
      <section className='earthcard'>
        <div className='card'>
          <h1>HALLOOOOOOOOO</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sed
            ullam nesciunt expedita quae reprehenderit voluptatum omnis
            veritatis deserunt velit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium sequi impedit minima ipsa quasi corporis. Obcaecati id
            alias omnis reprehenderit provident numquam dolor libero nihil
            voluptas molestiae totam cumque enim, atque iusto, fugiat ratione
            quis consequatur earum rerum voluptates debitis nisi! Neque expedita
            ipsa quo corporis earum quas officiis minus?
          </p>
        </div>
      </section>
    </Html>
  );
};

export default EarthCard;
