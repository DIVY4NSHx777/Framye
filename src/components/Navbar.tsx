import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Search } from "lucide-react";
import ThemeToggle from "./Themetoggle";
export default function Navbar() {
    const isAuthenticated = false;

    return (
        <header className="sticky top-0 z-50 w-full bg-hero bg-cover bg-center">
            <nav className="mx-6 flex h-16 items-center gap-4 px-6 ">


                <div className="flex items-center justify-start gap-2">
                    <Link to="/" className="text-3xl font-orbit bg-frosted-silver bg-clip-text text-transparent">
                        Framye
                    </Link>
                </div>


                <div className="hidden md:flex items-center gap-8 mx-4 text-sm font-medium">
                    <Link to="/features" className="font-space text-base  text-muted-foreground transition duration-300 ease-in-out hover:text-foreground">
                        Features
                    </Link>
                    <Link to="/pricing" className="font-space text-base text-muted-foreground transition duration-300 ease-in-out hover:text-foreground">
                        Pricing
                    </Link>
                    <Link to="/blog" className="font-space text-base text-muted-foreground transition duration-300 ease-in-out hover:text-foreground">
                        Blog
                    </Link>
                </div>
                <div className="flex items-center gap-8 justify-end   w-full">

                    <div className="flex items-center gap-4  p-2 px-4  rounded-full  bg-slate-100 border-none dark:bg-accent">
                        <input type="text" placeholder="Search" className="font-space border-none outline-none bg-transparent" />
                        <Search size={18} />
                    </div>

                    <div className="flex items-center gap-4 ">
                        {!isAuthenticated ? (
                            <>
                                <Link
                                    to="/login"
                                    className="font-space text-md text-muted-foreground transition duration-300 ease-in-out hover:text-foreground"
                                >
                                    Login
                                </Link>

                            </>
                        ) : (
                            <Link to="/dashboard">
                                <Button className="rounded-full p-2 px-4">Dashboard</Button>
                            </Link>
                        )}
                    </div>
                    <ThemeToggle></ThemeToggle>
                </div>
            </nav>
        </header>
    );
}
