"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export default function DeleteHandler({ jembatanId }: { jembatanId: string }) {
  const router = useRouter();
  console.log(jembatanId);
  async function HandleDelete() {
    try {
      const res = await fetch(`/api/jembatan/${jembatanId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Gagal menghapus data");
      }

      // Redirect atau refresh halaman setelah penghapusan berhasil
      router.refresh(); // Untuk merefresh halaman (Next.js 13+)
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menghapus data");
    }
  }

  return (
    <>
      <Button onClick={HandleDelete} variant="destructive">
        Hapus
      </Button>
    </>
  );
}
