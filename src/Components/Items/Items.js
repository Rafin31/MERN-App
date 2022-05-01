import React, { useEffect, useState } from 'react';
import './Item.css'
import { ImPriceTags } from 'react-icons/im'
import { MdOutlineProductionQuantityLimits, MdUpdate } from 'react-icons/md'
import { BsTruck } from 'react-icons/bs'
const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <>
            <section className="items container-fluid" id='item'>
                <div className="container items-container">
                    <div className="row gy-3 justify-content-center align-items-center">
                        <div className="title__wrapper">
                            <p className="small__title">1000+ Items </p>
                            <p className="large__title">Items</p>

                        </div>
                        {
                            items.slice(0, 5).map(({ id, name, supplierName, description, quantity, price, img }) => {
                                return (
                                    <>
                                        <div key={id} className="col-12 col-xl-4 col-lg-4 col-md-6">

                                            <div className="card rounded shadow-sm"
                                                data-aos="fade-up"
                                            >
                                                <div className="card__img">
                                                    <img src={img} alt="" className="card-img-top card_img" />
                                                </div>
                                                <div className="card-body">
                                                    <p className="item_name">{name}</p>
                                                    <p className="supplierName"> <BsTruck /> {supplierName}</p>
                                                    <p className="item_description">{description}</p>

                                                    <div className="row card_price_section">
                                                        <div className="col-6"><p className="quantity">
                                                            <MdOutlineProductionQuantityLimits />
                                                            Quantity: {quantity} pc</p></div>
                                                        <div className="col-6">
                                                            <p className="price"> <ImPriceTags /> Price: {price}
                                                            </p></div>
                                                    </div>

                                                    <button className="d-block mx-auto customButton mt-4">
                                                        <MdUpdate className='me-2 button_logo' />
                                                        Update</button>

                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default Items;