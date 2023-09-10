import { FC } from 'react';

export const FilterBar: FC<{
    value: string;
    onChange: (i: string) => void;
}> = ({ value, onChange}) => {
    return (
        <input id="filterBar" className="form-control" value={value} onChange={(e) => onChange(e.target.value)} />
    );
}