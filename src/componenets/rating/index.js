import './rating.scss';

function StarsRating({ rating }) {
  return (
    <div className="review-stars">
      <span className={`fa fa-star ${rating >= 2 && 'checked'}`}></span>
      <span className={`fa fa-star ${rating >= 4 && 'checked'}`}></span>
      <span className={`fa fa-star ${rating >= 6 && 'checked'}`}></span>
      <span className={`fa fa-star ${rating >= 8 && 'checked'}`}></span>
      <span className={`fa fa-star ${rating === 10 && 'checked'}`}></span>
    </div>
  )
}

export default StarsRating;