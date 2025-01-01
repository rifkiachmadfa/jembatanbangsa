import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
        <h1>selamat datang di dashboard pengaju</h1>
        <h2>silahkan ajukan data jembatan</h2>
        <Link href='/user/pengajuan'>
        <Button>ajukan</Button>
        </Link>
    </div>
  )
}

export default page