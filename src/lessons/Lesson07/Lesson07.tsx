import { v4 } from "uuid";

import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalData } from "./data";
import './styles.css';

function Lesson07() {
  const animalCards = animalData.map((animal) => {
    return <AnimalCard
      key={v4()}
      name={animal.name}
      species={animal.species}
      img={animal.image} />
  })

  console.log(animalCards);


  return (
    <div className='cards-wrapper'>
      {animalCards}
    </div>
  )
  // <AnimalCard name={animalData[0].name} species="Lion" img='' />
}

export default Lesson07