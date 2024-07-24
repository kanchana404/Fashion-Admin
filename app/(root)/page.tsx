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
        <h1>Payment Data Table</h1>
        <DataTableDemo />
      </SignedIn>
    </div>
  );
};

export default Home;
