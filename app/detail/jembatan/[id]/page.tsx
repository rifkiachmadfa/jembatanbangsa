import { db } from '@/lib/db'
import React from 'react'

// Update the typing of 'params' to match the dynamic route structure
export default async function JembatanPage({ params }: { params: { id: string } }) {
    const jembatan = await db.jembatan.findUnique({
        where: {
            id: params.id, // Now 'params.id' will be correctly typed as 'string'
        },
    });

    return (
        <div>
            <h1>{jembatan?.judul}</h1>
        </div>
    );
}
