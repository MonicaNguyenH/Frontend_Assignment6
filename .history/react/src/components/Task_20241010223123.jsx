import { useState } from "react";

export default function Task({name}){
    const checkbox = document.getElementById("checkbox");
    const crossText = document.getElementById("task-name")

    return (
        <>
            <div className="task">
                <label for="checkbox">
                    <input type="checkbox"
                        id="checkbox"
                    />
                </label>
                <p id="task-name">{name}</p>
                <button className="task-delete">Remove</button>
            </div>

        </>
    );
}

// const checkbox = 
//             document.getElementById("checkbox"); 
//         const textToCross = 
//             document.getElementById("TextToStrike"); 
//             checkbox.addEventListener("change", 
//             function () { 
  
//                 // If checked, strike through  
//                 // the paragraph text 
//                 if (this.checked) { 
//                     textToCross.style.textDecoration = 
//                         "line-through"; 
//                 } 
  
//                 // If unchecked, remove the strikethrough 
//                 else { 
//                     textToCross.style.textDecoration = "none"; 
//                 } 
//             }); 

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