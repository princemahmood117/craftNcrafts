import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useState } from "react";


const AllCrafts = () => {

    const loadCrafts = useLoaderData();

    const [crafts,setCrafts] = useState(loadCrafts)
    return (
        <div className="m-20">
        <h1 className="text-purple-600 text-3xl text-center">
          Total Craft : {crafts.length}
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

        {
        crafts.map((craft) => (
          <CraftCard key={craft._id} craft={craft}
          crafts = {crafts} setCrafts = {setCrafts}
          ></CraftCard>
        ))
        
        }
        </div>

   
      </div>
    );
};

export default AllCrafts;