import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Button } from "./ui/button";
import Image from "next/image";

import { Progress } from "./ui/progress";

interface CardProps {
  namaJembatan: string;
  deskripsi: string;
  gambar: string;
  terkumpul: number;
  target: number;
  user: string;
  link: string;
}

import Link from "next/link";

export default async function CardJembatan({
  namaJembatan,
  deskripsi,
  gambar,
  terkumpul,
  target,
  user,
  link,
}: CardProps) {
  const nilai = (terkumpul * 100) / target;
  return (
    <div>
      <Card className="w-[360px] h-[500px] rounded ">
        <div className="h-[240]">
          <Image
            src={`${gambar}`}
            alt="Jembatan"
            width={0}
            height={0}
            className="w-full h-full"
          />
        </div>

        <div className="m-4 mb-6">
          <CardTitle>{namaJembatan}</CardTitle>
          <CardDescription className="h-[60px]">{deskripsi}</CardDescription>
          <CardContent>
            <Progress className="mt-4" value={nilai} />
            <div className="flex justify-between">
              <p className="text-sm"> Rp {terkumpul}</p>
              <p className="text-sm"> Rp {target}</p>
            </div>
          </CardContent>
        </div>

        <CardFooter>
          <div className="flex justify-between w-full  mx-2">
            <div className="w-[100px]">
              <p className="text-sm">diajukan oleh {user}</p>
            </div>
            <div>
              <Link href={`/detail/jembatan/${link}`}>
                <Button>selengkapnya</Button>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
