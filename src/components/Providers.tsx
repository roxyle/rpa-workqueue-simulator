'use client'
import {RobotProvider} from '@/context/RobotContext'
import {ReactNode} from 'react'


export default function Providers({children}:{children:ReactNode}){
    return <RobotProvider>{children}</RobotProvider>
}