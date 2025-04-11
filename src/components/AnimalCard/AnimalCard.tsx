import './styles.css';
import { AnimalCardProps } from "./types";

function AnimalCard({ name, species, img }: AnimalCardProps) {
  return (
    <div className="animal-card-container">
      <h2>{name}</h2>
      <div>{species}</div>
      <img src={img} />
    </div>
  )
}

export default AnimalCard;