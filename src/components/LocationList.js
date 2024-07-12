import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../src/style.css'; // Importando o arquivo CSS para estilização

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
        setLocations(response.data.results);
        setInfo(response.data.info);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, [currentPage]);

  const handleNextPage = () => {
    if (info.next) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (info.prev) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="location-list">
        <div className="header">
            <h2>Locations</h2>
        </div>
        <ul className="location-items">
            {locations.map(location => (
            <li key={location.id} className="location-item">
                <h3>{location.name}</h3>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <p>Residents: {location.residents.length}</p>
            </li>
            ))}
        </ul>
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={!info.prev} className="page-btn">Previous</button>
            <button onClick={handleNextPage} disabled={!info.next} className="page-btn">Next</button>
        </div>
        </div>
  );
};

export default LocationList;
