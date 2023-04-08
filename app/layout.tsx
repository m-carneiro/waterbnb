import {Nunito} from "next/font/google";
import './globals.css'
import React, {ReactNode} from "react";
import NavBar from "./components/NavBar";

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
        <NavBar />
        {children}
        </body>
        </html>
    )
}
