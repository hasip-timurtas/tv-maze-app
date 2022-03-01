import './showItem.scss';

function ShowItem({ image, rate, desc }) {
  return (
    <div name="show-item">
      <img src={image} alt={desc} />
    </div>
  )
}

export default ShowItem;
