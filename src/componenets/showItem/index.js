import { Link } from "react-router-dom";
import StartItem from '../rating';
import './showItem.scss';


function ShowItem({ id, image, name, rating }) {
  return (
    <Link to={"/show/" + id}>
      <div className="show-item">
        <img src={image} alt={name} />
        <StartItem rating={rating} />
        {name}
      </div>
    </Link >
  )
}

export default ShowItem;
