import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectPager from "@/components/ProjectPager";

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
            body: "Soulection is a music collective and one of the first radio shows on Apple Music, launching in 2015. To celebrate 10 years of their Apple partnership, we were contracted to create radio.soulection.com, a listenable archive of over 700 Soulection episodes. ",
        },
        {
            heading: "Role",
            body: "I led product design and development, from prototypes through front-end and Supabase integration, working with Joe Kay and the Soulection team.",
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
                        <ProjectMedia
                            src="/soulection2.webp"
                            alt="Soulection hero collage"
                            caption="Soulection cover flow"
                        />
                        <h3 className="text-xl mt-16">The brief</h3>

                        <p>
                            Build an interactive experience where fans could
                            search and listen to Soulection's 700+ episode
                            archive, as well as an admin portal for the
                            Soulection team to add new episodes going forward.
                        </p>
                        <h3 className="text-xl mt-16">Research</h3>
                        <p>
                            We looked at a number of other internet radio
                            stations and conducted a handful of user interviews.
                            In our interviews, we asked people what they felt
                            was missing from existing internet radio sites. The
                            features that came up the most were
                        </p>

                        <ul>
                            <li>1. Tracklists with clickable timestamps</li>
                            <li>2. Searching by artist/track/DJ</li>
                            <li>3. Persistent audio player</li>
                        </ul>

                        <p>
                            We also looked at traffic analytics on Soulection’s
                            main site and found that over 85% of users were on
                            mobile.
                        </p>

                        <h3 className="text-xl mt-16">Process</h3>

                        <p>
                            We started by putting together a mobile-first
                            prototype in Figma. We iterated with the Soulection
                            team until we landed on a final site structure. The
                            site would have a home page that showed featured
                            episodes and trending tracks, a search component,
                            episode pages with track lists, and a persistent
                            media player connected to the Soundcloud API. On the
                            back end, we were to build a CMS so that the
                            Soulection team could add new shows, as well as a
                            database that would contain all the show
                            information.
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
                            For the final design, we extended Soulection’s
                            existing brand identity to create a minimal,
                            monochromatic layout that emphasized artists and
                            episode artwork.
                        </p>

                        <ProjectMedia src="/soulection_desktop.webp" />

                        <p>
                            In actually building the site, the first step was to
                            ‘backfill’ all episodes dating back to 2011. Instead
                            of having someone from Soulection manually upload
                            each episode (as was the original plan), I wrote a
                            script that scraped episode data from sites like
                            Soundcloud, Bandcamp, and Mixcloud and automatically
                            propagated them to our database.
                        </p>

                        <p>
                            In order to create a media player that would persist
                            across route changes, we made use of React Context
                            and the Soundcloud API. In other words, listeners
                            could freely explore the site while listening to an
                            episode without interruption.{" "}
                        </p>

                        <p>
                            The feature I’m most proud of is the deep search and
                            artist metadata pages. A problem I often have with
                            DJ sets is they sometimes obscure (sometimes
                            intentionally) the artists that actually made the
                            music in the set. The Soulection team and I were on
                            the same page in that the spotlight should be on the
                            artists themselves. To achieve this, Soulection
                            Radio automatically creates artist pages for every
                            artist featured in a show, where artists can see
                            which of their tracks have been played as well as
                            which episodes they’ve been featured in.{" "}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ProjectMedia
                                src="/Sango.webp"
                                alt="Sango's artist page"
                                caption="Sango's artist page"
                            />
                            <ProjectMedia
                                src="/Episode.webp"
                                alt="Episode"
                                caption="Episode page with audio player"
                            />
                        </div>

                        <h3 className="text-xl mt-16">Outcome</h3>

                        <p>
                            Soulection Radio saw close to 30,000 visits in its
                            first week, prior to even having been publicly
                            announced. The project was overall well received,
                            and was the first in a series of collaborations
                            between Finetooth and Soulection.
                        </p>
                    </section>
                    <ProjectPager currentSlug={project.slug} />
                </main>
            </article>
        </>
    );
}
