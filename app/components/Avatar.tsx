'use client'
import React from "react";
import Image from "next/image";

const Avatar = () => {
    return (
        <div>
            <Image
                className={'rounded-full'}
                height={30}
                width={30}
                src={'/images/placeholder.jpg'}
                alt={'Avatar'}
            />
        </div>
    )
}

export default Avatar