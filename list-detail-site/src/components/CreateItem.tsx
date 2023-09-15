import { useState, useEffect, FC } from 'react';
import { CustomInput } from './CustomInput';
import { CustomSelect } from './CustomSelect';
import { CustomRadioButton } from './CustomRadioButton';

export const CreateItem: FC<{
  onSubmit: (
    planetName: string,
    numOfMoons: number,
    planetFeature: string,
    planetTemperature: string,
    planetComposition: string
    ) => void;
}> = ({ onSubmit }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [numberOfMoons, setNumberOfMoons] = useState(0);
  const [feature, setFeature] = useState('');
  const [temperature, setTemperature] = useState('temperate');
  const [composition, setComposition] = useState('rocky');

  useEffect(() => {
    if (submitButtonClicked) {
      onSubmit(name, numberOfMoons, feature, temperature, composition);
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
        <CustomInput
          id="nameValidation"
          type="text"
          value={name}
          onChange={(name) => setName(name)}
          required
        >
          Name:
        </CustomInput>
        <div className="row">
          <div className="col-12 col-sm-6">
            <CustomSelect label="Temperature:" onChange={(t) => setTemperature(t)}>
              <option value="tropical">Tropical</option>
              <option value="dry">Dry</option>
              <option value="temperate" selected>Temperate</option>
              <option value="continental">Continental</option>
              <option value="polar">Polar</option>
            </CustomSelect>
          </div>
          <fieldset className="col-12 col-sm-6">
            <legend style={{ fontSize: "1rem" }}>Select a Composition:</legend>
            <CustomRadioButton name="planetComposition" value="Rocky" onClick={(c) => setComposition(c)} label="Rocky" checked />
            <CustomRadioButton name="planetComposition" value="Gaseous" onClick={(c) => setComposition(c)} label="Gaseous" />
          </fieldset>
        </div>
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
          onClick={(e) => { e.preventDefault(); setSubmitButtonClicked(true); }}>
          Add Planet
        </button>
      </div>
    </form>
  )
}