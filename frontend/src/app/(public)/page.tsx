import CTA from "@/components/public/CTA";
import Features from "@/components/public/Features";
import Hero from "@/components/public/Hero";
import Pricing from "@/components/public/Pricing";
import Testimonials from "@/components/public/Testimonials";


export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <CTA />
        </>
    );
}

