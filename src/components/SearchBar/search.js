import React, {useState} from 'react'
import "./search.css"

const products = [
    "tooth paste",
    "tooth brush",
    "mouth wash",
    "dental floss",
    "mouth guard",
    "tooth pick"
]

const SearchBar = ()=>{
    const[searchValue, setSearchValue] = useState("")
    const handleInputchange= (event)=>{
        setSearchValue(event.target.value)
    }

    const handleClearClick=  () =>{
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length>0;
    const filteredProducts = products.filter((product)=>{
        return product.includes(searchValue)
    })
    // console.log(shouldDisplayButton);

    return <div>
            <input type="text" placeholder="Search..." value={searchValue} onChange={handleInputchange}/>
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}  
            <ul>
            {
                filteredProducts.map((product) =>{
                    return <li key={product}>{product}</li>
                })
            }
            </ul>
        </div>
}

export default SearchBar

