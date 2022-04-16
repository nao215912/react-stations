// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState} from "react";

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
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
    <div>
        <header>header</header>
      <h2>Hello, world!</h2>
        <img src={dogUrl} alt={`犬の画像`}/>
        <button onClick={onClickShowDog}>on/off</button>
    </div>
  )
}
