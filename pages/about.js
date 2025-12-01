import Link from "next/link";
import React from "react";

const about = () => {
    return (
        <div className="space-y-6 mt-16 p-6">
            <img
                src="/fern.png"
                alt="fernando fine"
                className="max-w-[144px] rounded-sm"
            />
            <p className="font-heading text-3xl">Hello!</p>
            <p>
                I’m Fernando, an Oakland-born, Brooklyn-based cross disciplinary
                design engineer working at the intersection of art and
                technology. As the founder of{" "}
                <Link
                    href="/finetooth"
                    className="text-blue-500 hover:opacity-80"
                >
                    Finetooth
                </Link>
                , I work with clients from a variety of industries to create
                left-of-center applications, spanning visual design and branding
                to full stack web development. My focus has always been to help
                create evocative digital experiences that are as functional as
                they are unique.{" "}
            </p>
            <p>
                Before starting Finetooth, I worked in{" "}
                <Link href="/miro" className="text-blue-500 hover:opacity-80">
                    biotech and pharmaceuticals
                </Link>{" "}
                as a bench researcher and hardware engineer. My scientific
                background forms the technical foundation for my design practice
                today, informing my ability to design experiments and my
                propensity for working with novel technologies. I have a
                bachelor’s degree in Neuroscience from UCLA, where I focused on
                (the science behind) learning, memory, and sleep.{" "}
            </p>
            <p>
                Outside of work, I make music as part of{" "}
                <Link
                    href="/projects/ruby"
                    className="text-blue-500 hover:opacity-80"
                >
                    Ruby Red
                </Link>{" "}
                and am always pursuing new creative tech projects. As a Bay Area
                native and son of a political refugee, I’m interested in
                fostering inclusive, international communities, having
                volunteered as a mentor through Refugee and Immigrant
                Transitions in San Francisco. Other hobbies include soccer,
                League of Legends, woodworking, and hiking, and I am currently
                trying (and failing) to learn to play cello.
            </p>
        </div>
    );
};

export default about;
