import { Hero } from '../components/sections/Hero';
import { Process } from '../components/sections/Process';
import { Technologies } from '../components/sections/Technologies';
import { Choose } from '../components/sections/Choose';
import { Testimonials } from '../components/sections/Testimonials ';

export function HomePage() {
    return (
        <>
            <Hero />
            <Choose/>
            <Process />
            <Technologies />
            <Testimonials/>
        </>
    );
}
