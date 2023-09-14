import { FC } from 'react';
import { CustomInput } from './CustomInput';

export const FilterBar: FC<{
    value: string;
    onChange: (i: string) => void;
}> = ({ value, onChange}) => {
    return (
        <CustomInput id="filterBar" value={value} onChange={(filterValue: string) => onChange(filterValue)} />
    );
}