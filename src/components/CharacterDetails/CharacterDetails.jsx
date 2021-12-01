import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  console.log('this is id ===> ', id);
  return <div>Character details...</div>;
};

export default CharacterDetails;
