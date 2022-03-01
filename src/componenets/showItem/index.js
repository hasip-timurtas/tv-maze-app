import './showItem.scss';

function ShowItem({ image, name, rating }) {

  return (
    <div className="show-item">
      <img src={image} alt={name} />
      <div className="review-stars">
        <span className={`fa fa-star ${rating > 4 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${rating > 4 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${rating > 6 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${rating > 8 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${rating === 10 ? 'checked' : ''}`}></span>
      </div>
      {name}
    </div>
  )
}

export default ShowItem;
