import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import ListJembatanUser from "@/components/listJembatanUser";

function page() {
  return (
    <>
      <div className="flex h-screen justify-center ">
        <div className=" h-full">
          <div className="h-[100px] flex justify-center items-center">
            <h1>selamat datang di dashboard </h1>
          </div>
          <div className="flex justify-end w-full">
            <div className="h-[50] ">
              <Link href="/user/pengajuan">
                <Button>Ajukan Jembatan Baru</Button>
              </Link>
            </div>
          </div>
          <div className="flex  items-center ">
            <div className="h-[600px] w-[800px] shadow-2xl pt-10 rounded-2xl">
              <div className="">
                <div className="m-4">
                  <ListJembatanUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
