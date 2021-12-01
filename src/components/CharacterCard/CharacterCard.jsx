import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  const { name, image, specie, gender, id } = props;
  return (
    <Link to={`/character/${id}`} state={props}>
      <h3>{name}</h3>
      <img src={image} alt="rick and morty character" />
      <div>Specie: {specie}</div>
      <div>Gender: {gender}</div>
    </Link>
  );
};

export default CharacterCard;
