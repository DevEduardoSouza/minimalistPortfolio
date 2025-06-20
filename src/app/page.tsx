"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { GridPattern } from "./components/grid-pattern";
import { Nav } from "./components/nav";
import { SEO } from "./components/seo";

const slogans = [
  "Projetos\nSaaS\nsob medida.",
  "Micro SaaS\nsimples e\nfuncionais.",
  "Soluções\nweb\nescaláveis.",
  "Sistemas\nfocados no\nresultado.",
];

const letterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Page() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 5000); // Change slogan every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Portfólio de Eduardo Souza"
        description="Bem-vindo ao meu portfólio! Descubra meus projetos e habilidades em desenvolvimento web."
        url="https://portfolio2-mauve-six.vercel.app/portfolio"
      />
      <div className="min-h-screen bg-black text-white grid-pattern">
        <GridPattern />
        <div className="relative z-10">
          <Nav isActiveName={true} />

          <main className="container mx-auto px-8 mt-20 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <motion.div
                className="space-y-4"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.h2
                  className="text-xl font-light text-gray-400"
                  variants={textVariants}
                >
                  Desenvolvedor Criador de SaaS e Micro SaaS
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-400"
                  variants={textVariants}
                >
                  Transformando ideias
                  <br />
                  em soluções digitais
                  <br />
                  escaláveis e inovadoras.
                </motion.p>
              </motion.div>

              <div className="lg:col-span-1 relative">
                <div className="text-center space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={currentSloganIndex}
                      className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {slogans[currentSloganIndex]
                        .split("\n")
                        .map((line, lineIndex) => (
                          <motion.span
                            key={lineIndex}
                            className="block"
                            variants={{
                              initial: { opacity: 0 },
                              animate: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 },
                              },
                              exit: {
                                opacity: 0,
                                transition: {
                                  staggerChildren: 0.05,
                                  staggerDirection: -1,
                                },
                              },
                            }}
                          >
                            {line.split("").map((letter, letterIndex) => (
                              <motion.span
                                key={letterIndex}
                                variants={letterVariants}
                                transition={{
                                  duration: 0.5,
                                }}
                              >
                                {letter}
                              </motion.span>
                            ))}
                          </motion.span>
                        ))}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                className="space-y-6"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.p className="text-gray-400" variants={textVariants}>
                  Especializado na criação de soluções web modernas e
                  escaláveis.
                </motion.p>
                <motion.p className="text-gray-400" variants={textVariants}>
                  Combinando <span className="text-white">tecnologia</span> e
                  <span className="text-white"> inovação</span> para
                  revolucionar o mercado de SaaS.
                </motion.p>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
