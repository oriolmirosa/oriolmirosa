import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({
    title,
    href,
    children,
}: {
    title: string
    href?: string
    children?: React.ReactNode
}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export const metadata = {
    title: 'Awards',
    description: 'Here are some awards that I have received for my work.',
}

export default function Uses() {
    return (
        <SimpleLayout
            title="Awards that I have received for my work."
            intro="I have been lucky enough to obtain a number of awards for my work through the years. Here is a selection."
        >
            <div className="space-y-20">
                <ToolsSection title="2015">
                    <Tool title="Global Studies Fellowship, University of Wisconsin-Milwaukee"></Tool>
                </ToolsSection>
                <ToolsSection title="2014">
                    <Tool title="Faculty Research and Creative Activities Support (FRACAS) Award, University of Wisconsin-Milwaukee.">
                        In support of a project on “Water Poverty in the United States”
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2013">
                    <Tool title="Wisconsin Libraries Research Fellowship, University of Wisconsin System.">
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2012">
                    <Tool title="Global Studies Fellowship, University of Wisconsin-Milwaukee.">
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2011">
                    <Tool title="Excellence in Teaching Award for a Lecturer, Sociology Department, University of Wisconsin-Madison.">
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2009">
                    <Tool title="Marie Christine Kohler Fellowship for dissertators, University of Wisconsin Madison.">
                        Awarded to 4 students each year on average university-wide.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2007">
                    <Tool title="International Dissertation Research Fellowship (IDRF), Social Science Research Council.">
                        In support of one year of field research in Bolivia and South Africa.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2005">
                    <Tool title="Tinker-Nave Scholarship, Latin American, Caribbean and Iberian Studies Center, University of Wisconsin-Madison.">
                        In support of six weeks of preliminary dissertation fieldwork in Bolivia.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="2001">
                    <Tool title="'La Caixa' / British Council Fellowship."
                        href="https://becarios.fundacionlacaixa.org/oriol-mirosa-canal-B001013">
                        In support of doing a MPhil in Development Studies at the Institute of Development Studies, University of Sussex.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    )
}
