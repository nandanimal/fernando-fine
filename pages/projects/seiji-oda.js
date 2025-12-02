import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectPager from "@/components/ProjectPager";

const project = {
    name: "Seiji Oda",
    description: "ML vision explorations",
    tools: "Python, JS, Max For Live, MediaPipe, Mido",
    year: "2024",
    slug: "/seiji-oda",
    hero: "/seiji_cover.gif",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "I worked with artist Seiji Oda to create a tool that allowed him to create real time, generative audio to accompnay his Tai Chi flows",
        },
        {
            heading: "Role",
            body: "I was the sole developer on this project and collaborated with Seiji on sound design",
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
                <meta property="og:image" content={project.hero} />
            </Head>

            <article className="min-h-screen text-slate-900 mt-16">
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
                        <h3 className="text-xl mt-16">Inspiration</h3>
                        <div className="flex sm:flex-row  flex-col-reverse gap-2">
                            <div className="mt-4 sm:mt-0">
                                <p>
                                    The inspiration for this project originally
                                    came from a 17-year-old YouTube video titled
                                    'Daft Hands'. In it, someone twists and
                                    flips their hands to reveal lyrics
                                    synchronized to Daft Punk's "Harder, Better,
                                    Faster, Stronger." I wondered if there was a
                                    way to create an interactive version of this
                                    video, where a user could simply mimic the
                                    hand shapes and trigger the respective
                                    lyric.
                                </p>
                                <p className="mt-4">
                                    I started looking into how this could be
                                    accomplished, and came across the MediaPipe
                                    library. Using pose landmark detection on a
                                    live feed from my web cam, I was able to to
                                    build a rough prototype:
                                </p>
                            </div>
                            <img
                                src="/daft_hands.png"
                                alt="Daft hands"
                                className="w-full sm:w-1/3 object-cover"
                            />
                        </div>

                        <video
                            src="/demo_trimmed.webm"
                            controls
                            className="w-full rounded-sm"
                        />

                        <p>
                            As music is increasingly ‘happening’ online, I saw
                            an opportunity to build something for artists that
                            would help them to connect with listeners in real
                            time and in real life. By adding a new, embodied
                            dimension to live performance, we could ‘reclaim’
                            the visceral feeling of music that sometimes gets
                            lost behind a screen.
                        </p>

                        <p>
                            In brainstorming how to go about this, I sort of
                            stumbled across Tai Chi as a good use case for pose
                            detection, as the movements are slow and unique and
                            therefore easily picked up by computer vision. I
                            just so happened to see Seiji Oda share a post of
                            his Tai Chi routines, and I reached out to him to
                            collaborate.
                        </p>

                        <h2 className="md:text-6xl text-3xl my-8 text-pretty font-pretty text-balance">
                            The idea, then, was to create a system that would
                            generate/modulate sound in response to Seiji’s
                            movements.
                        </h2>

                        <h3 className="text-xl mt-16">Process</h3>

                        <p>
                            I built the original ‘Daft Hands’ prototype in
                            Javascript (my most familiar language), but for this
                            next iteration I wanted to challenge myself to use
                            Python (both as a challenge and because I had found
                            some Python-specific libraries that might be
                            helpful).
                        </p>

                        <p>
                            Using a library called Mido, I was able to send
                            signal from a video feed into Ableton’s Max For
                            Live. From there, I mapped each pose landmark (in
                            this case, head, shoulders, knees, etc) to a
                            different granular synth in Ableton, experimenting
                            with automating parameters like filter cutoff,
                            reverb size, and track panning.
                        </p>

                        <ProjectMedia
                            src="/seiji-demo.png"
                            alt="Early prototype"
                            caption="Early prototype. On the left is a video of a Tai Chi flow with pose landmarks overlaid; on the right is an Ableton session window"
                        />

                        <p>
                            With videos that Seiji had sent me, I designed an
                            Ableton session that could be configured to
                            different ambiances/styles, before ultimately
                            meeting with Seiji to film our first live
                            performance. You can watch/listen to the result
                            below:
                        </p>

                        <h3 className="text-xl mt-16">Result</h3>
                        <video src="/p_vid_1_v3.webm" controls />
                    </section>
                    <ProjectPager currentSlug={project.slug} />
                </main>
            </article>
        </>
    );
}
