import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Information from "../Components/Information";
import shopItems from "../Data/shopItems.json";


function Product() {
    const params = useParams();
    const urlId = parseInt(params.id!);

    return (
        <div className="product-page-container">
            <Header/>
            <Information/>
            <div className="second-product-page-container">
                {shopItems.filter(item => item.id === urlId).map(item => (
                    <>
                        <div className="product-page-left-side">
                            <img src={item.url} alt="product-image" />
                        </div>
                        <div className="product-page-right-side">
                            <h3>{item.name}</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Reiciendis eaque nostrum aliquam dicta deserunt recusandae voluptates mollitia rerum quae cupiditate! 
                                Quidem quo porro dolore enim, libero possimus accusantium nisi corporis.
                            </p>
                            <input type="number" />
                            <button>Add to cart</button>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Product;