import * as React from "react";

export const BreedsSelect = ({breeds, onChangeSelectedBreed, selectedBreed,shouldShow, setShouldShow}) => {
    const onClickSowImage = () => {
      setShouldShow(!shouldShow)
    }
  return (<>
      <select value={selectedBreed} onChange={(e) => onChangeSelectedBreed(e)}>
          {breeds.map((breed) => <option key={breed} value={breed}>{breed}</option>)}
      </select>
      <button onClick={onClickSowImage}>表示</button>
      </>)
}
