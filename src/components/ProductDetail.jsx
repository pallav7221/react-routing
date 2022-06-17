import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams()
    
    const [isLoading, setIsLoading] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState({});

    const fetchData = async () =>{
        try {
            setIsLoading(true);
            // console.log(id)
            let res = await fetch(`http://localhost:4000/products/${id}`)
            let data = await res.json()
            
            setProductDetails(data)
            setIsLoading(false);
        } catch (error) {
           setIsLoading(true)
            console.log(error)
        }
        
    }


    React.useEffect( () => {
       fetchData()
    }, [])

    return <>
        {isLoading ? "loading..." :
            <div>
                <h2>{productDetails.id}</h2>
                <h2>{productDetails.name}</h2>
                <h2>{productDetails.price}</h2>
            </div>

        }

    </>
}

export default ProductDetail