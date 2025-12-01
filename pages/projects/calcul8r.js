import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectPager from "@/components/ProjectPager";

const project = {
    name: "Calcul8r",
    description: "Absurdist media art meets social media experiment",
    tools: "Figma, Next.js, PostgreSQL, Auth0",
    year: "2025",
    slug: "/calcul8r",
    hero: "/calc_cover.png",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "Calcul8r began as a personal concept project exploring social media and was eventually built as part of Hacktober Fest NYC.",
        },
        {
            heading: "Role",
            body: "I was the sole designer and developer on this project.",
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
                            Like many others, I struggle with screen time on my
                            phone The problem I saw was that current social
                            media has almost been optimized for addiction, and
                            as a result it’s become increasingly difficult for
                            users to do what early social media set out to
                            encourage––that is, connecting and having fun with
                            your real life friends.{" "}
                        </p>
                        <p>
                            With this project, I set out to accomplish a couple
                            of things:{" "}
                        </p>

                        <ol>
                            <li>
                                To call out the commercialization of social
                                media
                            </li>{" "}
                            <li>
                                To evoke the absurdity of pre-algorithm social
                                media platforms
                            </li>{" "}
                            <li> To actually have fun with my friends</li>
                        </ol>

                        <h2 className="md:text-6xl text-3xl mt-16">
                            The idea was to create the world’s first (and
                            probably last) social media calculator.
                        </h2>
                        <p>
                            Calcul8r works like any other calculator app, with
                            the key difference being that everytime someone hits
                            “ = “, their ‘calculation’ is posted to a global
                            feed, where friends and strangers can like and
                            comment on your post.{" "}
                        </p>

                        <h3 className="text-xl mt-16">Research</h3>

                        <ProjectMedia
                            src="/moodboard.png"
                            alt="Calcul8r Moodboard"
                            caption="Sampling of moodboard featuring early social platforms, early iOS apps, and retro-future aesthetics."
                        />

                        <h3 className="text-xl mt-16">Process</h3>
                        <ProjectMedia
                            src="/prototypes.png"
                            alt="Calcul8r early prototypes"
                            caption="Initial Figma prototype"
                        />
                        <p>
                            While I felt comfortable about the design and front
                            end of this project, this was my first time building
                            out an authentication flow and a managed database.
                            The sponsors of this particular hackathon happened
                            to be Auth0 and DigitalOcean, and with a little
                            guidance from on-site volunteers, I was finally able
                            to conquer my backend development fears.{" "}
                        </p>

                        <ProjectMedia
                            src="/screens.png"
                            alt="Calcul8r early screens"
                            caption="Prototype after a hifi pass and before Next.js development"
                        />

                        <h3 className="text-xl mt-16">
                            Outcomes + Future plans
                        </h3>

                        <div className="flex flex-row gap-2 items-stretch">
                            <ProjectMedia
                                src="/hacktober.png"
                                alt="Hacktober fest"
                                caption="Presenting Calcul8r, which received an Honorable Mention, at Hacktober fest in NYC. Photo – @digitalocean on Instagram"
                            />
                            <ProjectMedia
                                src="/friends.png"
                                alt="Friends"
                                caption="Friends debating what their first calculation should be"
                            />
                        </div>

                        <p>
                            Most social apps today function as sales funnels at
                            best and/or insanely addictive distractions at
                            worst. Calcul8r proudly accomplishes neither,
                            instead offering a ‘digital rest stop’ for you and
                            your friends to share a laugh. 
                        </p>

                        <p>
                            Going forward, it could be interesting to lean into
                            the idea of Calcul8r as a serious social media
                            competitor. Some ideas include{" "}
                        </p>
                        <ol>
                            <li>
                                an end of year wrapped that shows your most
                                common calculations,
                            </li>{" "}
                            <li>adding stories (because obviously),</li>{" "}
                            <li> and maybe even paywall-gating the number 8</li>
                        </ol>

                        <ProjectMedia src="/pro.png" alt="Calcul8er pro" />
                        {/* <ProjectMedia
                            src="/roots_trimmed.mov"
                            alt="Interaction walkthrough"
                            type="video"
                            caption="Quick walkthrough of posting a calculation and seeing it land in the feed."
                        /> */}
                    </section>
                    <ProjectPager currentSlug={project.slug} />
                </main>
            </article>
        </>
    );
}
