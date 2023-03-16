import airbnb from "../images/airbnb-logo.png"

function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={airbnb} alt="airbnb logo">
      </img>
    </nav>
  );
}

export default Navbar;
