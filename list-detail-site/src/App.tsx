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

  function handleDeletePlanet(id: Planet["id"]) {
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
        uniqueFeature: planetFeature,
        listOfMoons: []
      }
    ]
    
    setNextPlanetId((n) => n + 1);
    setListOfPlanets(newPlanetsList);
  }

  function handleDeleteMoon(id: string) {
    const planetId = id.split('.')[0]
    const newPlanetsList = listOfPlanets.map(planet => {
      if (planet.id === planetId) {
        const newMoonList = planet.listOfMoons?.filter((moon) => (
          !moon.id.includes(id)
        ));

        return {
          ...planet,
          listOfMoons: newMoonList
        };
      }

      return planet;
    })

    setListOfPlanets(newPlanetsList);
  }

  return (
    <>
      <div className="container">
        <div className="row px-5 align-items-center justify-content-center">
          <div className="col-auto">
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddPlanetModal">
              Add Planet
            </button>
          </div>
          <div className="col-12 col-sm-8 col-lg-3 offset-lg-6">
            <label id="filterBar" className="form-label">
              Filter:
            </label>
            <FilterBar value={filterValue} onChange={handleFilterUpdate} />
          </div>
        </div>
        <List items={filteredPlanets} onSelect={handleSelectedPlanet} />
        <hr />
        {
          selectedPlanet &&
          <Details
            item={selectedPlanet}
            onDeletePlanet={handleDeletePlanet}
            onDeleteMoon={handleDeleteMoon}
            listOfPlanets={listOfPlanets}
            setListOfPlanets={setListOfPlanets}
          />
        }
      </div>
      <div className="modal" id="AddPlanetModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addPlanetModalLabel">New Planet</h1>
            </div>
            <div className="modal-body">
              <CreateItem onSubmit={handleAddPlanet} />
            </div>
            <div className="modal-footer">
              <button role="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
