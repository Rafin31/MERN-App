import React, { useState } from 'react';

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

    }
    const deleteItem = (id) => {

        fetch(`${baseURL}/items/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    }

    const addNewItem = (item) => {
        let res;
        fetch(`${baseURL}/items/addItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => res = data)

        return res

    }

    loadItems()


    return {
        items,
        loadSingleItem,
        reStock,
        deleteItem,
        addNewItem
    }

};

export default Rest;