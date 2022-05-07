import React, { useEffect, useState } from 'react';

const Rest = () => {

    const [items, setItems] = useState([])
    const [singleItem, setSingleItem] = useState([])
    const baseURL = 'http://localhost:5000/organicFood';


    const loadItems = () => {
        fetch(`${baseURL}/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }

    const loadSingleItem = (id) => {

        fetch(`${baseURL}/items/${id}`)
            .then(res => res.json())
            .then(data => setSingleItem(data))

        return singleItem;
    }

    const reStock = (id, item) => {

        // let respond;
        // console.log(id, qty);
        fetch(`${baseURL}/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),

        })
            .then(res => res.json())
            .then(data => console.log(data))

        // return respond;
    }


    loadItems()

    return {
        items,
        loadSingleItem,
        reStock
    }

};

export default Rest;