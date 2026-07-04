'use client';

import { motion } from 'framer-motion';
import { Code2, Coffee, Rocket, Gamepad2 } from 'lucide-react';
import Section from '@/components/common/Section';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function About() {
  const quickFacts = [
    { label: 'Years Experience', value: '5+', icon: Coffee },
    { label: 'Projects Delivered', value: '9+', icon: Rocket },
    { label: 'Technologies', value: '20+', icon: Code2 },
    { label: 'Fun Projects', value: '3+', icon: Gamepad2 },
  ];

  return (
    <Section
      id='about'
      title='About Me'
      subtitle="A glimpse into who I am, what drives me, and where I'm headed"
    >
      <div className='grid lg:grid-cols-3 gap-12'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-6'>
          <ScrollReveal>
            <h3 className='text-xl font-semibold text-foreground mb-3'>
              Who am I?
            </h3>
            <p className='text-muted leading-relaxed'>
              I&apos;m Rezoan Shakil Prince - a backend-focused full-stack
              engineer with over 5+ years of professional experience at BJIT Ltd,
              one of Bangladesh&apos;s leading IT companies. I specialize in
              building scalable, enterprise-grade applications using the Node.js
              and React ecosystem. From high-traffic real estate portals serving
              thousands of users to AI-powered telemedicine platforms, I thrive
              on turning complex business requirements into elegant, performant
              software.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className='text-xl font-semibold text-foreground mb-3'>
              What I do
            </h3>
            <p className='text-muted leading-relaxed'>
              Currently serving as a Senior Software Engineer, I architect and
              build enterprise platforms spanning real estate, healthcare AI,
              and gaming marketplaces. My daily toolkit includes Node.js,
              Express, React, Next.js, PostgreSQL, Redis, and AWS services.
              I&apos;m equally comfortable designing database schemas and
              crafting pixel-perfect frontends - bridging both ends of the stack
              is what I enjoy most.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className='text-xl font-semibold text-foreground mb-3'>
              My Journey
            </h3>
            <p className='text-muted leading-relaxed'>
              My programming journey began at Chittagong University of
              Engineering and Technology (CUET), where I studied Computer
              Science & Engineering. The CUET Computer Club was my playground -
              I dove into competitive programming, participated in contests, and
              volunteered at CSE FEST&apos;18. After graduating, I joined BJIT
              Ltd where I rapidly grew from building dynamic UIs to architecting
              full-stack solutions, even earning 3rd place in their rigorous
              Blockchain Engineering Training program.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h3 className='text-xl font-semibold text-foreground mb-3'>
              Future Goals
            </h3>
            <p className='text-muted leading-relaxed'>
              I&apos;m working towards a technical leadership and architecture
              role - deepening my expertise in scalable cloud-native systems,
              microservice patterns, and AI-integrated products. I want to lead
              engineering teams that build impactful products used by millions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h3 className='text-xl font-semibold text-foreground mb-3'>
              Beyond Code
            </h3>
            <p className='text-muted leading-relaxed'>
              When I&apos;m not shipping features, you&apos;ll find me watching
              sci-fi movies (Interstellar, The Martian - anything that makes you
              question reality), exploring new travel destinations, or diving
              into the latest tech blogs. I believe great engineers have rich
              lives outside of code - curiosity doesn&apos;t stop at the IDE.
            </p>
          </ScrollReveal>
        </div>

        {/* Quick Facts Sidebar */}
        <div className='lg:col-span-1'>
          <ScrollReveal direction='right'>
            <div className='sticky top-28 space-y-4'>
              <h3 className='text-lg font-semibold text-foreground mb-6'>
                Quick Facts
              </h3>
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors'
                >
                  <div className='p-2 rounded-lg bg-accent/10'>
                    <fact.icon className='w-5 h-5 text-accent' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-foreground'>
                      {fact.value}
                    </p>
                    <p className='text-muted text-sm'>{fact.label}</p>
                  </div>
                </motion.div>
              ))}

              {/* Teaching Role */}
              <div className='mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20'>
                <p className='text-sm font-medium text-accent mb-1'>
                  Also a Teacher
                </p>
                <p className='text-muted text-sm'>
                  Teaching JavaScript & React.js (Oct 2024 – Oct 2025), sharing
                  knowledge and mentoring the next generation of developers.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
