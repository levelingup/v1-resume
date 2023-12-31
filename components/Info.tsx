import React from 'react'

interface InfoProps {
    title: string;
    subtitle: string | null;
    description: string;
    year: string;
}

const Info = ({ title, subtitle, description, year }: InfoProps) => {
    return (
        <div>
            <div className="flex justify-between">
                <h3>{title}</h3>
                <div>{year}</div>
            </div>
            <div>{subtitle}</div>
            <div>{description}</div>
        </div>
    )
}

export default Info