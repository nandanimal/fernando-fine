import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectPager from "@/components/ProjectPager";

const project = {
    name: "Plural",
    description: "AI learning platform",
    tools: "Figma, React, React Native",
    year: "2023",
    slug: "/plural",
    hero: "/plural_cover.png",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "From ~2022 – 2023, I was contracted by Plural Learning Lab to help build an AI-powered learning platform centered around the practice of logging and observing moods. ",
        },
        {
            heading: "Role",
            body: "I led the design of the Plural learning platform; I also contributed as a front end engineer. ",
        },
        {
            heading: "Collaborators",
            body: "Full stack engineer – Alex DeBrie",
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
                        <h3 className="text-xl mt-16">The problem</h3>

                        <p>
                            Every day, in school and at work, we are expected to
                            work well with others (in fact, success often hinges
                            upon being able to collaborate effectively)––and
                            yet, there exists very few resources for cultivating
                            the so-called ‘soft’ skills necessary for teamwork.
                        </p>
                        <p>
                            This lack was particularly acute in diverse,
                            distributed teams made even more distributed
                            following the pandemic.
                        </p>

                        <p>
                            Before I started working with Plural, they had been
                            successful offering one-off soft skill training
                            courses. Delivering these courses, however, was
                            extremely labor intensive, therefore making it
                            impossible to meet demand and grow.{" "}
                        </p>

                        <h3 className="text-xl mt-16">The challenge</h3>

                        <p>
                            Turn Plural’s existing IP on business design and
                            existential moods into a scalable ‘soft’ skills
                            application that could have a measurable, positive
                            impact on team performance.
                        </p>

                        <h3 className="text-xl mt-16">User research</h3>

                        <p>
                            I spoke with past course participants to better
                            understand which elements they found most valuable.
                            The top takeaways were:
                        </p>

                        <ol>
                            <li>Keeping track of their moods</li>{" "}
                            <li>1 on 1 time with instructors</li>{" "}
                            <li>Work sheets and readings</li>
                        </ol>

                        <p>
                            We also looked at existing mood tracking platforms
                            and found a common criticism of them was that they
                            were too surface-level; i.e. they were helpful for
                            recognizing patterns in your moods, but didn’t
                            provide much guidance beyond that.{" "}
                        </p>

                        <ProjectMedia
                            src="/diagram.png"
                            alt="Initial diagram of the Plural ecosystem"
                            caption="Initial diagram of the Plural ecosystem"
                        />

                        <p>
                            The idea was to essentially create an all-in-one
                            learning experience that had the functionality of a
                            mood tracking app as an entry point, the depth of
                            Plural’s existing course materials, and the
                            personalized feel of one-on-one coaching.{" "}
                        </p>

                        <p>
                            Within that ecosystem, the primary goal was to try
                            and create a space that would foster the “Aha”
                            moment students experienced when working with
                            coaches. We ultimately landed on this notion of an
                            AI ‘gym’: a personalized, interactive version of
                            Plural’s existing workflows that users could engage
                            on demand, made possible by an LLM trained on Plural
                            data.
                        </p>

                        <div className="flex flex-row gap-2">
                            <ProjectMedia
                                src="/gyms.png"
                                alt="hifi mock up of Plural AI gyms"
                                caption="AI gyms"
                            />
                            <ProjectMedia
                                src="/filter-explainer.png"
                                alt="Mood treemap"
                                caption="Mood treemap"
                            />
                        </div>

                        <h3 className="text-xl mt-16">Outcomes</h3>

                        <ProjectMedia
                            src="/gofar.png"
                            alt="If you want to go far, go together"
                            caption="Slide taken from a Plural marketing deck"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="quote space-y-3">
                                <div className="text-3xl font-heading">
                                    "My highest possible recommendation for
                                    enhancing workplace effectiveness"
                                </div>
                                <div className="text-xs">
                                    – Jeff, United States Naval Officer
                                </div>
                            </div>
                            <div className="">
                                <p>
                                    Plural was launched as a pilot program at
                                    the engineering schools at CU Boulder and
                                    Universidad Católica in Chile. Of students
                                    and faculty who were surveyed, &gt;97% found
                                    Plural to be helpful to them with a Net
                                    Promoter Score of 75 (~40% higher than
                                    industry average). Since then, versions of
                                    the application have been employed in teams
                                    from Microsoft, Salesforce, and the US Navy.
                                </p>
                            </div>
                        </div>
                    </section>
                    <ProjectPager currentSlug={project.slug} />
                </main>
            </article>
        </>
    );
}
