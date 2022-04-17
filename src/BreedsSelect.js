import * as React from "react";

export const BreedsSelect = ({breeds, onChangeSelectedBreed, selectedBreed}) => {
  return (<>
      <select value={selectedBreed} onChange={(e) => onChangeSelectedBreed(e)}>
          {breeds.map((breed) => <option key={breed} value={breed}>{breed}</option>)}
      </select>
      </>)
}