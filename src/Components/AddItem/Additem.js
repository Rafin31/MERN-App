import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useRest from '../Hooks/useRest';
import Loading from '../Loaidng/Loading';
import './Additem.css'

const Additem = () => {


    const { addNewItem } = useRest()
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    if (loading) {
        return <Loading />
    }

    const handleFormSubmit = (event) => {

        event.preventDefault()
        const name = event.target.productName.value
        const authorEmail = user.email
        const supplierName = event.target.supplierName.value
        const description = event.target.productDescription.value
        const quantity = event.target.productQty.value
        const price = event.target.productPrice.value
        const img = event.target.productImage.value

        if (name === " " || supplierName === " " || description === " " || quantity === " " || price === " " || img === " ") {

            toast.error("Filds can not be empty ")
            return;

        } else {

            const newProduct = { name, authorEmail, supplierName, description, quantity, price, img }
            addNewItem(newProduct)
            toast.success("Item Added")
            navigate('/myItems')
        }




    }


    return (
        <>
            <div className="container-fluid">
                <div className="container add__item">
                    <form onSubmit={(e) => handleFormSubmit(e)}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Product Name</label>
                            <input type="text" name='productName' required class="form-control my-3" id="exampleInputEmail1" placeholder="Enter product name" />

                            <label for="exampleInputEmail1">Supplier Name</label>
                            <input type="text" name='supplierName' required class="form-control my-3" id="exampleInputEmail1" placeholder="Enter Supplier Name" />

                            <label for="exampleInputEmail1">Description </label>
                            <textarea type="text" name='productDescription' required class="form-control my-3" id="exampleInputEmail1" placeholder="Enter Description" />

                            <label for="exampleInputEmail1">Quantity</label>
                            <input type="number" name='productQty' required class="form-control my-3" id="exampleInputEmail1" placeholder="Enter Quantity" />

                            <label for="exampleInputEmail1">Price</label>
                            <input type="number" name='productPrice' required class="form-control my-3" id="exampleInputEmail1" placeholder="Enter Price" />

                            <label for="exampleInputEmail1">Image Link</label>
                            <input type="text" name='productImage' required class="form-control my-3" id="exampleInputEmail1" placeholder="Enter Image Link" />

                            <button type="submit" className='customButton w-100'>Add item</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Additem;