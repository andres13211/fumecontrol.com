import Layout from 'components/Layout'
import Link from 'next/link'

export default function ServicesOverview() {
  return (
    <Layout>
      <h1>Our Services</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2>Fume Scrubbers & Blower Services</h2>
          <p>Full disassembly, high-pressure interior/exterior cleaning, and reassembly of fume scrubbers and blower systems.</p>
          <Link href="/services/fume-scrubbers">Learn More</Link>
        </div>
        <div>
          <h2>Cooling Towers</h2>
          <p>Cleaning and descaling services for various cooling tower systems to restore efficient heat exchange and operation.</p>
          <Link href="/services/cooling-towers">Learn More</Link>
        </div>
        <div>
          <h2>Cleaning Services</h2>
          <p>Confined space detailing of tanks, sumps, ducting, and process tool stations for shutdown or maintenance events.</p>
          <Link href="/services/cleaning-services">Learn More</Link>
        </div>
        <div>
          <h2>Industrial Cleaning Services</h2>
          <p>High-volume vacuum and pressure cleaning for semiconductor and biotech sites during critical facility turnovers.</p>
          <Link href="/services/industrial-cleaning">Learn More</Link>
        </div>
      </div>
    </Layout>
  )
}
