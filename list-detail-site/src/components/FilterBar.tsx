import { FC } from 'react';

export const FilterBar: FC<{
    value: string;
    onChange: (i: string) => void;
}> = ({ value, onChange}) => {
    return (
        <input className="form-control" value={value} onChange={(e) => onChange(e.target.value)} />
    );
}