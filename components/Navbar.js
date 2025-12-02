import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div>
            <div className="w-full fixed top-0 z-40">
                <div className="nav-content w-full flex justify-between text-xl font-heading p-2">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-md backdrop-blur-md bg-white/80"
                    >
                        Fernando Fine
                    </Link>
                    <div className="flex flex-row gap-4">
                        <Link
                            href="/about"
                            className="px-4 py-2 rounded-md backdrop-blur-md bg-white/80"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="px-4 py-2 rounded-md backdrop-blur-md bg-white/80"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
