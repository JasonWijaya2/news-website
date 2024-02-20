import noImage from "../assets/news.jpg"
import { Link } from "react-router-dom"

export const Item = ({ title, description, src, uniqueIdentifier, url }) => {

  return (
    <Link
      to={url}
      target="_blank"
      className="card text-bg-dark m-1"
      style={{ textDecoration: "none" }}
    >
      <img
        src={src ? src : noImage}
        style={{ width:'420px', height: "210px", filter: 'brightness(50%)' }}
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay">
        <h5 className="card-title">{title.length > 70 ? title.substring(0, 70) + '...' : title}</h5>
        <p className="card-text">
          {(description.length > 80 ? description.substring(0, 80) + '...' : description)
            ? description
            : "This news has no description. If you want to view the detail, click this Card"}
        </p>
      </div>
    </Link>
  );
};
