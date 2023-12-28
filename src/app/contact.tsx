'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
    useScroll,
    motion,
    useTransform} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  
    const [ref, inView, entry] = useInView({
      /* Optional options */
      threshold: 0.5,
      triggerOnce: false
    });

    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0.5, 1], [-300, 200]);
    const y2 = useTransform(scrollYProgress, [0.5, 1], [-300, 300]);
    return (
      <div className="relative min-h-screen bg-sky-200 z-30 overflow-hidden">
      <div className="absolute top-64 left-1/3 z-10 ">
          
          <motion.div 
                ref={ref}
                style={{ x: 0, y: y1}}>
            <Image
                src="/tea.gif"
                alt="tea"
                className=""
                width={200}
                height={400}
                priority
            />
          </motion.div>
        </div>
        <div className="absolute top-40 left-1/2 z-20">
          
          <motion.div 
                ref={ref}
                style={{ x: 0, y: y2}}>
            <div className="p-6 w-96">
              <h1 className="text-5xl mb-3">
                Contact
              </h1>
              <p>These are my social media links</p>
              <Link href="https://www.linkedin.com/in/ryanekacahaya/">
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-lg font-bold px-5 py-3 border-2 border-gray-950 my-2"
                >
                  Linkedin
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>)
}