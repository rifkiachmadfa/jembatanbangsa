"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import DeleteHandler from "./deleteJembatanAction";

export default function DeleteDialog({ dataId }: { dataId: string }) {
  const id = String(dataId);
  return (
    <div className="gap-2 flex">
      <Link href={`/user/jembatan/${id}/edit`}>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="destructive">
            Hapus
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Hapus Data Jembatan</DialogTitle>
            <DialogDescription>
              Apakah anda yakin ingin menghapus data jembatan ini?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogTrigger asChild>
              <Button variant="secondary">Batal</Button>
            </DialogTrigger>
            <DeleteHandler jembatanId={dataId} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
