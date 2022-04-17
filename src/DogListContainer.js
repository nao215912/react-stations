import {useEffect, useState} from "react";
import * as React from "react";
import {BreedsSelect} from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] =useState([])
    const [selectedBreed, setSelectedBreed] = useState("african")
    const [breedURLs, setBreedURLs] = useState([])
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
    const onChangeSelectedBreed = (e) => {
        setSelectedBreed(e.target.value)
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
            .then(res => res.json())
            .then(
                (result) => {
                    setBreedURLs(result.message)
                },
                (err) => {
                    console.error(err)
                }
            )
    }
    return (    <>
        <BreedsSelect breeds={breeds} onChangeSelectedBreed={onChangeSelectedBreed} selectedBreed={selectedBreed}/>
            <p>{selectedBreed}</p>
            {breedURLs.map((breedURL) => <img src={breedURL} alt={`犬の画像`}/>)}
        </>
    )
}

