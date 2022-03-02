import { Link } from "react-router-dom";
import './showItem.scss';


function ShowItem({ id, image, name, rating }) {
  return (
    <Link to={"/show/" + id}>
      <div className="show-item">
        <img src={image} alt={name} />
        <div className="review-stars">
          <span className={`fa fa-star ${rating >= 2 && 'checked'}`}></span>
          <span className={`fa fa-star ${rating >= 4 && 'checked'}`}></span>
          <span className={`fa fa-star ${rating >= 6 && 'checked'}`}></span>
          <span className={`fa fa-star ${rating >= 8 && 'checked'}`}></span>
          <span className={`fa fa-star ${rating === 10 && 'checked'}`}></span>
        </div>
        {name}
      </div>
    </Link >
  )
}

export default ShowItem;
