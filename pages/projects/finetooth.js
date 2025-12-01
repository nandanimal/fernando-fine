import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectPager from "@/components/ProjectPager";

const project = {
    name: "Finetooth",
    description: "Web dev and design studio",
    tools: "",
    year: "2021 –",
    slug: "/finetooth",
    hero: "/finetooth_cover.png",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "At Finetooth, we work with clients from industries ranging from music, entertainment, education, AI, architecture, and more to help with branding and development needs.",
        },
        {
            heading: "Role",
            body: "I lead a small team of designers and developers.",
        },
        {
            heading: "Collaborators",
            body: "Fullstack Developer – Omar Abdul-Rahim; Junior Designer – Claire Bailey; Junior Designer – Marko Jones; Webflow Developer – Arseni Iulian; Motion Designer – Pablo Mendez",
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
                        <h2 className="md:text-6xl text-3xl my-8 text-pretty font-pretty text-balance">
                            You can learn more about Finetooth{" "}
                            <a
                                className="text-blue-500 hover:opacity-80"
                                href="https://www.finetooth.dev"
                            >
                                here.
                            </a>
                        </h2>
                    </section>
                    <ProjectPager currentSlug={project.slug} />
                </main>
            </article>
        </>
    );
}
