import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";



const Table = styled.table`
margin: auto;
margin-top: 30px;
border-collapse: collapse;
& td, & th{
    border: .1px solid black;
    padding: 12px;
    text-align: left;
    letter-spacing: .5px;
}
& td{
    font-weight:500;
}
`


const Product = () => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(()=>{
            fetch("http://localhost:4000/products")
                .then((res) => res.json())
                .then((res) =>{
                    console.log(res)
                    return setProducts(res)})
                .catch((err) => console.log(err));
    },[])
    return (<>
        {
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                <tbody>
              {  products?.map((ele)=>(
                    <tr key={ele.id}>
                        <td>{ele.name}</td>
                        <td>INR : {ele.price}</td>
                        <td><Link to={`/products/${ele.id}`}>More Details..</Link></td>
                    </tr>
              ))
            }
                </tbody>
            </Table>
            
        }
    
    
    
    </>)
}

export default Product;