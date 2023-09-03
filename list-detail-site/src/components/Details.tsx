import { FC } from 'react';
import { Planet } from '../models/planets';

export const Details: FC<{
    item: Planet;
    onDelete: (i: string) => void;
}> = ({ item, onDelete }) => {
    return (
        <>
            <h1>{item.name}</h1>
            <h2>{item.orbitalPosition}</h2>
            {item.mass?.earthMasses && <p>Mass: {item.mass?.earthMasses} Earth {item.mass?.earthMasses === 1 ? 'mass' : 'masses'}</p>}
            <p>{item.uniqueFeature}</p>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
    );
}