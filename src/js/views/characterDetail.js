import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/characters.css";

export const CharacterDetail = () => {
  const { store, actions } = useContext(Context);
  const { characterId } = useParams();

  useEffect(() => {
    actions.loadCharacterDetails(characterId);
  }, [characterId]);

  const character = store.characterDetails;

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="d-flex">
        <img 
          src={rigoImage} 
          style={{ 
            width: '200px', 
            height: '200px', 
            objectFit: 'cover',
            marginRight: '20px' 
          }} 
          alt={character.name} 
        />
        <div>
          <h1>{character.name}</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <table className="table table-bordered table-character-details">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Mass</th>
              <th>Hair Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{character.name}</td>
              <td>{character.gender}</td>
              <td>{character.height} cm</td>
              <td>{character.skin_color}</td>
              <td>{character.eye_color}</td>
              <td>{character.mass} kg</td>
              <td>{character.hair_color}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};