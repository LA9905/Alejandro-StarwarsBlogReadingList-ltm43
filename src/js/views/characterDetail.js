import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = () => {
  const { store, actions } = useContext(Context);
  const { characterId } = useParams();

  useEffect(() => {
    // Cargamos los detalles del personaje al montar el componente
    actions.loadCharacterDetails(characterId);
  }, [characterId]);

  const character = store.characterDetails;

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h1>{character.name}</h1>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Height:</strong> {character.height} cm</p>
      <p><strong>Mass:</strong> {character.mass} kg</p>
      <p><strong>Hair Color:</strong> {character.hair_color}</p>
      <p><strong>Eye Color:</strong> {character.eye_color}</p>
      <p><strong>Skin Color:</strong> {character.skin_color}</p>
      <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
    </div>
  );
};