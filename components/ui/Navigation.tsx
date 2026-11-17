'use client'

import {motion, useScroll} from 'framer-motion'
import {useEffect, useState} from 'react'

const links = [
    {label: 'Work', href: '#projects'},
    {label: 'About', href: '#about'},
    {label: 'Contact', href: '#contact'},
]

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const {scrollY} = useScroll()

    useEffect(() => {
        return scrollY.on('change', (v) => setScrolled(v > 60))
    }, [scrollY])

    return (
        <motion.header
            className={`border-none fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-[18px] transition-all duration-500 ${
                scrolled
                    ? 'backdrop-blur-xl border-b border-border'
                    : 'bg-transparent'
            }`}
            style={scrolled ? {background: 'rgba(11,11,10,.85)'} : {}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.9, ease: 'easeOut'}}
        >
            {/* Logo */}
            <a
                href="#home"
                className="font-display font-extrabold text-xl tracking-tight text-primary leading-none"
            >
                YK<span className="text-accent">.</span>
            </a>

            {/* Nav links + CTA */}
            <nav aria-label="Main" className="flex items-center gap-2 md:gap-[22px]">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="hidden sm:inline-block font-mono text-[13px] tracking-[.04em] text-[#C9C4B8] hover:text-primary py-3 px-1 transition-colors duration-200"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="mailto:kesselyanniel@gmail.com"
                    className="font-mono text-[13px] tracking-[.04em] px-5 py-3 rounded-full transition-all duration-200 hover:brightness-110"
                    style={{background: '#ECEAE3', color: '#0b0b0a'}}
                >
                    Let’s talk
                </a>
            </nav>
        </motion.header>
    )
}
