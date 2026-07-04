'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';
import Section from '@/components/common/Section';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to API route at /api/contact
    // Simulating submission for now
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prince.cuet.77@gmail.com',
      href: 'mailto:prince.cuet.77@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+88) 01515283220',
      href: 'tel:+8801515283220',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '(+88) 01861164307',
      href: 'https://wa.me/8801861164307',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
    },
  ];

  return (
    <Section
      id='contact'
      title='Get In Touch'
      subtitle="Have a project in mind or want to discuss opportunities? Let's connect!"
    >
      <div className='grid lg:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <div>
            <h3 className='text-2xl font-bold text-foreground mb-3'>
              Let&apos;s work together
            </h3>
            <p className='text-muted leading-relaxed'>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions. Feel free to reach
              out through any of the channels below.
            </p>
          </div>

          <div className='space-y-4'>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  info.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 group'
              >
                <div className='p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors'>
                  <info.icon className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-xs text-muted uppercase tracking-wider'>
                    {info.label}
                  </p>
                  <p className='text-foreground font-medium text-sm'>
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div className='grid sm:grid-cols-2 gap-5'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-foreground mb-1.5'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className='w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-foreground mb-1.5'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className='w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300'
                  placeholder='your@email.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-foreground mb-1.5'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                required
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className='w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300'
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-foreground mb-1.5'
              >
                Message
              </label>
              <textarea
                id='message'
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className='w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none'
                placeholder='Tell me about your project...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? (
                <>
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className='w-4 h-4' />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className='w-4 h-4' />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
