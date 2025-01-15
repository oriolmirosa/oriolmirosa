import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


function PublicationsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Publication({
  title,
  href,
  cta,
  children,
}: {
  title: string
  href?: string
  cta?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Publications',
  description: 'Articles that I have published in various outlets.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Articles that I have published in various outlets."
      intro="Through the years, some of my research has ended up in academic publications."
    >
      <div className="space-y-20">
        <PublicationsSection title="Peer-Reviewed">
          <Publication
            title="2017. Gordon Gauchat, Timothy O’Brien and Oriol Mirosa. “The Legitimacy of Environmental Scientists in the Public Sphere.” Climatic Change 143(3–4):297–306."
            href="https://link.springer.com/article/10.1007/s10584-017-2015-z"
            cta="Link to article"
          >
          </Publication>
          <Publication
            title="2015. Oriol Mirosa. “Water Affordability in the United States: An Initial Exploration and an Agenda for Research.” Sociological Imagination 51(2):35–67."
            href="https://d1wqtxts1xzle7.cloudfront.net/44157341/mirosa-2015-libre.pdf"
            cta="Link to article"
          >
          </Publication>
          <Publication
            title="2012. Oriol Mirosa and Leila M. Harris. “Human Right to Water: Contemporary Challenges and Contours of a Global Debate” Antipode 44(3):932–949."
            href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8330.2011.00929.x"
            cta="Link to article"
          >
          </Publication>
        </PublicationsSection>
        <PublicationsSection title="Other Publications">
          <Publication
            title="2018. Oriol Mirosa. “Book Review: Green Capitalism. The God That Failed.” Humanity & Society 42(1):130–2."
            href="https://journals.sagepub.com/doi/10.1177/0160597617750793"
            cta='Link to article'
          >
          </Publication>
          <Publication
            title="2016. Oriol Mirosa. “City Life, Water Values: City Dwellers in the Global North and Their Relationship to Water.” Intersections 4(1):16–21."
            href="https://books.apple.com/us/book/intersections-vol-4/id1091681977"
            cta='Link to article'
          >
          </Publication>
          <Publication
            title="2014. Oriol Mirosa. “Book Review: From Precaution to Profit: Contemporary Challenges to Environmental Protection in the Montreal Protocol.“ American Journal of Sociology 120(2):607-9"
            href="https://www.journals.uchicago.edu/doi/abs/10.1086/678207"
            cta='Link to article'
          >
          </Publication>
          <Publication
            title="2013. Oriol Mirosa. “The Global Governance of Water in the 21st Century.” Intersections 1(1):17–21."
            href="https://issuu.com/cieuwm/docs/intersections_5.23.13_issu_1_"
            cta="Link to article"
          >
          </Publication>
          <Publication
            title="2004. Lyla Mehta with Oriol Mirosa. Financing Water For All: Behind the Border Policy Convergence in Water Management. IDS Working Paper 233, Brighton: IDS."
            href="https://opendocs.ids.ac.uk/articles/report/Financing_water_for_all_behind_the_border_policy_convergence_in_water_management/26476129"
            cta="Link to article"
          >
          </Publication>
          <Publication
            title="2003. Angel Castiñeira, Pau Vidal, Maria Iglesias, Oriol Mirosa and Ana Villa. Llibre blanc del tercer sector cívico-social. Barcelona: Generalitat de Catalunya."
            href="https://www.tercersector.cat/sites/default/files/llibre_blanc.pdf"
            cta="Link to article"
          >
          </Publication>
        </PublicationsSection>
      </div>
    </SimpleLayout>
  )
}
