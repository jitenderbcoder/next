import CTA from "@/components/public/CTA";
import BlogListing from "@/components/public/BlogListing";
import Hero from "@/components/public/Hero";
import Pricing from "@/components/public/Pricing";
import Testimonials from "@/components/public/Testimonials";


export default function Home() {
    return (
        <>
            <Hero />
            <BlogListing />
            <Testimonials />
            {/* <Pricing /> */}
            {/* <CTA /> */}
        </>
    );
}

