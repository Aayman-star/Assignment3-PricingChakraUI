// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
'use client'
import React from 'react'
import Header from './components/Header'
import Pricing from './components/Pricing'
import { Features } from './components/Features'

export default function Home() {
  return (
    <div>
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}
