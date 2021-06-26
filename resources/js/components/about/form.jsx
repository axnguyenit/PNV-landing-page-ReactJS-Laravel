import { stringify } from "postcss";
import React, { useState, useEffect } from "react";

const Form = () => {
    const [values, setValues] = useState({
        image:"",
        title:"",
        desc:"",
    });

    const handleOnChange = (event) =>{
        const {name, value} = event.target;
        setValues({...values, [name]: value});
        console.log(values);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        localStorage.setItem('data', JSON.stringify(values));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Image:
                <input type="file" id="image" name="image" onChange={handleOnChange}></input>
            </label>
            <label>
                Title:
                <input type="text" id="title" name="title" onChange={handleOnChange}></input>
            </label>
            <label>
                Description:
                <textarea type="file" id="image" name="desc" onChange={handleOnChange}></textarea>
            </label>
            <input type="submit" value="submit" />
        </form>
    );
}


export default Form;