import Head from "next/head";
import ProjectMedia from "@/components/ProjectMedia";

const project = {
    name: "Miro",
    description: "Next gen microfluidics device",
    tools: "C++",
    year: "2018",
    slug: "/miro",
    hero: "/miro_cover.png",
    summary:
        "A satirical calculator that posts every result to a social feed, blurring utility with performative sharing.",
    sections: [
        {
            heading: "Context",
            body: "Miro (developed by Miroculus) is a microfluidics device that automates next generation sequencing (NGS) protocols.",
        },
        {
            heading: "Role",
            body: "I worked on Miro over the course of two summers as an engineering intern, specifically on the hardware team. ",
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
                            src="/droplets.webp"
                            caption="Droplets containing different reagents staged on top of Miro"
                        />

                        <h3 className="text-xl mt-16">Additional context</h3>

                        <p>
                            At Miroculus, the overarching goal was to make
                            scientific research easier and accessible. One way
                            to achieve this was through Miro, a compact
                            ‘lab-on-a-chip’ device that used microfluidic
                            principles to effectively miniaturize and thus
                            optimize different research methods.
                        </p>
                        <p>
                            DNA sequencing like NGS requires a large amount of
                            DNA to work, making PCR (polymerase chain reaction;
                            in other words, DNA amplification) a critical step
                            in the process.
                        </p>

                        <p>
                            One function of the Miro device was to offer
                            automated PCR at a much smaller scale, therefore
                            requiring less reagents, ultimately saving time and
                            money. To run PCR, however, requires precise
                            temperature cycling over different time periods;
                            fluctuations in temperature could reduce output, or
                            in some cases, compromise the whole process.
                        </p>

                        <ProjectMedia
                            src="/PCR.jpg"
                            caption="Simplified PCR diagram via Steven M. Carr"
                        />

                        <h3 className="text-xl mt-16">Outcomes</h3>

                        <p>
                            My task was to help design, develop, and refine the
                            Miro’s heat cycling capabilities. This included both
                            physical product design (e.g. the placement of heat
                            sinks) as well as controls engineering (e.g. tuning
                            a PID controller).{" "}
                        </p>

                        <p>
                            I collaborated across engineering and science teams
                            to develop the first protocols on heat cycling. Many
                            exploded circuit boards and a couple singed eyebrows
                            later, my internship culminated in an SOP on device
                            calibration that became the basis for training
                            scientists on the device.
                        </p>

                        <ProjectMedia
                            src="/miro.webp"
                            caption="Miro in the wild via @richardmleggett on X"
                        />
                    </section>
                </main>
            </article>
        </>
    );
}
