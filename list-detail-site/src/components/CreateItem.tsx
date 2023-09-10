import { useState, useEffect, FC } from 'react';

export const CreateItem: FC<{
  onSubmit: (i: string, j: number, k: string) => void;
}> = ({ onSubmit }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [numberOfMoons, setNumberOfMoons] = useState(0);
  const [feature, setFeature] = useState('');

  useEffect(() => {
    if (submitButtonClicked) {
      onSubmit(name, numberOfMoons, feature);
      setSubmitButtonClicked(false);
    }
  }, [submitButtonClicked])

  function parseNumberOfMoons(value: string) {
    const parsedNumber = Number.parseInt(value);

    parsedNumber && setNumberOfMoons(parsedNumber);
  }

  return (
    <>
      <div className="form">
        <label className="form-label">Name:</label>
        <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="form-label">Number of Moons:</label>
        <input className="form-control" value={numberOfMoons} onChange={(e) => parseNumberOfMoons(e.target.value)} />
      </div>
      <div>
        <label className="form-label">Unique Feature</label>
        <input className="form-control" value={feature} onChange={(e) => setFeature(e.target.value)} />
      </div>

      <div className="row justify-content-end px-2">
        <button
          className="btn btn-primary col-auto my-3"
          data-bs-dismiss="modal"
          data-bs-target="#AddPlanetModal"
          onClick={() => setSubmitButtonClicked(true)}>
          Add Planet
        </button>
      </div>
    </>
  )
}