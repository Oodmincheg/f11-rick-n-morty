import { useEffect, useState } from 'react';
import CharacterCard from './components/CharacterCard';
import Select from './components/SelectGender';

function App() {
  const [characters, setCharacters] = useState([]);
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestCharacters = async () => {
      const params = gender ? `?gender=${gender}` : '';

      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params}`,
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    };

    requestCharacters();
  }, [gender]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <>
          <div>Hello rick & morty</div>
          <Select value={gender} onChange={(value) => setGender(value)} />
          {characters.map(({ name, image, species, id, gender }) => {
            return (
              <CharacterCard
                key={id}
                name={name}
                image={image}
                specie={species}
                gender={gender}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
