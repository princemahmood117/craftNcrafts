import { useLoaderData } from "react-router-dom";


const UpdateCraft = () => {

    const updateCraft = useLoaderData()

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