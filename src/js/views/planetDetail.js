import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetail = () => {
  const { store, actions } = useContext(Context);
  const { planetId } = useParams();

  useEffect(() => {
    // Cargar los detalles del planeta al montar el componente
    actions.loadPlanetDetails(planetId);
  }, [planetId, actions]);

  const planet = store.planetDetails;

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h1>{planet.name}</h1>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Rotation Period:</strong> {planet.rotation_period} days</p>
      <p><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
      <p><strong>Diameter:</strong> {planet.diameter} km</p>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
    </div>
  );
};