import * as React from "react";

export const BreedsSelect = ({breeds}) => {
  return (<>
      <select size="1" name="dog">
          {breeds.map((breed) => <option value="dog">{breed}</option>)}
      </select>
      </>)
}