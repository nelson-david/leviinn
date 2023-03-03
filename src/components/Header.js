import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="headerSection">
            <h1><span>Launch your startup</span> with this Framer template</h1>
            <p>Customize to fit your brand and impress your customers with a professional online presence.</p>

            <div className="headerButtonDiv">
                <Link href="/start">Start using Compact</Link>
            </div>

            <div className="headerImageDiv">
                <Image
                    width="40"
                    height="40"
                    src="https://framerusercontent.com/images/4EIANjev7LuKhnhOHDsv1sNBN4Y.webp"
                />
                <Image
                    width="40"
                    height="40"
                    src="https://framerusercontent.com/images/o5CxWeo9S23mxGCOjIDR1A4ltc.webp"
                />
                <Image
                    width="40"
                    height="40"
                    src="https://framerusercontent.com/images/NOxlPZmgcQR4kkzg3A4NjqZuYSU.webp"
                />
            </div>

            <span className="closureText">ALREADY USED BY 100+ DESIGNERS!</span>
        </header>
    )
}

export default Header;