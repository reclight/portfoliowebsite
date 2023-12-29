'use client';

import Image from 'next/image';
import Dimensions from 'next/'
import { 
    useScroll,
    motion,
    useTransform} from "framer-motion";
import { useInView } from 'react-intersection-observer';


export default function Landing() {
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
      });

    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 0.5], [-20, 900]);
    const y2 = useTransform(scrollYProgress, [0, 0.5], [0, 600]);



    return (<div className="relative min-h-[120vh] bg-orange-200 z-10 overflow-hidden">
        <div className="absolute top-64 left-[5%] md:left-[20%] z-10 ">
            <motion.div 
                ref={ref}
                style={{ x: 0, y: y1}}>
                <Image
                    src="/landing.gif"
                    alt="Landing Page"
                    className="border border-gray-950"
                    width={650}
                    height={500}
                    priority
                />
            </motion.div>
            </div>
            <div className="absolute top-1/3 left-1/2 w-1/3 z-20">
                <motion.div 
                    transition={{ duration: 1, ease: 'easeOut' }}
                    ref={ref}
                    style={{ x: 0, y: y2}}>
                    <div className="p-12 bg-white border border-gray-950">
                        <h1 className="text-5xl mb-3">
                            Hello 
                        </h1>
                        <p className="text-md">
                            My name is Ryan. I am a full stack developer.
                        </p>
                    </div>
                </motion.div>
            </div>
    </div>)
}