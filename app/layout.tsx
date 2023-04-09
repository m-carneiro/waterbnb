import {Nunito} from "next/font/google";
import './globals.css'
import React, {ReactNode} from "react";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import NavBar from "./components/navbar/NavBar";

export const metadata = {
    title: 'Waterbnb',
    description: 'Airbnb but it`s water',
}

const font = Nunito({
    subsets: ['latin'],
})

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <ClientOnly>
            <Modal isOpen />
            <NavBar/>
        </ClientOnly>
        {children}
        </body>
        </html>
    )
}
