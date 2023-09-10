import { useState, FC } from 'react';
import { Planet, Moon } from '../models/planets';

export const Details: FC<{
  item: Planet;
  onDeletePlanet: (i: string) => void;
  onDeleteMoon: (i: string) => void;
  listOfPlanets: Planet[];
  setListOfPlanets: (i: Planet[]) => void;
}> = ({ item, onDeletePlanet, onDeleteMoon, listOfPlanets, setListOfPlanets }) => {
  const [moonName, setMoonName] = useState<Moon['name']>('');
  const [moonMass, setMoonMass] = useState<Moon['kg']>(1);
  const [moonRadius, setMoonRadius] = useState<Moon['radius']>(1);
  const [nextMoonId, setNextMoonId] = useState<number>(8);
  const cardStyle = {
    width: '12rem'
  };

  function handleAddMoon(planetId: Planet['id'], moonName: Moon['name'], moonMass: Moon['kg'], moonRadius: Moon['radius']) {
    const newPlanetsList = listOfPlanets.map(planet => {
      if (planet.id.includes(planetId)) {
        const newMoonList: Moon[] | undefined = [
          ...planet.listOfMoons,
          {
              id: planetId + '.' + nextMoonId.toString(),
              name: moonName,
              kg: moonMass,
              radius: moonRadius
          }
        ]

        console.log(newMoonList);

        return {
          ...planet,
          listOfMoons: newMoonList
        }
      }

      return planet;
    })

    setNextMoonId((id) => id + 1);
    setListOfPlanets(newPlanetsList);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12 col-md-6">
            <div className="row justify-content-between">
              <div className="col-auto">
                <h1>{item.name}</h1>
              </div>
              <div className="col-auto">
                <button className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#addMoonModal">Add Moon</button>
              </div>
            </div>
            <h2>{item.orbitalPosition}</h2>
            {
              item.mass?.earthMasses &&
              <p>
                Mass: {item.mass?.earthMasses} Earth {item.mass?.earthMasses === 1 ? 'mass' : 'masses'}
              </p>
            }
            <p>{item.uniqueFeature}</p>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDeletePlanet(item.id)}>
              Delete
            </button>
          </div>
          <div className="col col-12 col-md-6 d-flex-column">
            <p className="row justify-content-end">
              <button
                className="btn btn-sm btn-primary col-auto"
                data-bs-toggle="collapse"
                data-bs-target="#collapseMoon">
                Collapse
              </button>
            </p>
            <div className="collapse" id="collapseMoon">
              <div className="d-flex flex-wrap">
                {item.listOfMoons?.map((moon) =>
                (
                  <div key={moon.id} className="card m-1 relative-position" style={cardStyle}>
                    <div className="card-body">
                      <h2 className="card-title mt-3">
                        {moon.name}
                        <span
                          role="button"
                          onClick={() => onDeleteMoon(moon.id)}
                          className="btn btn-sm btn-outline-danger position-absolute top-0 end-0">
                          Remove
                        </span>
                      </h2>
                      <p className="card-text">
                        <strong>Mass: </strong>
                        {moon.kg.toPrecision(3)} kg
                      </p>
                      <p className="card-text">
                        <strong>Radius: </strong>
                        {moon.radius} km
                      </p>
                    </div>
                  </div>
                )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="addMoonModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addMoonModalLabel">New Moon</h1>
            </div>
            <div className="modal-body">
              <div className="form">
                <label className="form-label">Name:</label>
                <input className="form-control" value={moonName} onChange={(e) => setMoonName(e.target.value)} />
              </div>
              <div>
                <label className="form-label">Mass:</label>
                <input className="form-control" value={moonMass} onChange={(e) => setMoonMass(parseInt(e.target.value))} />
              </div>
              <div>
                <label className="form-label">Radius:</label>
                <input className="form-control" value={moonRadius} onChange={(e) => setMoonRadius(parseInt(e.target.value))} />
              </div>

              <div className="row justify-content-end px-2">
                <button
                  className="btn btn-primary col-auto my-3"
                  data-bs-dismiss="modal"
                  data-bs-target="#AddPlanetModal"
                  onClick={() => handleAddMoon(item.id, moonName, moonMass, moonRadius)}>
                  Add Moon
                </button>
              </div>
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