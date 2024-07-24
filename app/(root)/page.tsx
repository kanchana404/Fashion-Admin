import { DataTableDemo } from "@/components/DataTableDemo";
import Navbar from "@/components/Navbar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <SignedOut>
        <Navbar />
        <h1 className="text-3xl font-bold underline w-full text-center">
          You are not allowed
        </h1>
      </SignedOut>

      <SignedIn>
        <Navbar />
        <div className=" p-2 ml-10">
          <h1 className="text-3xl font-bold "> Dashboard</h1>
        </div>
        <div className="flex space-x-44">
          <div className="w-64 p-2 ml-20 ">
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex ">
                  $ 1,000
                  <Image
                    src="/naya.png"
                    alt="naya"
                    width={75}
                    height={75}
                    className="ml-auto -mt-6"
                  />
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="w-64 p-2 ml-20 ">
            <Card>
              <CardHeader>
                <CardTitle>Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex ">
                <h2 className="font-bold text-xl">920</h2>
                  <Image
                    src="/rathunaya.png"
                    alt="naya"
                    width={75}
                    height={75}
                    className="ml-auto -mt-6"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-64 p-2 ml-20 ">
            <Card>
              <CardHeader>
                <CardTitle>Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex ">
                  $ 1,000
                  <Image
                    src="/kolanaya.png"
                    alt="naya"
                    width={75}
                    height={75}
                    className="ml-auto -mt-6"
                  />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="p-5">
          <DataTableDemo />
        </div>
      </SignedIn>
    </div>
  );
};

export default Home;
