import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/planets.css"; 

export const PlanetDetail = () => {
  const { store, actions } = useContext(Context);
  const { planetId } = useParams();

  useEffect(() => {
    actions.loadPlanetDetails(planetId);
  }, [planetId]);

  const planet = store.planetDetails;

  if (!planet) {
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
          alt={planet.name} 
        />
        <div>
          <h1>{planet.name}</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <table className="table table-bordered table-planet-details">
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Population</th>
              <th>Orbital Period</th>
              <th>Rotation Period</th>
              <th>Diameter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.population}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.diameter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
