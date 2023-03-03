import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

const LandingPage = () => {
    return (
        <section className="landingPage">
            <Header />

            <div className="boldImage">
                <Image
                    width="1000"
                    height="500"
                    src="https://framerusercontent.com/images/Gd3Yit2xrNnwGKoCYY6fCPEfeaA.svg"
                    alt="Header Image"
                />
            </div>

            <Features />
            <Testimonials />
            <Pricing />
            <Faq />
        </section>
    )
}

export default LandingPage;