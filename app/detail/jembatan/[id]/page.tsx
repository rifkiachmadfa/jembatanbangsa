import { db } from '@/lib/db';
import React from 'react';

interface PageProps {
    params: {
        id: string;
    };
}

const JembatanPage: React.FC<PageProps> = async ({ params }) => {
    const jembatan = await db.jembatan.findUnique({
        where: {
            id: params.id,
        },
    });

    return (
        <div>
            <h1>{jembatan?.judul || "Jembatan not found"}</h1>
        </div>
    );
};

export default JembatanPage;
