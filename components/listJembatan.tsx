
import CardJembatan from "./cardJembatan";
import { db } from "@/lib/db";
export default async function ListJembatan(){
    
 const jembatan = await db.jembatan.findMany()
    
    return(
        <>
        <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {jembatan.map((data) => (
          <CardJembatan
            key={data.id}
            namaJembatan={data.judul}
            deskripsi={data.alamat}
            gambar={data.image}
            progress={data.progress}
            target={data.target}
            terkumpul={data.terkumpul}
            id ={data.id}
                      />
        ))}
      </div>
      </div>
        </>
    )
}