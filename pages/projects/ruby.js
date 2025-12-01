import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectPager from "@/components/ProjectPager";

const project = {
    name: "Ruby Red",
    description: "Musical artist project",
    tools: "Ableton Live, Adobe CC, Lightkey ...",
    year: "2023 –",
    slug: "/ruby",
    hero: "/slide.webp",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "“Ruby Red” is a collaborative artist project between myself and my childhood friend, Daniel Laner. ",
        },
        {
            heading: "Role",
            body: "I function as a co-writer and co-producer, as well as the 'creative director' of all things visual",
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
                        <p>
                            Having grown up together in a place as diverse as
                            Oakland, Daniel and I connected over a shared
                            appetite for a wide array of music and wanted to
                            explore whether there was anything we could add to
                            the mix––at first just for fun, but over time more
                            seriously. Since forming Ruby Red, we’ve been lucky
                            enough to tour around North America, accumulating
                            millions of streams in the process, and have been
                            featured in the likes of Billboard, Spotify’s Best
                            of Indie, the San Francisco Chronicle, SXSW, as well
                            as Elton John’s Apple Music Radio show.
                        </p>

                        <h2 className="md:text-6xl text-3xl my-8 text-pretty font-pretty text-balance">
                            I’ve always been interested in music not just as a
                            medium, but also as a vehicle (an excuse, really)
                            for more ambitious (read: not economically viable)
                            design projects.
                        </h2>

                        <p>
                            One example of this was the cover art for our 2025
                            EP, “SOLAR 9 FENDER”. Up until that point, all of
                            our artworks had been made digitally, and with the
                            influx of AI-generated cover art, I knew I wanted to
                            challenge myself to create something more hands-on.
                            I think I must’ve been feeling nostalgic for my
                            undergrad days (and nights) in the lab because I
                            eventually landed on petri dish art.
                        </p>

                        <p>
                            As we were wrapping up recording the songs, I
                            swabbed our (apparently very dirty) studio in order
                            to make what would become a palette. From there, I
                            used q tips to draw the Ruby Red logo (a two pointed
                            star) before transferring the dishes to a makeshift
                            fume hood in my closet that consisted of a
                            heater/fan, a camera, and a shoelace.
                        </p>

                        <ProjectMedia
                            src="/swab.png"
                            alt="Studio culture"
                            caption="Studio culture"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <p className="">
                                The result was something that was weird and
                                alive and maybe even a little gross… much like
                                the music itself!
                            </p>
                            <video
                                src="/fungal.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full rounded-sm"
                            />
                        </div>

                        <h3 className="text-xl mt-16">
                            Projects within projects
                        </h3>

                        <p>
                            As Ruby Red’s de facto creative director, I’ve had
                            the opportunity to explore a lot of different facets
                            of visual design that I wouldn’t have otherwise,
                            including designing flyers, making merch, directing
                            music videos, programming light shows, and
                            developing a custom font.
                        </p>

                        <ProjectMedia
                            src="/flyers.png"
                            alt="Selection of graphic design work over the years"
                            caption="Selection of graphic design work over the years"
                        />

                        <p>
                            When we needed a website to showcase our music, I
                            knew I wanted to do something creative and
                            evocative––an extension of the music itself––and
                            with 100,000 new songs uploaded to Spotify daily, I
                            knew we weren’t going to stand out with a
                            cookie-cutter, website-builder solution.
                        </p>

                        <p>
                            The idea with our music was to try and meet
                            listeners where they’re at, to invite them to engage
                            with the music not passively and behind a screen,
                            but actively and in their real life. To illustrate
                            this idea, I created a Three.js website that, by
                            kindly requesting permission to access your phone
                            camera and gyroscope, randomly placed our music
                            throughout a user’s actual environment in 3D space.
                            To navigate the site, you actually had to move and
                            rotate your phone, turning music discovery from
                            impersonal and algorithm-driven to something more
                            contextual and tactile.
                        </p>

                        <video
                            src="/rr_site_1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full rounded-sm"
                        />

                        <video
                            src="/rr_site_2.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full rounded-sm"
                        />

                        <p>
                            Projects like these have been critically important
                            for me both as a creative outlet and as an entry
                            point to design as a career; many clients I work
                            with now I met through work I've done as part of
                            Ruby Red.
                        </p>
                    </section>
                    <ProjectPager currentSlug={project.slug} />

                </main>
            </article>
        </>
    );
}
