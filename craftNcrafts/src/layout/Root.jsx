import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (

    
    <div className="max-w-7xl mx-auto">
      <div className="h-16">
        <Nav></Nav>
      </div>



{/* this part's contents are dynamic for all website  */}
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
