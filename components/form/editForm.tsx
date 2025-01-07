"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import ReactDropzone from "../ui/reactDropZone";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
interface data {
  namaJembatan: string;
  alamat: string;
  penerimaManfaat: number;
  panjangBentangan: number;
  panjangBibir: number;
  jembatanId: string;
  panjangPapanPijak: number;
  lebarGapuraAs: number;
  lebarGapuraDalam: number;
  jenisPembangunan: string;
  gambar: string;
  tahunPembuatan: number;
  deskripsi: string;
  panjangGapuraAnchorBelakang: number;
  boxGapura: number;
  jenisBesiTiang: string;
  tinggiGapura: number;
  panjangBoxAnchorBelakang: number;
}

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  namaJembatan: z.string().min(1, "tolong isi Judul").max(23),
  alamat: z.string().min(1, "tolong isi alamat ").max(120),
  deskripsi: z.string().min(1, "tolong isi deskripsi"),
  gambar: z.string().min(1, "tolong isi gambar"),
  penerimaManfaat: z.number().positive().min(1, "dalam jumlah jiwa"),
  panjangBentangan: z.number().positive().min(1, "dalam jumlah meter"),
  panjangBibir: z.number().positive().min(1, "dalam jumlah meter"),
  jenisPembangunan: z.string().optional(),
  panjangPapanPijak: z.number().optional(),
  lebarGapuraDalam: z.number().optional(),
  tahunPembuatan: z.number().optional(),
  panjangGapuraAnchorBelakang: z.number().optional(),
  lebarGapuraAs: z.number().optional(),
  panjangBoxAnchorBelakang: z.number().optional(),
  boxGapura: z.number().optional(),
  tinggiGapura: z.number().optional(),
  jenisBesiTiang: z.string().optional(),
});

export default function EditForm(props: data) {
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch(`/api/jembatan/${props.jembatanId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        judul: values.namaJembatan,
        alamat: values.alamat,
        content: values.deskripsi,
        image: values.gambar,
        penerimaManfaat: values.penerimaManfaat,
        panjangBentangan: values.panjangBentangan,
        panjangBibir: values.panjangBibir,
        jenisPembangunan: values.jenisPembangunan,
        panjangPapanPijak: values.panjangPapanPijak,
        lebarGapuraDalam: values.lebarGapuraDalam,
        tahunPembuatan: values.tahunPembuatan,
        panjangGapuraAnchorBelakang: values.panjangGapuraAnchorBelakang,
        lebarGapuraAs: values.lebarGapuraAs,
        boxGapura: values.boxGapura,
        panjangBoxAnchorBelakang: values.panjangBoxAnchorBelakang,
        tinggiGapura: values.tinggiGapura,
        jenisBesiTiang: values.jenisBesiTiang,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
      alert("Gagal mengirim data: " + errorData.message); // Optional: Tampilkan error
      return;
    }
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      namaJembatan: props.namaJembatan,
      alamat: props.alamat,
      deskripsi: props.deskripsi,
      gambar: props.gambar,
      jenisPembangunan: props.jenisPembangunan,
      panjangBentangan: props.panjangBentangan,
      panjangBibir: props.panjangBibir,
      panjangPapanPijak: props.panjangPapanPijak,
      penerimaManfaat: props.penerimaManfaat,
      lebarGapuraDalam: props.lebarGapuraDalam,
      lebarGapuraAs: props.lebarGapuraAs,
      tahunPembuatan: props.tahunPembuatan,
      panjangGapuraAnchorBelakang: props.panjangGapuraAnchorBelakang,
      boxGapura: props.boxGapura,
      panjangBoxAnchorBelakang: props.panjangBoxAnchorBelakang,
      tinggiGapura: props.tinggiGapura,
      jenisBesiTiang: props.jenisBesiTiang,
    },
  });

  function handleCancel() {
    redirect("/user");
  }

  const [pilihan, setPilihan] = useState<string>(
    props.jenisPembangunan || "fullPembangunan"
  );

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="namaJembatan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Jembatan</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alamat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Jembatan</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
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
                    placeholder="shadcn"
                    {...field}
                    type="number"
                    value={field.value || 0}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? parseInt(e.target.value, 10) : 0
                      )
                    }
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="panjangBentangan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panjang Bentangan (m)</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="panjangBibir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panjang Bibir Sungai (m)</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deskripsi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi Kondisi Jembatan</FormLabel>
                <FormControl>
                  <Textarea placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jenisPembangunan"
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
              <FormField
                control={form.control}
                name="panjangGapuraAnchorBelakang"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>panjang Gapura Anchor Belakang</FormLabel>
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
              <FormField
                control={form.control}
                name="boxGapura"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>panjang Gapura Anchor Belakang</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Box Gapura"
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
                name="panjangGapuraAnchorBelakang"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lebar Gapura As</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Lebar Gapura As"
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
                name="panjangBoxAnchorBelakang"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>panjang Box Anchor Belakang</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Panjang Box Anchor"
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
                name="tinggiGapura"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tinggi Gapura</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder=""
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
                name="jenisBesiTiang"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Besi Tiang</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=""
                        value={field.value || ""} // Fallback to 0 for numbers
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
            name="gambar"
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
          <div className="flex justify-end gap-2">
            <Button onClick={handleCancel} variant="outline" className=" mt-6">
              batal
            </Button>
            <Button
              onClick={() => {
                redirect("/user");
              }}
              className="mt-6 w-[1/2]"
              type="submit"
            >
              Ajukan
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
