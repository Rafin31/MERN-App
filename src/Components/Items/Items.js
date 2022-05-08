import React from 'react';
import './Item.css'
import { ImPriceTags } from 'react-icons/im'
import { MdOutlineProductionQuantityLimits, MdUpdate } from 'react-icons/md'
import { BsTruck } from 'react-icons/bs'
import useRest from '../Hooks/useRest';
import { Link, useNavigate } from 'react-router-dom';
const Items = () => {



    const { items } = useRest()
    const navigate = useNavigate()


    const redirect = (id) => {
        navigate(`/items/${id}`)
    }


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
                            items.slice(0, 6).map(({ _id, name, supplierName, description, quantity, price, img }) => {
                                return (
                                    <>
                                        <div key={_id} className="col-12 col-xl-4 col-lg-4 col-md-6">

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

                                                    <button onClick={() => redirect(_id)} className="d-block mx-auto customButton mt-4">
                                                        <MdUpdate className='me-2 button_logo' />
                                                        Update</button>

                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }

                        <div className="col-12 justify-content-center align-items-center">
                            <Link className='text-center w-25 customButton d-block ms-auto'
                                to={'/manageInventories'}>Manage inventories</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Items;