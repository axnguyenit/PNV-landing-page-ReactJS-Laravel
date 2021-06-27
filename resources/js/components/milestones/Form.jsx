import React, { useEffect, useState } from 'react';

const Form = () => {
    const [values, setValues] = useState({
        title: 'milestones',
        desc: 'hhhhhhhhhhhhhh',
        card: [
            {
                img: 'https://i.pinimg.com/736x/d4/f8/35/d4f8354476b043248cc37da9afd0c06f.jpg',
                title: 'h1',
                desc: 'hhhhh',
                year: '2020',
                month: '203333'
            },
            {
                img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
                title: 'h2',
                desc: 'hhhhhddAGTYURUD',
                year: '2020464',
                month: '203333'
            },
            {
                img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
                title: 'h2',
                desc: 'hhhhhddAGTYURUD',
                year: '2020464',
                month: '203333'
            },
            {
                img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
                title: 'h2',
                desc: 'hhhhhddAGTYURUD',
                year: '2020464',
                month: '203333'
            },
            {
                img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
                title: 'h2',
                desc: 'hhhhhddAGTYURUD',
                year: '2020464',
                month: '203333'
            },
            {
                img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
                title: 'h2',
                desc: 'hhhhhddAGTYURUD',
                year: '2020464',
                month: '203333'
            }

        ]
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }
    useEffect(() => {
        localStorage.setItem('values', JSON.stringify(values));
    }, []);

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}
export default Form;
