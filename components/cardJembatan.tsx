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
    terkumpul : number,
    target : number,
    progress : number,
  }

export default function CardJembatan({namaJembatan, deskripsi, gambar, terkumpul, target, progress}: CardProps){
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
                    <Button>selengkapnya</Button>
                </CardFooter>
                </div>

    </Card>
        </div>
    )
}