'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';


import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const FormSchema = z
  .object({
    judul: z.string().min(1, 'Judul is required').max(100),
    alamat: z.string().min(1, 'Email is required').max(100),
    content: z.string().min(1, 'Email is required'),
    image: z.string().min(1, 'Email is required'),

  });

function DataJembatan () {
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          judul: '',
          alamat: '',
          content: '',
          image: '',
        },
      });


      const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        console.log("Data dikirim:", values);
          const response = await fetch('/api/jembatan', {
              method: 'POST',
              headers : {
                  'content-type' : 'application/json'
              },
              body: JSON.stringify({
                  judul: values.judul,
                  alamat : values.alamat,
                  content : values.content,
                  image : values.image,
              })
          })
          
   
          if (!response.ok) {
    const errorData = await response.json();
    console.error("Error:", errorData);
    alert("Gagal mengirim data: " + errorData.message); // Optional: Tampilkan error
    return;
  }
  router.push("/user");
        }





  return (
    <div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
        <FormField
            control={form.control}
            name='judul'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Jembatan</FormLabel>
                <FormControl>
                  <Input placeholder='Isi dengan nama Jembatan' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
                    <FormField
            control={form.control}
            name='alamat'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Input placeholder='Kampung, Desa, Kecamatan, Kabupaten, Provinsi' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
                    <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Textarea placeholder='ceritakan kobdisi jembatan' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
                                <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Gambar</FormLabel>
                <FormControl>
                <Input placeholder='link gambar' {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            </div>
            <Button className='w-full mt-6' type='submit'>
          Ajukan
        </Button>
            </form>
        </Form>
    </div>
  )
}

export default DataJembatan