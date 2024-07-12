import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="card-list">
      {characters.map(character => (
        <div key={character.id} className="card">
          <img src={character.image} alt={character.name} />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
