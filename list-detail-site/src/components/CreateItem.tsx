import { useState, FC } from 'react';
import { Planet } from '../models/planets';

export const CreateItem: FC<{
    onSubmit: (i: string, j: number, k: string) => void;
}> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [numberOfMoons, setNumberOfMoons] = useState(0);
    const [feature, setFeature] = useState('');

    function parseNumberOfMoons(value: string) {
        const parsedNumber = Number.parseInt(value);

        parsedNumber && setNumberOfMoons(parsedNumber);
    }

    return (
        <>
            <div>
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Number of Moons:</label>
                <input value={numberOfMoons} onChange={(e) => parseNumberOfMoons(e.target.value)} />
            </div>
            <div>
                <label>Unique Feature</label>
                <input value={feature} onChange={(e) => setFeature(e.target.value)} />
            </div>

            <button onClick={() => onSubmit(name, numberOfMoons, feature)} type="submit">Add Planet</button>
        </>
    )
}