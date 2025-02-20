import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters();
    actions.loadPlanets();
  }, [actions]);  

  const handleFavoriteClick = (title) => {
    if (!store.favorites.includes(title)) {
      actions.addToFavorites(title);
    }
  };

  const renderCharacterCard = (character, index) => (
    <div className="card h-100" key={index}>
      <img src={rigoImage} style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Gender:</strong> {character.gender}<br />
          <strong>Hair Color:</strong> {character.hair_color}<br />
          <strong>Eye Color:</strong> {character.eye_color}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <Link to={`/character/${character.url.split("/")[character.url.split("/").length - 2]}`} className="btn btn-outline-primary">Learn more!</Link>
        <button 
          onClick={() => handleFavoriteClick(character.name)} 
          className={`btn btn-outline-${store.favorites.includes(character.name) ? 'warning' : 'warning'}`}
        >
          ♡
        </button>
      </div>
    </div>
  );

  const renderPlanetCard = (planet, index) => (
    <div className="card h-100" key={index}>
      <img src={rigoImage} style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt={planet.name} />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">
          <strong>Population:</strong> {planet.population}<br />
          <strong>Terrain:</strong> {planet.terrain}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <Link to={`/planet/${planet.url.split("/")[planet.url.split("/").length - 2]}`} className="btn btn-outline-primary">Learn more!</Link>
        <button 
          onClick={() => handleFavoriteClick(planet.name)} 
          className={`btn btn-outline-${store.favorites.includes(planet.name) ? 'warning' : 'warning'}`}
        >
          ♡
        </button>
      </div>
    </div>
  );

  const renderFirstList = () => (
    <div className="horizontal-scroll-container">
      {store.characters.map((character, index) => renderCharacterCard(character, index))}
    </div>
  );

  const renderSecondList = () => (
    <div className="horizontal-scroll-container">
      {store.planets.map((planet, index) => renderPlanetCard(planet, index))}
    </div>
  );

  return (
    <div className="text-center mt-5 container">
      <h2>Characters</h2>
      {renderFirstList()}
      <h2 className="mt-4">Planets</h2>
      {renderSecondList()}
    </div>
  );
};