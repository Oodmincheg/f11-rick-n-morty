const CharacterCard = ({ name, image, specie, gender }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="rick and morty character" />
      <div>Specie: {specie}</div>
      <div>Gender: {gender}</div>
    </div>
  );
};

export default CharacterCard;
