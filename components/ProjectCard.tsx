import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge';
import Link from 'next/link';

interface ProjectCardProps {
    url?: string;
    title: string;
    description: string;
    skills: SkillProp[];
}

interface SkillProp {
    name: string;
}

const ProjectCard = ({ url, title, description, skills }: ProjectCardProps) => {
    return (
        <>
            {url && (
                <Card className='hover:bg-slate-50 hover:shadow-md'>
                    <Link href={url} target='_blank' className='hover:no-underline'>
                        <CardHeader className='pb-2'>
                            <CardTitle className='text-base font-mono'>
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='pb-2'>
                            <div className='text-sm font-mono text-muted-foreground'>{description}</div>
                        </CardContent>
                        <CardFooter>
                            <div className='flex gap-2'>
                                {skills.map((skill, i) => (
                                    <Badge key={i} variant={'secondary'}>{skill.name}</Badge>
                                ))}
                            </div>
                        </CardFooter>
                    </Link >
                </Card>
            )}
        </>
    )
}

export default ProjectCard