import Link from 'next/link';
import React from 'react'

interface InfoProps {
    title: string;
    url: string | null;
    subtitle: string | null;
    description: string;
    year: string;
}

const Info = ({ url, title, subtitle, description, year }: InfoProps) => {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <h3 className='text-lg font-semibold'>
                    {url ? (
                        <Link href={url} target='_blank'>{title}</Link>
                    ) : (
                        title
                    )}
                </h3>
                <div className='font-mono text-muted-foreground text-sm'>{year}</div>
            </div>
            <div className='font-mono mb-1'>{subtitle}</div>
            <div className='font-mono text-sm text-muted-foreground'>{description}</div>
        </div>
    )
}

export default Info