import React from 'react';
import './Additem.css'

const Additem = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container add__item">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Product Name</label>
                            <input type="text" required class="form-control" id="exampleInputEmail1" placeholder="Enter product name" />

                            <label for="exampleInputEmail1">Supplier Name</label>
                            <input type="text" required class="form-control" id="exampleInputEmail1" placeholder="Enter Supplier Name" />

                            <label for="exampleInputEmail1">Description </label>
                            <textarea type="text" required class="form-control" id="exampleInputEmail1" placeholder="Enter Description" />

                            <label for="exampleInputEmail1">Quantity</label>
                            <input type="number" required class="form-control" id="exampleInputEmail1" placeholder="Enter Quantity" />

                            <label for="exampleInputEmail1">Price</label>
                            <input type="number" required class="form-control" id="exampleInputEmail1" placeholder="Enter Price" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Additem;