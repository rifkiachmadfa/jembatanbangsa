import DataJembatan from "@/components/form/dataJembatan";

const page = async () => {
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <div className="w-[1200px] rounded-lg border-2">
          <h1 className="flex justify-center text-2xl mt-14 ">
            FORM PENGAJUAN JEMBATAN
          </h1>
          <div className="flex justify-center ">
            <div className="w-[1200px] m-20">
              <DataJembatan />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
