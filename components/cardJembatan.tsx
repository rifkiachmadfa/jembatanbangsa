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
  }

export default function CardJembatan({namaJembatan, deskripsi, gambar, terkumpul, target}: CardProps){
    return(
        <div >

        <Card className="w-[360px] h-[480px]">
        <Image 
            className="bg-cover mb-4" height={120} width={360} alt="" src={`${gambar}`}/>
                <div className="m-4 mb-6">
            <CardTitle>{namaJembatan}

            </CardTitle>
                <CardDescription className="h-[60px]">
                    {deskripsi}
                </CardDescription>
                <CardContent>
                    <Progress className="mt-4" value={20}/>
                    <div className="flex justify-between">
                        <p className="text-sm"> Rp {terkumpul}.000.000</p>
                        <p className="text-sm"> Rp {target}.000.000</p>
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