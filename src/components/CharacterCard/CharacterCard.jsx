const CharacterCard = ({ name, image, specie }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="rick and morty character" />
      <div>Specie: {specie}</div>
    </div>
  );
};

export default CharacterCard;
