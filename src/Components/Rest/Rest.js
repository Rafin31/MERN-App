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

    loadItems()

    return {
        items,
        loadSingleItem
    }

};

export default Rest;