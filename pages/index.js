"use client";
import Head from "next/head";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
    const pageRef = useRef(null);
    const [viewMode, setViewMode] = useState("gallery");
    const [hoveredId, setHoveredId] = useState(null);
    const { scrollYProgress } = useScroll();
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.35, 0.5],
        ["blur(0px)", "blur(6px)", "blur(16px)"]
    );

    return (
        <>
            <Head>
                <title>Fernando Fine</title>
                <meta
                    name="description"
                    content="Fernando Fine Grad Application Website"
                />
                <meta property="og:image" content="/og-image.png" />
            </Head>
            <div ref={pageRef}>
                {/* BLUR THIS */}
                <motion.div
                    className="blurb-container min-h-screen w-full fixed top-0 -z-10 flex items-center justify-center"
                    style={{ filter: blurValue }}
                >
                    <div className="blurb-itself grid grid-rows-2 gap-8 max-w-3xl mx-auto">
                        {/* Top row */}
                        <div className="row grid-cols-2 grid gap-16">
                            <div className="img-container flex justify-end items-end row-span-1">
                                <img
                                    src="/fern.png"
                                    alt="fernando fine"
                                    className="max-w-[72px] rounded-sm"
                                />
                            </div>
                            <div className="spacer row-span-1"></div>
                        </div>
                        {/* Bottom row */}
                        <div className="row grid grid-cols-2 gap-16">
                            <div className="name font-heading text-2xl row-span-1 flex justify-end">
                                Fernando Fine
                            </div>
                            <div className="name  text-2xl flex flex-col gap-4">
                                <div className="font-heading">
                                    Cross-disciplinary design engineer with a
                                    passion for emerging technologies.
                                </div>
                                <p className="font-body text-base">
                                    <Link
                                        href="/about"
                                        target="_blank"
                                        className="text-blue-500"
                                    >
                                        More about me →
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* scroll prompt */}
                    <motion.div
                        className="absolute bottom-8"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="font-heading text-3xl">
                            Scroll to discover projects
                        </div>
                    </motion.div>
                </motion.div>

                {/* Grid view background */}
                <AnimatePresence>
                    {viewMode === "gallery" && hoveredId && (
                        <motion.div
                            key={hoveredId}
                            className="w-full h-screen fixed z-0 top-0 pointer-events-none text-6xl xl:text-8xl font-heading flex flex-col gap-4 justify-between p-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {(() => {
                                const project = projects.find(
                                    (p) => p.id === hoveredId
                                );
                                if (!project) return null;
                                return (
                                    <>
                                        <div className="flex flex-row justify-between mt-8">
                                            <div>{project.name}</div>
                                            <div>{project.id}</div>
                                        </div>
                                        <div className="">
                                            {project.description}
                                        </div>
                                        <div className="">{project.tools}</div>
                                        <div className="self-end">
                                            {project.year}
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* PROJECTS */}
                <div className="projects-container relative mt-[100svh] min-h-screen w-full z-10 px-6 py-16 space-y-8">
                    {/* TOGGLE */}
                    <div className="flex items-center flex items-end w-full gap-8 font-heading md:text-3xl">
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
                            // LIST VIEW
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
                                        const isHovered =
                                            hoveredId === project.id;
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
                                                        opacity: dimmed
                                                            ? 0.2
                                                            : 1,
                                                    }}
                                                    animate={{
                                                        scale: isHovered
                                                            ? 1.01
                                                            : 1,
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
            </div>
        </>
    );
}
