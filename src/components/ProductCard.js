import sliceTitle from "../helpers/sliceTitle";
import { v4 as uuidv4 } from "uuid";

function ProductCard({ sku, url, name, type, price }) {
    return (
        <>
            <li className="product-list-item" key={uuidv4()}>
                <div className="img-container">
                    <div className="img-fill"></div>
                    <p>{sku}</p>
                    <img src={url} alt={name} />
                </div>
                <div className="content-container">
                    <h3 className="title">{sliceTitle(name)}</h3>
                    <p>
                        Category: <span>{type}</span>
                    </p>
                    <p>
                        Price: <span>{"$" + price}</span>
                    </p>
                </div>
            </li>
        </>
    );
}

export default ProductCard;
