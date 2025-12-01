import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";

const project = {
    name: "Soulection",
    description: "Internet radio station",
    tools: "Next.js, Typescript, Supabase, Soundcloud API",
    year: "2025",
    slug: "/soulection-10-years-of-apple-music",
    hero: "/soulection_cover.png",
    summary:
        "A live, participatory listening experience to celebrate Soulection's decade on Apple Music.",
    sections: [
        {
            heading: "Context",
            body: "Soulection is a DJ collective and radio show. To celebrate their 10 year anniversary with Apple Music, Soulection contracted Finetooth to build their first internet radio station and episode archive.",
        },
        {
            heading: "Role",
            body: "I led product design and development, from prototypes through front-end and Supabase integration, collaborating with Joe Kay and the Soulection team.",
        },
        {
            heading: "Collaborators",
            body: "Back-end engineer – Omar Abdul-Rahim; Device prototypes – Marko Jones ",
        },
    ],
};

export default function ProjectDetailPage() {
    return (
        <>
            <Head>
                <title>{project.name} · Project Detail</title>
                <meta
                    name="description"
                    content={`${project.name} – ${project.description}`}
                />
            </Head>

            <article className="min-h-screen bg-white text-slate-900">
                <header className="mx-auto l px-6 pb-12 pt-6 space-y-8">
                    <div className="grid grid-cols-2 sm:grid-cols-10 gap-4 sm:gap-6 items-baseline text-xs uppercase tracking-[0.08em] text-slate-500">
                        <div className="col-span-1 sm:col-span-2">Project</div>
                        <div className="col-span-1 sm:col-span-6">
                            Description
                        </div>
                        <div className="hidden sm:block sm:col-span-1">
                            Tools
                        </div>
                        <div className="hidden sm:block text-right">Year</div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-10 gap-4 sm:gap-6 items-start font-heading text-2xl sm:text-3xl">
                        <div className="col-span-1 sm:col-span-2">
                            {project.name}
                        </div>
                        <div className="col-span-1 sm:col-span-6">
                            {project.description}
                        </div>
                        <div className="hidden sm:block sm:col-span-1 text-base text-slate-700">
                            {project.tools}
                        </div>
                        <div className="hidden sm:block text-right text-base">
                            {project.year}
                        </div>
                    </div>
                    <div className="space-y-4 w-full">
                        <ProjectMedia
                            src={project.hero}
                            alt={project.name}
                            // caption="Hero capture from the social calculator feed."
                            priority
                        />
                    </div>
                </header>

                <main className="mx-auto max-w-4xl px-6 pb-24 space-y-12">
                    {project.sections.map((section) => (
                        <section
                            key={section.heading}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
                        >
                            <h2 className="font-heading text-xl md:text-2xl md:col-span-3">
                                {section.heading}
                            </h2>
                            <p className="leading-relaxed md:col-span-9">
                                {section.body}
                            </p>
                        </section>
                    ))}

                    <section className="space-y-6">
                        <ProjectMedia
                            src="/soulection2.webp"
                            alt="Soulection hero collage"
                            caption="Soulection cover flow"
                        />

                        <h3 className="text-xl mt-16">The brief</h3>

                        <p>
                            Build a browser-first experience where fans could
                            search and listen to Soulection's 700+ episode
                            archive, as well as an admin portal for the
                            Soulection team to add new episodes going forward.
                        </p>

                        <h3 className="text-xl mt-16">Process</h3>

                        <p>
                            I prototyped a split layout: a left column dedicated
                            to the live show (countdown, play state, program
                            notes) and a right column showcasing rotating fan
                            posters and community stats. The design leaned on
                            Soulection’s monochrome palette so the artwork could
                            shine.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ProjectMedia
                                src="/wireframes.webp"
                                alt="Initial layout sketches"
                                caption="Early wireframes"
                            />
                            <ProjectMedia
                                src="/prototype.webp"
                                alt="Moodboard"
                                caption="Early prototype"
                            />
                        </div>

                        <p>
                            On the engineering side I built the page in Next.js
                            with server components for metadata and a client
                            layer that handled the live states. Supabase tracked
                            concurrent listeners and enabled a simple shout-out
                            wall without requiring authentication. SoundCloud’s
                            player served as a fallback if the Apple Music embed
                            was blocked.
                        </p>

                        <h3 className="text-xl mt-16">Live experience</h3>

                        <p>
                            During the broadcast the site switched into “on air”
                            mode: the hero transformed into a Now Playing
                            module, the background motion referenced the radio
                            waveform, and new posters surfaced every few
                            seconds. Lightweight polling kept fan stats fresh
                            without blowing up bandwidth on mobile.
                        </p>

                        <video
                            src="/soulection.mp4"
                            controls
                            className="w-full rounded-sm"
                        />

                        <h3 className="text-xl mt-16">Outcomes</h3>
                        <p>
                            The experience handled the launch-day spike without
                            hiccups, and the Soulection team kept the page live
                            as a permanent home for community artwork and show
                            recaps. The patterns we established are being reused
                            for future seasonal drops.
                        </p>
                    </section>
                </main>
            </article>
        </>
    );
}
