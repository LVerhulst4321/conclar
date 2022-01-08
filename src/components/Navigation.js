import { Link } from "react-router-dom";
import configData from "../config.json";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">{ configData.NAVIGATION.PROGRAM }</Link>
        </li>
        <li>
          <Link to="/people">{ configData.NAVIGATION.PEOPLE }</Link>
        </li>
        <li><Link to="/myschedule">{ configData.NAVIGATION.MYSCHEDULE }</Link></li>
        <li>
          <Link to="/info">{ configData.NAVIGATION.INFO }</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;