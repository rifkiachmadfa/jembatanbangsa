"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactDropzone from "../ui/reactDropZone";

const FormSchema = z.object({
  judul: z.string().min(1, "tolong isi Judul").max(23),
  alamat: z.string().min(1, "tolong isi alamat ").max(120),
  content: z.string().min(1, "tolong isi deskripsi"),
  image: z.string().min(1, "tolong isi gambar"),
  penerimaManfaat: z.number().positive().min(1, "dalam jumlah jiwa"),
  panjangBentangan: z.number().positive().min(1, "dalam jumlah meter"),
  panjangBibir: z.number().positive().min(1, "dalam jumlah meter"),
  JenisPembangunan: z.string().optional(),
  panjangPapanPijak: z.number().positive().optional(),
  lebarGapuraDalam: z.number().positive().optional(),
  tahunPembuatan: z.number().optional(),
});

function DataJembatan() {
  const [pilihan, setPilihan] = useState<string>("fullPembangunan");
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/jembatan", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        judul: values.judul,
        alamat: values.alamat,
        content: values.content,
        image: values.image,
        penerimaManfaat: values.penerimaManfaat,
        panjangBentangan: values.panjangBentangan,
        panjangBibir: values.panjangBibir,
        JenisPembangunan: values.JenisPembangunan,
        panjangPapanPijak: values.panjangPapanPijak,
        lebarGapuraDalam: values.lebarGapuraDalam,
        tahunPembuatan: values.tahunPembuatan,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
      alert("Gagal mengirim data: " + errorData.message); // Optional: Tampilkan error
      return;
    }
    router.push("/user");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="judul"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Jembatan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Isi dengan nama Jembatan"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alamat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Kampung, Desa, Kecamatan, Kabupaten, Provinsi"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="penerimaManfaat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah Penerima Manfaat</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1250"
                    {...field}
                    min={0}
                    value={field.value || 0} // Fallback to 0 for numbers
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseInt(e.target.value, 10) : 0
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="panjangBentangan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panjang Bentangan (M)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="dalam satuan meter"
                    {...field}
                    value={field.value || 0} // Fallback to 0 for numbers
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseInt(e.target.value, 10) : 0
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="panjangBibir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panjang Bibir (M)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="dalam satuan meter"
                    {...field}
                    value={field.value || 0} // Fallback to 0 for numbers
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseInt(e.target.value, 10) : 0
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>deskripsi jembatan</FormLabel>
                <FormControl>
                  <Textarea placeholder="dalam satuan meter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="JenisPembangunan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Pembangunan</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setPilihan(value);
                    }}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Jenis Pengajuan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullPembangunan">
                        Full Pembangunan
                      </SelectItem>
                      <SelectItem value="renovasi">Renovasi</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {pilihan === "renovasi" && (
            <>
              <FormField
                control={form.control}
                name="tahunPembuatan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tahun Pembuatan</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || 0} // Fallback to 0 for numbers
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? parseInt(e.target.value, 10) : 0
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="panjangPapanPijak"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Panjang Papan Pijak</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Panjang Papan Pijak"
                        value={field.value || 0} // Fallback to 0 for numbers
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? parseInt(e.target.value, 10) : 0
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lebarGapuraDalam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lebar Gapura Dalam</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Lebar Gapura Dalam"
                        value={field.value || 0} // Fallback to 0 for numbers
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? parseInt(e.target.value, 10) : 0
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <ReactDropzone field={{ ...field }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" className=" mt-6">
            batal
          </Button>
          <Button className="mt-6 w-[1/2]" type="submit">
            Ajukan
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default DataJembatan;
