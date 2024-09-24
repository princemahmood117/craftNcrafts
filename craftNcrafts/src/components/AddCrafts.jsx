import Swal from "sweetalert2";


const AddCrafts = () => {


    const handleAddCraft = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const name = form.name.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const processing_time = form.processing_time.value;
        const user_name = form.user_name.value;
        const email = form.email.value;
    
        const newCraft = {
          name,
          category,
          price,
          rating,
          details,
          processing_time,
          photo,
          email,
          user_name,
        };
    
        // console.log(newCoffee);
    
        // (A) send the 'newCoffee' data to the server
    
        // have to send from client to server, so have to use server side's url where the data will be stored
        fetch("http://localhost:5000/crafts", {
          // request will be sent to this url
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCraft),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Craft Added Successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
            form.reset();
          });
      };
    return (
        <div>

<div className="bg-[#F4F3F0] p-24">
        <h1 className="text-purple-600 text-3xl text-center font-extrabold">
          Add Crafts here
        </h1>

        <form onSubmit={handleAddCraft}>
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

          {/* processing time */}
          {/* <div className="md:flex gap-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Processing time"
                  className="input input-bordered rounded-sm w-full"
                  name="processing_time"
                />
              </label>
            </div>
          </div> */}

          {/* user name */}
          <div className="md:flex gap-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="user name"
                  className="input input-bordered rounded-sm w-full"
                  name="user_name"
                />
              </label>
            </div>
          </div>

          {/* user email */}
          <div className="md:flex gap-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered rounded-sm w-full"
                  name="email"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-slate-500 mt-4"
          />
        </form>
      </div>
            
        </div>
    );
};

export default AddCrafts;