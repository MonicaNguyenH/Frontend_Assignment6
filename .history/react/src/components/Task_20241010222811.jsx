export default function Task({name}){

    return (
        <>
            <div className="task">
                <label for="checkbox">
                    <input type="checkbox"
                        id="checkbox"
                    />
                    <p className="task-name">{name}</p>
                </label>
                <button className="task-delete">Remove</button>
            </div>

        </>
    );
}

{/* <div className="product">
            <div className="product-image">
                <img src={product.image_url} alt={product.name} />
            </div>
            <p>
              <span className="pr-name">{product.name}</span>
              <span className="pr-price">${product.price}</span>
            </p>
            <button className="add-to-cart">Add to cart</button>
            <button><span>&#129293;</span> <span>Add to wishlist</span></button>
</div> */}