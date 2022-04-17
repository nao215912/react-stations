import {useState} from "react";
import {DogImage} from "./DogImage";
import * as React from "react";

export const Description = () => {
    const [dogUrl, setDogUrl] = useState(`https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg`)
    const onClickShowDog = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setDogUrl( result.message)
                },
                () => {
                    setDogUrl(`https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg`)
                }
            )
    }
    return (
        <>
            <DogImage url={dogUrl}/>
            <button onClick={onClickShowDog} className={`button-size`}>on/off</button>
        </>
    )
}