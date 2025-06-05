/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { CheckCircle } from "lucide-react";
import { GridPattern } from "../components/grid-pattern";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Nav } from "../components/nav";
import { SEO } from "../components/seo";

import { Camera } from "lucide-react";

const projects = [
  {
    title: "RecuperarFotos.IA",
    description:
      "Reviva suas lembranças mais queridas com tecnologia de ponta em restauração de imagens. Recupere fotos antigas ou danificadas, elimine arranhões, manchas e imperfeições, realce as cores e os detalhes com qualidade profissional. Transforme suas memórias visuais em arquivos nítidos, vibrantes e prontos para serem compartilhados novamente.",
    icon: "/logo-recupera-foto-removebg-preview.png",
    link: "https://www.recuperarfotos.com.br/",
  },
];

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <SEO
        title="Portfólio de Eduardo Souza"
        description="Bem-vindo ao meu portfólio! Descubra meus projetos e habilidades em desenvolvimento web."
        url="https://portfolio2-mauve-six.vercel.app/portfolio"
      />
      <div className="min-h-screen bg-black text-white grid-pattern">
        <GridPattern />

        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="relative z-10">
            <Nav isActiveName={false} />

            <main className="container mx-auto px-8 py-12">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Profile Section - Left Side */}

                <motion.div className="lg:w-1/4" variants={itemVariants}>
                  <Card className="sticky top-8 bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src="/eduardo.png"
                          alt="Profile"
                          width={120}
                          height={120}
                          className="rounded-full mb-4"
                        />
                        <div className="flex items-center gap-2 mb-2">
                          <h2 className="text-xl font-semibold">
                            Eduardo Souza
                          </h2>
                          <CheckCircle className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-gray-400 mb-4">
                          Desenvolvedor Full Stack & Criador de Produtos
                          Digitais
                        </p>

                        <div className="flex gap-4 mt-4">
                          <Link
                            href="https://github.com/DevEduardoSouza"
                            className="text-gray-400 hover:text-white"
                            target="_blank"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/in/eduardo-souza-dev/"
                            target="_blank"
                            className="text-gray-400 hover:text-white"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Projects Grid - Right Side */}

                <motion.div className="lg:w-3/4" variants={itemVariants}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <Link
                        key={project.title}
                        href={project.link}
                        target="_blank"
                      >
                        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-[50px] h-[50px] rounded-lg overflow-hidden">
                              <img
                                src={project.icon}
                                alt={project.title}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">
                                {project.title}
                              </h3>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-400">
                              {project.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </>
  );
}
