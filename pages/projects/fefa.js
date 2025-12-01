import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";

const project = {
    name: "Front End For All",
    description: "Aspiring Web Developer Community",
    tools: "HTML/CSS, JS",
    year: "2020",
    slug: "/fefa",
    hero: "/fefa_cover.png",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "Front End For All (FEFA) was a community of aspiring web developers (like myself) seeking to add purpose to their portfolios while helping real organizations / nonprofits in the process.",
        },
        {
            heading: "Role",
            body: "I founded FEFA around 2020; I contributed as a designer and developer alongside Jason Chiang and John Chou.",
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
                        <p>
                            FEFA started as a way for people looking to get into
                            web design and development to learn by doing, and to
                            hopefully make an impact from the outset.
                        </p>

                        <h3 className="text-xl mt-16">The problem</h3>

                        <p>
                            Like most people learning to code, I was told to
                            create some ‘portfolio projects’––e.g. The
                            prototypical to-do list app, or an Instagram clone.
                            The problem I saw with this approach was 1)
                            everybody makes the same thing, so good luck
                            standing out, and 2) the projects themselves didn’t
                            feel useful beyond a learning exercise.
                        </p>
                        <p>
                            I ended up reaching out to real people and offered
                            to build them a website for free, making sure to set
                            the expectation that I had no idea what I was doing
                            but that I was committed to learning and working
                            together.
                        </p>

                        <p>
                            This experience proved to be so instrumental on my
                            ‘coding journey’; with FEFA, I wanted to help
                            facilitate this kind of experience for other
                            developers either looking to learn and/or to give
                            back.
                        </p>

                        <ProjectMedia src="/fefa.png" caption="FEFA homepage" />

                        <h3 className="text-xl mt-16">
                            Case study – Las Vegas Town Fridge
                        </h3>
                        <a
                            href="https://www.ktnv.com/positivelylv/las-vegas-town-fridge-helps-feed-those-in-need"
                            target="_blank"
                        >
                            <ProjectMedia src="/illustration.png" />
                        </a>

                        <p className="mt-6">
                            The Las Vegas Town Fridge (LVTF) was a community-led
                            network of fridges / food pantries throughout Las
                            Vegas. We partnered with LVTF to design and build
                            their first website that became the primary touch
                            point for people looking to donate food, as well
                            community members looking to take advantage of the
                            different food programs.
                        </p>

                        <p>
                            The site featured an interactive map that showed
                            each fridge’s location and hours (a major technical
                            feat at the time for a fledgeling developer like
                            me), as well as a volunteer portal for those looking
                            to get involved.
                        </p>

                        <ProjectMedia
                            src="/map.png"
                            caption="Screenshot from LVTF website"
                        />
                        <ProjectMedia
                            src="/volunteers.webp"
                            caption="Volunteers posing with a fridge"
                        />
                    </section>
                </main>
            </article>
        </>
    );
}
