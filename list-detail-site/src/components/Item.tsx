import { FC } from "react";
import { Planet } from '../models/planets';

export const Item:FC<{
    item: Planet;
    onClick: (i: Planet) => void;
}> = ({ item, onClick }) => {
    return <button onClick={() => onClick(item)}>{item.name}</button>
}