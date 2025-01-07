import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // Pastikan path authOptions benar

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DeleteDialog from "./deleteDialog";

export default async function ListJembatanUser() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return (
      <p className="text-center">
        Silakan login untuk melihat data jembatan Anda.
      </p>
    );
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      jembatan: true,
    },
  });

  if (!user?.jembatan?.length) {
    return <p className="text-center">Anda belum memiliki data jembatan.</p>;
  }

  // const jembatanId = user.jembatan[0].id;

  // function deleteHandler() {
  //   console.log("trigger");
  // }

  return (
    <div className="flex justify-center ">
      <Table>
        <TableCaption>Daftar Jembatan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nama Jembatan</TableHead>
            <TableHead>Status Pengajuan</TableHead>
            <TableHead>Status Pembangunan</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.jembatan.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="">{data.judul}</TableCell>
              {data.published === false ? (
                <TableCell className="bg-text-red">Ditinjau</TableCell>
              ) : (
                <TableCell>Disetujui</TableCell>
              )}

              <TableCell>{data.status}</TableCell>

              <TableCell className=" ">
                <DeleteDialog dataId={data.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
