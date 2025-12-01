import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div>
            <div className="w-full fixed top-0 z-40">
                <div className="nav-content w-full flex justify-between text-xl font-heading p-6">
                    <Link href="/">Fernando Fine</Link>
                    <div className="flex flex-row gap-4">
                        <Link href="/">About</Link>
                        <Link href="/">Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
