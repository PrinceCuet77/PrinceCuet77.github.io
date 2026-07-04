import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Loader from '@/components/common/Loader';

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className='flex-1'>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
