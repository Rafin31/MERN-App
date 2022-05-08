import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useRest from '../Hooks/useRest';
import Loading from '../Loaidng/Loading';

const MyItems = () => {
    const baseApiUrl = 'http://localhost:5000/organicFood';
    const [items, setItems] = useState([])
    const { deleteItem } = useRest()


    const [user, loading] = useAuthState(auth)
    const responseToken = localStorage.getItem("accessToken");
    const token = JSON.parse(responseToken).accessToken



    useEffect(() => {

        fetch(`${baseApiUrl}/myItems?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data))

    }, [items, user, token])


    if (!items || loading) {
        return <Loading />
    }

    // console.log(items);



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
                            <h4>My Item</h4>
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
                                        <th scope="col">Author Email</th>
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
                                                    <td colSpan={9}>
                                                        You have No item
                                                    </td>
                                                </tr>
                                            </>
                                            :
                                            items?.map(({ _id, authorEmail, name, price, quantity, img, description, supplierName }) => {

                                                return (
                                                    <>
                                                        <tr>
                                                            <td className='idColumn'>{_id}</td>
                                                            <td >{authorEmail}</td>
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

export default MyItems;