import { Monster } from "../../container/App";
import Card from "../card/card.component";

import "./card-list.styles.css";

type CardListProps = {
  monsters: Array<Monster>;
};

const CardList = ({ monsters }: CardListProps ) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
