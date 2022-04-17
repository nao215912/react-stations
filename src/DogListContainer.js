import {useEffect, useState} from "react";
import * as React from "react";
import {BreedsSelect} from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] =useState([])
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/list/all")
          .then(res => res.json())
          .then(
              (result) => {
                setBreeds(Object.keys(result.message))
              },
              (err) => {
                console.error(err)
              }
          )
    },[])

    return (    <>
        <BreedsSelect breeds={breeds}/>
        </>
    )
}

