/* ──────────────────────────────────────────────────────────────────────────
   PrivacyPolicy.jsx  –  /privacy-policy
   Layout mirrors dakshcwm.com/privacy-policy/ exactly.
   Colors / design tokens follow the existing project theme.
────────────────────────────────────────────────────────────────────────── */

function PrivacyPolicy() {
  return (
    <main className="bg-site-bg min-h-screen">

      {/* ── HERO GLOW BANNER ── */}
      <section className="relative bg-site-bg pt-[90px] pb-[60px] overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[520px] bg-page-glow pointer-events-none" />
      </section>

      {/* ── MAIN CONTENT CARD ── */}
      <section className="bg-site-bg pb-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <div className="bg-card-bg border border-white/[0.08] rounded-xl px-9 py-12 transition-all hover:border-[rgba(0,180,255,0.1)]">

            {/* Title block */}
            <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold text-white mb-3 tracking-[-0.5px] leading-[1.2]">
              Privacy Policy
            </h1>
            <p className="text-[13px] text-muted mb-4 italic">
              Last updated: January 2025
            </p>
            <p className="text-[14px] text-muted leading-[1.75] mb-10">
              This Privacy Policy explains how DakshCWM collects, uses, and protects information when
              you use our website, desktop agent, and workflow automation services. By using DakshCWM
              you agree to the practices described in this policy.
            </p>

            {/* ── 1. Information We Collect ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              1. Information We Collect
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              We collect information in the following categories:
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                { bold: 'Account information:', rest: ' name, email address, company name, role, and user credentials.' },
                { bold: 'Workflow and usage information:', rest: ' the workflows you run, file names involved in automation, timestamps, execution logs, and workflow success or failure messages.' },
                { bold: 'System information:', rest: ' SolidWorks version, operating system details, agent version, and hardware identifiers used for compatibility and troubleshooting.' },
                { bold: 'Support interactions:', rest: ' messages sent to support, uploaded screenshots, and diagnostic logs if you choose to share them.' },
                { bold: 'Website analytics:', rest: ' anonymous data such as IP address, browser type, pages visited, and time spent on pages.' },
              ].map(({ bold, rest }) => (
                <li key={bold} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span><strong className="text-white font-semibold">{bold}</strong>{rest}</span>
                </li>
              ))}
            </ul>

            {/* ── 2. What We Do Not Collect ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              2. What We Do Not Collect
            </h2>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                'We do not collect your CAD model geometry.',
                'We do not collect copies of your SolidWorks files.',
                'We do not collect proprietary design content unless you explicitly send it to support.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ── 3. How We Use Your Information ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              3. How We Use Your Information
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              We use collected information to:
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                'Provide workflow automation and execution services',
                'Improve performance and reliability of DakshCWM',
                'Support users and troubleshoot issues',
                'Analyze workflow usage trends',
                'Develop new features and integrations',
                'Communicate product updates and announcements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ── 4. How We Store and Protect Information ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              4. How We Store and Protect Information
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              We use industry standard security practices to protect your data. This includes:
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                'Encrypted communication between desktop agent and server',
                'Encrypted storage of workflow configuration data',
                'Limited access to logs and account data, restricted to authorized staff',
                'Regular security reviews and updates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ── 5. Data Processed on Your Device ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              5. Data Processed on Your Device
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              The desktop agent executes workflows directly on the user's workstation. This means:
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                'Your SolidWorks files stay on your computer or network drive',
                'Automation is executed locally unless you choose otherwise',
                'We receive only metadata required to coordinate workflows',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ── 6. Sharing of Information ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              6. Sharing of Information
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              We do not sell personal data. We only share information with:
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                'Service providers who support hosting, analytics, email, or customer support',
                'Legal authorities if required by law',
                "Your organization's administrators, if using a team account",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ── 7. Cookies and Website Tracking ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              7. Cookies and Website Tracking
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              DakshCWM uses cookies for:
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                'Authentication and secure sessions',
                'Usage analytics to improve the website',
                'Remembering user preferences',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ── 8. Your Rights ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              8. Your Rights
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              Depending on your region, you may have the right to:
            </p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                'Access your personal information',
                'Request corrections or deletion',
                'Export your data',
                'Withdraw consent',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted leading-[1.75]">
                  <span className="text-accent font-bold flex-shrink-0 mt-[2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[14px] text-muted leading-[1.75] mb-10">
              To submit a request, contact{' '}
              <a
                href="mailto:support@cloudcadai.com"
                className="text-accent underline underline-offset-[3px] decoration-[rgba(0,180,255,0.3)] transition-opacity hover:opacity-75"
              >
                support@cloudcadai.com
              </a>.
            </p>

            {/* ── 9. Data Retention ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              9. Data Retention
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-10">
              We retain information only as long as needed for service operation, support, legal, and audit
              obligations. You may request data deletion at any time.
            </p>

            {/* ── 10. Children ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              10. Children
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-10">
              DakshCWM is not intended for children under 16. We do not knowingly collect data from minors.
            </p>

            {/* ── 11. Policy Updates ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              11. Policy Updates
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-10">
              We may update this Privacy Policy to reflect product changes or legal requirements. We will
              update the date at the top when changes are made.
            </p>

            {/* ── 12. Contact Us ── */}
            <h2 className="text-[clamp(20px,3vw,30px)] font-extrabold text-white mb-3 leading-[1.25] tracking-[-0.3px]">
              12. Contact Us
            </h2>
            <p className="text-[14px] text-muted leading-[1.75] mb-4">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-[14px] text-muted">
                <strong className="text-white font-semibold">Email:</strong>{' '}
                <a
                  href="mailto:support@cloudcadai.com"
                  className="text-accent underline underline-offset-[3px] decoration-[rgba(0,180,255,0.3)] transition-opacity hover:opacity-75"
                >
                  support@cloudcadai.com
                </a>
              </p>
              <p className="text-[14px] text-muted">
                <strong className="text-white font-semibold">Sales:</strong>{' '}
                <a
                  href="mailto:sales@cloudcadai.com"
                  className="text-accent underline underline-offset-[3px] decoration-[rgba(0,180,255,0.3)] transition-opacity hover:opacity-75"
                >
                  sales@cloudcadai.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default PrivacyPolicy;
