import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick(){
        console.info(`Handel Click`);
        setLoad(true);
    }

    useEffect(() =>{
        console.info(`Call use Effect with []`);
    }, [])

    useEffect(() => {
        console.log("Call Use Effect");
        if(load){
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
        }

        return () => {
            console.info("Product List Component unmounted")
        }
    }, [load])

    return(
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Product</button>
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </>
    )
}