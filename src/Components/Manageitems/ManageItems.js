import React, { useEffect, useState } from 'react';
import './ManageItems.css'
import { useParams } from 'react-router-dom';
import useRest from '../Hooks/useRest';
import { toast } from 'react-toastify';

const ManageItems = () => {

    const [isShow, setIsShow] = useState(false)
    const [item, setItem] = useState({})
    const { id } = useParams()
    const baseURL = 'http://localhost:5000/organicFood';

    const { reStock } = useRest()


    useEffect(() => {
        fetch(`${baseURL}/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
        console.log("render Again");
    }, [id, item])


    let { _id, name, price, quantity, img, description, supplierName } = item;

    const handleReStock = (event) => {
        event.preventDefault()
        const updatedQty = event.target.stockQty.value
        if (updatedQty > 0) {
            quantity = item.quantity + parseFloat(updatedQty)
            let updatedItem = { ...item }
            updatedItem.quantity = quantity

            const res = reStock(id, updatedItem)
            console.log(res);
        } else {
            toast.error("Put value greater than 0")
        }
    }



    return (
        <>
            <div className="container-fluid">
                <div className="container manageItems_container">

                    <div className="row justify-content-center align-items-center">

                        <div className="col-12 text-center pb-5">
                            <h4>Manage Item</h4>
                        </div>

                        <div className="col-12 col-lg-10 table-responsive">

                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">supplier </th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        img == null ?
                                            <>
                                                <tr>
                                                    <td colSpan={8}>
                                                        <div class="d-flex justify-content-center">
                                                            <div class="spinner-border" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                                <tr className='table-primary'>
                                                    <td className='idColumn'>{_id}</td>
                                                    <td>
                                                        <img src={img} className="img-fluid d-block mx-auto" alt="" srcset="" />
                                                    </td>
                                                    <td>{supplierName}</td>
                                                    <td>{name}</td>
                                                    <td className='w-50' >{description}</td>
                                                    <td>{price}</td>
                                                    <td>{quantity}</td>
                                                    <td><button className="customButton w-100 ">Sold</button></td>
                                                </tr>
                                            </>
                                    }

                                </tbody>
                            </table>
                        </div>

                        <div className="col-12 col-lg-10">
                            <div className="addStocksButton">
                                <div className="button customButtonNoHover text-center pointer-event"
                                    onClick={() => setIsShow(!isShow)}>Restock</div>

                                <div className={!isShow ? "show restocksForm   my-4" : "restocksForm   my-4"}>
                                    <div className="card shadow-sm rounded p-2">
                                        <div className="form mx-auto">
                                            <form action="" onSubmit={(e) => handleReStock(e)}>
                                                <input type="number" name='stockQty' required className='form-input' placeholder='put number' />
                                                <input type="submit" value="Add" className="customButton w-100 my-3" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageItems;