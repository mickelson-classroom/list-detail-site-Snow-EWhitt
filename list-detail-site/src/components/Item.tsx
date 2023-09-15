import { FC } from "react";
import { Planet } from '../models/planets';

export const Item: FC<{
  item: Planet;
  onClick: (i: Planet) => void;
}> = ({ item, onClick }) => {
  return (
    <button
      className="col-12 col-sm-6 col-md-3 col-lg-1 btn btn-primary mx-2 my-md-1 text-white"
      onClick={() => onClick(item)}>
      {item.name}
    </button>
  )
}