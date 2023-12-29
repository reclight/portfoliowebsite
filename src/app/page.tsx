import Navbar from '@/components/Navbar';
import Landing from '@/app/landing';
import About from '@/app/about';
import Image from 'next/image';
import React, { useRef } from "react";
import Contact from './contact';
import Portfolio from './portfolio';

export default async function Home() {

  new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return (
    <main>
      <Navbar></Navbar>
      <Landing></Landing>
      <About></About>
      <Contact></Contact>
    </main>
  )
}
