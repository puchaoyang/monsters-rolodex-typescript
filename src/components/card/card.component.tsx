import './card.styles.css';
import { Monster } from '../../App';
//注意这里我们接收到的props期望它有属性monster因此
type CardProps={
  monster:Monster
}
const Card = ({ monster }:CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
