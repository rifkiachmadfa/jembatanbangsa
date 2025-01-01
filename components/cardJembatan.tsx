import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"

  import { Button } from "./ui/button"
  import Image from "next/image"

  import { Progress } from "./ui/progress"

  interface CardProps{
    namaJembatan : string,
    deskripsi : string,
    gambar : string,
    terkumpul : bigint,
    target : bigint,
    progress : number,
    id : string
  }

import Link from "next/link"

export default async function CardJembatan({namaJembatan, deskripsi, gambar, terkumpul, target, progress, id}: CardProps){

    return(
        <div >

        <Card className="w-[360px] h-[450px]">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
  <Image
    className="object-cover"
    src={`${gambar}`}
    alt="Jembatan"
    layout="fill" // Membuat gambar memenuhi pembungkus
  />
</div>


                <div className="m-4 mb-6">
            <CardTitle>{namaJembatan}

            </CardTitle>
                <CardDescription className="h-[60px]">
                    {deskripsi}
                </CardDescription>
                <CardContent>
                    <Progress className="mt-4" value={progress}/>
                    <div className="flex justify-between">
                        <p className="text-sm"> Rp {terkumpul}</p>
                        <p className="text-sm"> Rp {target}</p>
                    </div>
                </CardContent>
                </div>
                <div className="flex justify-end mr-4">
                <CardFooter>
                    <Link href={`/detail/jembatan/${id}`}>
                    <Button>selengkapnya</Button>
                    </Link>
                </CardFooter>
                </div>

    </Card>
        </div>
    )
}