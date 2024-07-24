import { DataTableDemo } from "@/components/DataTableDemo";
import Navbar from "@/components/Navbar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <SignedOut>
        <Navbar />
        <h1 className="text-3xl font-bold underline w-full text-center">You are not allowed</h1>
      </SignedOut>

      <SignedIn>
        <Navbar />
        <div className=" p-2 ml-10">
          <h1 className="text-3xl font-bold "> Dashboard</h1>
        </div>

        <div className="p-5">
        <DataTableDemo />
        </div>
        
      </SignedIn>
    </div>
  );
};

export default Home;
