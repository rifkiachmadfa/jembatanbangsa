"use client"

import { db } from '@/lib/db';

import { useState, useEffect } from 'react';

interface PageProps {
    params: {
        id: string;
    }
}

interface Jembatan {
    id: string;
    judul: string;
    // Tambahkan properti lain yang sesuai dengan struktur data jembatan Anda
}

export default function JembatanPage({ params }: PageProps) {
 
    const [jembatan, setJembatan] = useState<Jembatan | null>(null);

    useEffect(() => {
        if (params.id) {
            const fetchJembatan = async () => {
                try {
                    const result = await db.jembatan.findUnique({
                        where: { id: params.id },
                    });
                    setJembatan(result as Jembatan);
                } catch (error) {
                    console.error("Error fetching jembatan:", error);
                }
            };

            fetchJembatan();
        }
    }, [params.id]);

    return (
        <div>
            <h1>{jembatan?.judul || "Jembatan not found"}</h1>
        </div>
    );
}
