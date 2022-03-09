import { Link } from "react-router-dom";
import sliceTitle from "../helpers/sliceTitle";

function ProductCard({
  handleChange,
  onClickHandler,
  id,
  sku,
  url,
  name,
  type,
  price,
}) {
  return (
    <li className="product-list-item" key={id}>
      {onClickHandler && (
        <div className="delete-checkbox-container">
          <input
            type="checkbox"
            id={id}
            className="delete-checkbox"
            onChange={handleChange}
          />
        </div>
      )}
      <Link to={`product/${id}`}>
        <div className="img-container">
          <div className="img-fill"></div>
          <p>{sku}</p>
          <img src={url} alt={name} />
        </div>
        <div className="content-container">
          <h3 className="title">{sliceTitle(name)}</h3>
          <p>
            <span>{type}</span>
          </p>
          <p>
            <span>{"$" + price}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
