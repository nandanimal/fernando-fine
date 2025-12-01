"use client";

import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const [viewMode, setViewMode] = useState("gallery");
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <Head>
                <title>Projects · Fernando Fine</title>
                <meta
                    name="description"
                    content="Selected projects by Fernando Fine"
                />
                <meta property="og:image" content="/og-image.png" />
            </Head>

            <div className="projects-container relative min-h-screen w-full z-10 px-6 py-16 space-y-8 pt-28">
                <div className="flex items-center w-full gap-8 font-heading md:text-3xl">
                    <button
                        className={`rounded-sm  cursor-pointer hover:opacity-80 transition ${
                            viewMode === "gallery"
                                ? "text-black"
                                : "text-black/40"
                        }`}
                        onClick={() => setViewMode("gallery")}
                    >
                        Gallery view
                    </button>
                    <button
                        className={`rounded-sm   cursor-pointer hover:opacity-80 transition ${
                            viewMode === "list"
                                ? "text-black"
                                : "text-black/40"
                        }`}
                        onClick={() => setViewMode("list")}
                    >
                        List view
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {viewMode === "gallery" ? (
                        <motion.div
                            key="gallery"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {projects.map((project) => {
                                const isHovered = hoveredId === project.id;
                                const dimmed = hoveredId && !isHovered;
                                return (
                                    <Link
                                        href={project.slug}
                                        key={project.id}
                                    >
                                        <motion.article
                                            className="group relative overflow-hidden rounded-sm bg-white/80 backdrop-blur"
                                            onMouseEnter={() =>
                                                setHoveredId(project.id)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredId(null)
                                            }
                                            style={{
                                                opacity: dimmed ? 0.2 : 1,
                                            }}
                                            animate={{
                                                scale: isHovered ? 1.02 : 1,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 22,
                                            }}
                                        >
                                            <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                                                {project.cover ? (
                                                    <img
                                                        src={project.cover}
                                                        alt={project.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-full w-full bg-slate-200" />
                                                )}
                                                <AnimatePresence>
                                                    {project.vidPreview &&
                                                        isHovered && (
                                                            <motion.video
                                                                key={`${project.id}-video`}
                                                                src={
                                                                    project.vidPreview
                                                                }
                                                                autoPlay
                                                                muted
                                                                loop
                                                                playsInline
                                                                preload="metadata"
                                                                className="absolute inset-0 h-full w-full object-cover"
                                                                initial={{
                                                                    opacity: 0,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                }}
                                                                transition={{
                                                                    duration: 0.25,
                                                                }}
                                                            />
                                                        )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.article>
                                    </Link>
                                );
                            })}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4 w-full"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-10 w-full gap-4 sm:gap-6 items-baseline text-[10px] md:text-sm font-body px-1">
                                <div className="col-span-1 sm:col-span-3">
                                    Project
                                </div>
                                <div className="col-span-1 sm:col-span-4">
                                    Description
                                </div>
                                <div className="hidden sm:block sm:col-span-2">
                                    Tools used
                                </div>
                                <div className="hidden sm:block text-right">
                                    Year
                                </div>
                            </div>
                            <div className=" ">
                                {projects.map((project) => {
                                    const isHovered = hoveredId === project.id;
                                    const dimmed = hoveredId && !isHovered;
                                    return (
                                        <Link
                                            href={project.slug}
                                            key={project.id}
                                        >
                                            <motion.div
                                                className="grid grid-cols-2 sm:grid-cols-10 w-full items-start gap-4 sm:gap-6 py-5 font-heading text-sm md:text-3xl text-slate-900"
                                                onMouseEnter={() =>
                                                    setHoveredId(project.id)
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredId(null)
                                                }
                                                style={{
                                                    opacity: dimmed ? 0.2 : 1,
                                                }}
                                                animate={{
                                                    scale: isHovered ? 1.01 : 1,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 22,
                                                }}
                                            >
                                                <div className="min-w-0 text-xl md:text-3xl col-span-1 sm:col-span-3">
                                                    {project.name}
                                                </div>
                                                <div className="min-w-0 col-span-1 sm:col-span-4">
                                                    {project.description}
                                                </div>
                                                <div className="hidden sm:block min-w-0 sm:col-span-2 text-xs md:text-lg">
                                                    {project.tools}
                                                </div>
                                                <div className="hidden sm:block whitespace-nowrap text-xs md:text-lg text-right">
                                                    {project.year}
                                                </div>
                                            </motion.div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
