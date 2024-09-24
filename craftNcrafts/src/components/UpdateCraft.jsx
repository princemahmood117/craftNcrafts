import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {

    const updateCraft = useLoaderData()

    const {name, price, rating, photo,_id} = updateCraft;

    const handleUpdateCraft = (e) =>{
        e.preventDefault();

        const form = e.target;
    
        const name = form.name.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const processing_time = form.processing_time.value;
     
    
        const updateCraft = {
          name,
          category,
          price,
          rating,
          details,
          processing_time,
          photo,
        };

        fetch(`http://localhost:5000/crafts/${_id}`, {
            // request will be sent to this url
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateCraft),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Coffee Updated Successfully",
                    icon: "success",
                    confirmButtonText: "Okay",
                  });
              }
            });

    }

    return (
        <div>

<div className="bg-[#F4F3F0] p-24">
        <h1 className="text-purple-600 text-3xl text-center font-extrabold">
          Update your information
        </h1>

        <form onSubmit={handleUpdateCraft}>
          {/* item-name and category */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered rounded-sm w-full"
                  name="name"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="category"
                  className="input input-bordered rounded-sm w-full"
                  name="category"
                />
              </label>
            </div>
          </div>

          {/* price and rating */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered rounded-sm w-full"
                  name="price"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="rating"
                  className="input input-bordered rounded-sm w-full"
                  name="rating"
                />
              </label>
            </div>
          </div>

          {/*  details and processing_time */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="details"
                  className="input input-bordered rounded-sm w-full"
                  name="details"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="processing_time"
                  className="input input-bordered rounded-sm w-full"
                  name="processing_time"
                />
              </label>
            </div>
          </div>

          {/* photoURL */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered rounded-sm w-full"
                  name="photo"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-slate-500 mt-4"
          />
        </form>
      </div>
            
        </div>
    );
};

export default UpdateCraft;