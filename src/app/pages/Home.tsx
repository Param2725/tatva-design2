import { useEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "../components/Hero";
import { PremiumCarousel } from "../components/PremiumCarousel";
import { ClientTicker } from "../components/ClientTicker";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id) || document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <PremiumCarousel />
            <ClientTicker />
            <Services />
            <About />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <Contact />
        </main>
    );
}
