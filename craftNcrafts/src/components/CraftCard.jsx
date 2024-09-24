import { Roll } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({ craft, setCrafts, crafts }) => {
  const { name, price, rating, photo, user_name, _id } = craft;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been removed!",
                icon: "success",
              });

              const remaining = crafts.filter((cof) => cof._id !== _id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
  <Roll>
  <div className="card card-side bg-base-100 shadow-xl p-2">
        <figure className="">
          <img className="md:w-64 md:h-[200px]" src={photo} alt="Movie" />
        </figure>
        <div className="w-full flex justify-between p-4">
          <div className="space-y-2">
            <h2 className="card-title">{name}</h2>
            <p>Price :{price}</p>
            <p>Rating : {rating}</p>
            <p>User Name : {user_name}</p>
          </div>

          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <button className="btn join-item">View</button>

              <Link to={`/updateCraft/${_id}`}>
                {" "}
                <button className="btn join-item">Update</button>{" "}
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  </Roll>
    </div>
  );
};

export default CraftCard;
