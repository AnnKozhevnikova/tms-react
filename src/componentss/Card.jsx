import React from "react";
import { withRouter } from "react-router";


const  Card=(props)=>{
        let product=props.products.find(item => item.id===props.match.params.id);
        return (
            <section className="container " id="section">
                <div className="row main">
                    <div className="image">
                        <img src={product.imageLink} alt=' ' />
                    </div>
                    <div className="properties">
                        <p>{product.title}</p>
                        <p className="characteristics" dangerouslySetInnerHTML={{__html: product.description}} />
                    </div>
                    <div className="product_price">
                        <p className="price" >${product.price.value}.00</p>
                    </div>
                </div>
            </section>
        )
}

export default withRouter(Card);