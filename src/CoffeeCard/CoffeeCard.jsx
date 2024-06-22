import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof =>cof._id !==_id);
                            setCoffees(remaining) 
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 items-center shadow-xl p-2 border border-emerald-600">
                <figure><img className='w-40' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">Name: <span className='font-semibold'>{name}</span></h2>
                        <p>quantity: <span className='font-semibold'>{quantity}</span></p>
                        <p>{supplier}</p>
                        <p>Price :  <span className='font-semibold'> 120</span></p>
                    </div>
                </div>

                <div>
                    <div className="btn-group btn-group-vertical mr-5 space-y-2">
                        <button className="btn text-white text-xl bg-amber-500 hover:bg-amber-700"><AiFillEye /> </button> <br />

                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn text-white text-xl bg-slate-800 hover:bg-slate-500"><AiFillEdit /></button> <br />
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white text-xl hover:bg-slate-800 "><AiFillDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    children: PropTypes.node
}