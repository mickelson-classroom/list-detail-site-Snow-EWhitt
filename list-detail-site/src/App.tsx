import { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Details } from './components/Details';
import { List } from './components/List';
import { CreateItem } from './components/CreateItem';
import { Planet, planets } from "./models/planets";


export default function App() {
  const [filterValue, setFilterValue] = useState('');
  const [listOfPlanets, setListOfPlanets] = useState<Planet[]>(planets);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | undefined>();
  const [nextPlanetId, setNextPlanetId] = useState<number>(8);

  const filteredPlanets = listOfPlanets.filter((planet) => (
    planet.name.toLowerCase().includes(filterValue.toLowerCase())
  ));

  function handleFilterUpdate(value: string) {
    setFilterValue(value);
  }

  function handleSelectedPlanet(planet: Planet) {
    setSelectedPlanet(planet);
  }

  function handleDeletePlanet(id: string) {
    const newPlanetsList = listOfPlanets.filter((planet) => (
      !planet.id.includes(id)
    ));

    setListOfPlanets(newPlanetsList);
  }

  function handleAddPlanet(planetName: string,
    planetMoons: number, planetFeature: string) {
    const newPlanetsList: Planet[] = [
      ...listOfPlanets,
      {
        id: nextPlanetId.toString(),
        name: planetName,
        numMoons: planetMoons,
        uniqueFeature: planetFeature
      }
    ]

    setNextPlanetId((n) => n + 1);
    setListOfPlanets(newPlanetsList);
  }

  return (
    <>
      <div className="container-sm">
        <label className="form-label">Filter:</label>
        <FilterBar value={filterValue} onChange={handleFilterUpdate} />
      </div>
      <div className="container-sm">
        <List items={filteredPlanets} onSelect={handleSelectedPlanet} />
      </div>
      {selectedPlanet && <Details item={selectedPlanet} onDelete={handleDeletePlanet} />}
      <CreateItem onSubmit={handleAddPlanet} />
    </>
  );
}
