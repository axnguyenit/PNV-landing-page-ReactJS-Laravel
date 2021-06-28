import { stringify } from "postcss";
import React, { useState, useEffect } from "react";

const Form = () => {
    const [values, setValues] = useState({
        image:"https://anhdepbonphuong.com/wp-content/uploads/2016/12/hinh-nen-dep-cho-may-tinh-nature-wallpapers-nature-wallpaper-latest-beautiful-wallpapers-800x480.jpg",
        title:"Join with Us",
        desc:"Let's join. Invitation on an advantages collecting ",
    });

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        localStorage.setItem('data', JSON.stringify(values));
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="submit" value="submit" />
        </form>
    );
}


export default Form;