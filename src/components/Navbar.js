import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { VscThreeBars } from "react-icons/vsc";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {

    const [open, cycleOpen] = useCycle(false, true);

    const toggleSidebar = (e) => {
        e.preventDefault();
        cycleOpen();
    }

    return (
        <>
            <MobileSidebar
                open={open}
                cycleOpen={cycleOpen}
            />
            <nav className="customNav">
                <ul id="desktopNav">
                    <li>
                        <span>Leviinn</span>
                    </li>
                    <li>
                        <Link
                            href="/whoarewe"
                        >What is Leviinn?</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;