import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Speaking engagements on diverse topics.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Speaking engagements on diverse topics."
      intro="Most of my speaking in the past has taken place as part of my academic career doing research on water governance and access, but I've recently started becoming more involved in data events."
    >
      <div className="space-y-20">
        <SpeakingSection title="Data">
          <Appearance
            href="https://aicouncil.com/talks25/data-governance-is-not-the-governance-of-data/"
            title="Data Governance Is NOT the Governance of Data!"
            description="The term 'data governance' is misleading. It implies that we’re governing data itself, when in reality, what we’re governing are the relationships between people, mediated by data. This talk reframes data governance as a human-centered practice that aligns roles, responsibilities, and trust across teams to enable better decision-making and collaboration."
            event="Data Council 2025"
            cta="Watch video"
          />
          <Appearance
            href="https://dataleadersforum.heysummit.com/talks/breaking-the-mould-rethinking-governance-for-the-future/"
            title="Breaking the mold: Rethinking governance for the future"
            description="This panel explores the cutting-edge future of data governance, with a focus on AI, data contracts, and innovative tools like data quality scores."
            event="Data Leaders Summit 2024"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Water">
          <Appearance
            href="https://ssha.org/programs/2015/"
            title="Public vs Private Water Provision:A Tale of Two Debates 100 Years Apart"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Social Science History Association Annual Conference, Baltimore, MD, 2015"
            cta="Link to conference program"
          />
          <Appearance
            href="https://www.asanet.org/wp-content/uploads/2015_annual_meeting_program_book_opt.pdf"
            title="Water Affordability in the United States: An Initial Exploration and an Agenda for Research"
            description="Presentation as part of the Environment and Technology Section Roundtable Session."
            event="American Sociological Association Annual Meeting, Chicago, IL, 2015"
            cta="Link to conference program"
          />
          <Appearance
            href="https://www.asanet.org/wp-content/uploads/2014_am_final_program_c_optimized.pdf"
            title="Fluid Governance: Reconceptualizing the Global Governance of Water"
            description="Presentation for the Political Economy of the World-System Roundtable."
            event="American Sociological Association Annual Meeting, San Francisco, CA, 2014"
            cta="Link to conference program"
          />
          <Appearance
            href="https://soc.utah.edu/graduate/final-dev-conference-program-10-15-13.pdf"
            title="The Global Regime and the Commodification of Water: Lessons from Bolivia and South Africa for the Future of the Water Sector"
            description="Presentation as part of the Resources, Markets, and Movements panel."
            event="Sociology of Development Conference, Salt Lake City, UT, 2013"
            cta="Link to conference program"
          />
          <Appearance
            href="https://www.asanet.org/sites/default/files/2013_annual_meeting_program.pdf"
            title="The Global Water Regime: Global Governance Without Formal Regimes"
            description="Presentation for the Political Economy Roundtable Session."
            event="American Sociological Association Annual Meeting, New York, NY, 2013"
            cta="Link to conference program"
          />
          <Appearance
            href="https://uwm.edu/global-studies/wp-content/uploads/sites/468/2018/09/Peace.pdf"
            title="Commodification and Violence: Conflicts over Water Access in Bolivia and South	Africa"
            description="Presentation for the Conflict/Transformation panel."
            event="Conference on Peace, University of Wisconsin-Milwaukee, Milwaukee, WI, 2013"
            cta="Link to conference program"
          />
          <Appearance
            href="https://www.asanet.org/sites/default/files/2011_annual_meeting_program.pdf"
            title="Water Regimes: The International Dimension of Water and Its Role in the Global Economy"
            description="Presentation for the Rights and Regulation Panel in the Political Sociology Roundtable Session."
            event="American Sociological Association Annual Meeting, Las Vegas, NV, 2011"
            cta="Link to conference program"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
