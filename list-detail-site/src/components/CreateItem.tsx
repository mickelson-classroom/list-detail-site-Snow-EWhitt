import { useState, useEffect, FC } from 'react';
import { CustomInput } from './CustomInput';

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
    <form className="needs-validation was-validated" noValidate>
      <div>
        {/* <label className="form-label">Name:</label> */}
        {/* <input type="text" className="form-control" id="nameValidation" value={name} onChange={(e) => setName(e.target.value)} required /> */}
        <CustomInput
          id="nameValidation"
          type="text"
          value={name}
          onChange={(name) => setName(name)}
          required
          >
            Name:
          </CustomInput>
      {/* </div>
      {name && <div className="">Looks good!</div>}
      <div> */}
        {/* <label className="form-label">Number of Moons:</label> */}
        <CustomInput
          id="moonValidation"
          type="number"
          value={numberOfMoons}
          onChange={(number) => parseNumberOfMoons(number)}
        >
          Number of Moons:
        </CustomInput>
      </div>
      <div>
        {/* <label className="form-label">Unique Feature</label> */}
        <CustomInput
          id="featureValidation"
          value={feature}
          onChange={(feature) => setFeature(feature)}
          required
        >
          Unique Feature:
        </CustomInput>
      </div>

      <div className="row justify-content-end px-2">
        <button
          type="submit"
          className="btn btn-primary col-auto my-3"
          data-bs-dismiss="modal"
          data-bs-target="#AddPlanetModal"
          onClick={e => {e.preventDefault(); setSubmitButtonClicked(true); }}>
          Add Planet
        </button>
      </div>
    </form>
  )
}