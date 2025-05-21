import Layout from 'components/Layout'

export default function Safety() {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        Our Commitment to Safety
      </h1>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.7'
      }}>
        <p>
          At Fume Control Technology, Inc. (FCT), safety is the cornerstone of our operations.
          Our team is extensively trained and certified through Environmental Safety Services (ESS)
          to operate safely in high-risk environments.
        </p>

        <p><strong>FCT team certifications include:</strong></p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
          <li>• 40-Hour Hazardous Material Response Procedures</li>
          <li>• Confined Space Entrant and Attendant Training</li>
          <li>• Confined Space Supervisor Certification</li>
          <li>• Confined Space Rescue Training / Emergency Response Team</li>
          <li>• CPR and First Aid</li>
          <li>• Lock Out / Tag Out (LOTO)</li>
          <li>• Back Safety and Lifting Procedures</li>
          <li>• Right to Know (HazCom)</li>
          <li>• Fall Protection</li>
        </ul>

        <p>
          FCT requires all team members and facility contacts to review the tailored General Site Safety and Health Plan (GSSHP)
          before work begins. The plan includes the project scope, site-specific safety procedures, and relevant facility documents
          like your Hazardous Materials Business or Management Plan.
        </p>

        <p>
          Confined spaces are one of the most hazardous areas we work in. They often have toxic or oxygen-deficient atmospheres and
          require strict safety standards. FCT classifies confined spaces based on OSHA guidance and always staffs a minimum team
          consisting of an entrant, attendant, and supervisor.
        </p>

        <p>
          We use calibrated Gastech 4200 and 2400 meters for atmospheric testing and equip our personnel with appropriate PPE, including:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
          <li>• Air-Purifying Respirators (APR)</li>
          <li>• Self-Contained Breathing Apparatus (SCBA)</li>
          <li>• Supplied-Air Respirators (SAR)</li>
          <li>• Supplied-Air Respirators with Emergency Escape (SAR-E)</li>
        </ul>

        <p>
          Our GSSHP follows OSHA Title 29 CFR 1910.120, CAL OSHA Title 8 Section 5192,
          and other applicable regulations such as CFR 1910.146 for confined space entry
          and CFR 1910.147 for lockout/tagout.
        </p>

        <p>
          All documentation is available on-site for review. We don’t just follow safety protocols — we lead with them.
        </p>
      </div>
    </Layout>
  )
