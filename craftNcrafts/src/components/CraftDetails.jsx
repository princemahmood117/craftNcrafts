import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {

    const loadedCraft = useLoaderData()
    return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={loadedCraft.photo}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{loadedCraft.name}</h1>
      <p className="py-6">
        {loadedCraft.details}
      </p>

      <p>Price : {loadedCraft.price}</p>

      <p>User name : {loadedCraft.user_name}</p>
      
    </div>
  </div>
</div>
    );
};

export default CraftDetails;