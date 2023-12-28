'use client';


import Image from 'next/image';
import { 
    useScroll,
    motion,
    useTransform} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
      });

    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0.1, 1], [-400, 1100]);
    const y2 = useTransform(scrollYProgress, [0.1, 1], [-600, 800]);

    return (<div className="relative 
    min-h-[120vh] bg-amber-200 z-30 overflow-hidden" id="about">
      <div className="absolute top-40 left-1/3 z-20">
        <motion.div 
                ref={ref}
                style={{ x: 0, y: y1}}>
          <div className="p-12 w-3/4 bg-white border border-gray-950 ">
            <h1 className="text-4xl mb-3">
              About
            </h1>
            <p className="text-sm">My name is Ryan, I am a full stack developer at Micron Technology.</p>
            
            <p className="text-sm">I enjoy creating stuff, by using illustrating and coding.</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-64 left-1/2 z-10 ">
        <motion.div 
            transition={{ duration: 1, ease: 'easeOut' }}
            ref={ref}
            style={{ x: 0, y: y2}}>
            <Image
                src="/avatar.png"
                alt="Landing Page"
                className=""
                width={400}
                height={300}
                priority
            />
        </motion.div>
      </div>
    </div>)
}