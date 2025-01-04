import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import ListJembatanUser from '@/components/listJembatanUser'
function page() {
  return (
    <div>
        <h1>selamat datang di dashboard pengaju</h1>
        <h2>silahkan ajukan data jembatan</h2>
        <Link href='/user/pengajuan'>
        <Button>ajukan</Button>
        </Link>
    <ListJembatanUser/>
    </div>
  )
}

export default page