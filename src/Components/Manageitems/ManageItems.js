import React from 'react';
import './ManageItems.css'
import { useParams } from 'react-router-dom';
import useRest from '../Hooks/useRest';

const ManageItems = () => {

    const { id } = useParams()

    const { loadSingleItem } = useRest()

    const { _id, name, price, quantity, img, description } = loadSingleItem(id)


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
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='table-primary'>
                                        <td className='idColumn'>{_id}</td>
                                        <td>
                                            <img src={img} className="w-50 d-block mx-auto" alt="" srcset="" />
                                        </td>
                                        <td>{name}</td>
                                        <td className='w-50' >{description}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageItems;