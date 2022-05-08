import React, { useEffect, useState } from 'react';
import './Inventory.css'
import { Link } from 'react-router-dom';
import useRest from '../Hooks/useRest';
import { toast } from 'react-toastify';
import Loading from '../Loaidng/Loading';

const Inventory = () => {

    const baseApiUrl = 'https://desolate-badlands-90041.herokuapp.com/organicFood';
    const [items, setItems] = useState([])
    const { deleteItem } = useRest()





    useEffect(() => {

        fetch(`${baseApiUrl}/items`)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [items])

    if (!items) {
        return <Loading />
    }



    const handleDelete = (e, id) => {
        if (window.confirm('Are you sure?')) {
            e.preventDefault()
            deleteItem(id);
            toast.success("Item Deleted")
        }
    }



    return (
        <>
            <div className="container-fluid">
                <div className="container item_container">

                    <div className="row justify-content-center align-items-center">

                        <div className="col-12 text-center pb-5">
                            <h4>Manage Inventory Item</h4>
                        </div>

                        <div className="col-12 col-lg-12 justify-content-center align-items-center">
                            <Link className='text-center w-25 customButtonNoHover d-block mb-3 ms-auto'
                                to={'/addItem'}
                            >Add Item</Link>
                        </div>

                        <div className="col-12 col-lg-12 table-responsive">

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
                                        !items.length ?
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
                                            items.map(({ _id, name, price, quantity, img, description, supplierName }) => {

                                                return (
                                                    <>
                                                        <tr>
                                                            <td className='idColumn'>{_id}</td>
                                                            <td>
                                                                <img src={img} className="img-fluid d-block mx-auto" alt="" srcset="" />
                                                            </td>
                                                            <td>{supplierName}</td>
                                                            <td>{name}</td>
                                                            <td className='w-50' >{description}</td>
                                                            <td>{price}</td>
                                                            <td>{quantity}</td>
                                                            <td><button onClick={(e) => handleDelete(e, _id)} className="customButton w-100 ">Delete</button></td>
                                                        </tr>
                                                    </>
                                                )

                                            })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Inventory;