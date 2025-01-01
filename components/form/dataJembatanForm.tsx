"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";

const enumJenisPengajuan = ["PEMBANGUNAN_TOTAL", "RENOVASI"] as const;

// Define Zod Schema with Transform
const FormSchema = z.object({
  namaJembatan: z.string().min(1, "Nama jembatan wajib diisi"),
  alamat: z.string().min(1, "Alamat wajib diisi"),
  deskripsi: z.string().min(1, "Deskripsi wajib diisi"),
  panjangBentangan: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Panjang bentangan harus berupa angka")
    .transform((val) => parseFloat(val)),
  jenisPengajuan: z.enum(enumJenisPengajuan),
  tahunPembuatan: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Tahun harus berupa angka bulat")
    .transform((val) => parseInt(val, 10)),
  penerimaManfaat: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Penerima manfaat harus berupa angka")
    .transform((val) => parseInt(val, 10)),
  panjangBibirJembatan: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Panjang bibir jembatan harus berupa angka")
    .transform((val) => parseFloat(val)),
  biayaPembangunan: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Biaya pembangunan harus berupa angka")
    .transform((val) => parseFloat(val)),
  gambarDepan: z.string().url("URL gambar tidak valid"),
  gambarBelakang: z.string().url("URL gambar tidak valid"),
  gambarSisiA: z.string().url("URL gambar tidak valid"),
  gambarSisiB: z.string().url("URL gambar tidak valid"),
  panjangPapanPijak: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), "Panjang papan pijak harus berupa angka")
    .transform((val) => (val ? parseFloat(val) : undefined)),
  lebarGapuraDalam: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), "Lebar gapura dalam harus berupa angka")
    .transform((val) => (val ? parseFloat(val) : undefined)),
  jenisBesiTiang: z.string().optional(),
  boxGapura: z.string().optional(),
  panjangBoxAnchorBelakang: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), "Panjang box anchor harus berupa angka")
    .transform((val) => (val ? parseFloat(val) : undefined)),
  tinggiGapura: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), "Tinggi gapura harus berupa angka")
    .transform((val) => (val ? parseFloat(val) : undefined)),
});

type FormValues = z.infer<typeof FormSchema>;

export default function DataJembatanForm() {
  const [jenisPengajuan, setJenisPengajuan] = useState<string>("PEMBANGUNAN_TOTAL");
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      namaJembatan: "",
      alamat: "",
      deskripsi: "",
      jenisPengajuan: "PEMBANGUNAN_TOTAL",
      tahunPembuatan: `${new Date().getFullYear()}`,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/dataJembatan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data berhasil disimpan:", result);
      } else {
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Form fields seperti pada kode Anda */}
        <FormField
          control={form.control}
          name="namaJembatan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Jembatan</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nama Jembatan" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Tambahkan semua field lain dari kode sebelumnya */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
