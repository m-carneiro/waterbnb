'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter()
    return (
        <div className={'flex flex-row items-center gap-2'}>
            <Image
                className={'hidden md:block cursor-pointer'}
                src={'/images/waterbnbs.png'}
                width={100}
                height={100}
                alt={'logo'}
            />
        </div>
    )
}

export default Logo