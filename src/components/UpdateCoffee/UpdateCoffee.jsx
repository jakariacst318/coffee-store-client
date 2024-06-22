import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee)

        //  send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-28  text-center space-y-4">
            <h2 className="text-4xl font-semibold text-slate-700">UpdateCoffee</h2>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleUpdateCoffee}>
                {/* form row  coffee Name*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="name" id="" defaultValue={name} placeholder="Coffee Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> available quantity</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="quantity" id="" defaultValue={quantity} placeholder="available quantity" />
                        </label>
                    </div>

                </div>
                {/* form row  coffee supplier and test*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Supplier</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="supplier" id="" defaultValue={supplier} placeholder="Enter coffee supplier" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Taste</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="taste" id="" defaultValue={taste} placeholder="Enter coffee taste" />
                        </label>
                    </div>

                </div>
                {/* form row  Category  and Details*/}
                <div className="md:flex mb-7 gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Category</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="category" id="" defaultValue={category} placeholder="Category" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Details</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="details" id="" defaultValue={details} placeholder="Enter coffee details" />
                        </label>
                    </div>

                </div>
                {/* form row photo URL  */}
                <div className="pb-7">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="photo" id="" defaultValue={photo} placeholder="Photo URL" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C] hover:bg-[#e9ad5f] " />
            </form>
        </div>
    );
};

export default UpdateCoffee;