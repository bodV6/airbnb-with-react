import star from "../images/star.png";
// import "../images/";

function Card(props) {
  console.log(props.item);
  const src = require(`../images/${props.item.coverImg}`);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={src} alt="" />

      <div className="card--stats">
        <img className="card--star" src={star} alt="star" />
        <span>{props.item.rating}</span>
        <span className="gray">({props.item.reviewCount}) </span>
        <span className="gray"> -{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">from ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
