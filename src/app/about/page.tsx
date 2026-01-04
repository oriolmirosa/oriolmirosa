import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  BlueskyIcon,
  GitHubIcon,
  // InstagramIcon,
  LinkedInIcon,
  // XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Oriol Mirosa. I live in Atlanta, where I work on data.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Oriol Mirosa. I help companies make the most of their data.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              From academia to the tech industry, my journey has always been 
              driven by a fascination with understanding the world through data.
              I began my professional career as a sociologist, conducting 
              multi-year research projects that required untangling complex 
              datasets to reveal meaningful insights. Over time, I realized the
              skills I honed in academia—analyzing, interpreting, and 
              communicating data—had an even broader impact in the business
              world.
            </p>
            <p>
              Transitioning to the tech industry, I’ve spent the last decade
              helping companies unlock the full potential of their data.
              As a VP of Data Strategy at Brooklyn Data Co., I’ve led teams in
              delivering data strategies and solutions for clients ranging from
              e-commerce innovators to enterprise SaaS companies. Whether it’s
              creating data governance frameworks, building scalable
              infrastructure, or delivering actionable insights, my work has
              always been about enabling organizations to turn their data into
              a strategic asset.
            </p>
            <p>
              Outside of work, I’m deeply curious about the intersection of
              science, technology, and society. I love exploring cosmology,
              discovering the latest advancements in data, and mapping how
              ideas evolve across fields. This curiosity fuels my approach to
              data consulting—bringing fresh perspectives and rigorous methods
              to solve unique challenges.
            </p>
            <p>
              When I’m not working, you’ll likely find me enjoying the
              neighborhoods of Atlanta with my wife and two daughters,
              reading about sociology or a sci-fi novel, playing the guitar,
              or planning my next ambitious project.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="https://twitter.com/OriolCodes" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            <SocialLink href="https://bsky.app/profile/oriolmirosa.bsky.social" icon={BlueskyIcon}>
              Follow on Bluesky
            </SocialLink>
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/oriolmirosa/" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/oriolmirosa/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:oriol@oriolmirosa.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              oriol@oriolmirosa.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
