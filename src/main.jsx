import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const products = [
  ['Business Checking', 'Global operating accounts, free ACH and wire workflows, checks, and approval controls from one Meow dashboard.'],
  ['Corporate Cards', 'Unlimited virtual and physical cards with granular limits for teams, vendors, and AI infrastructure spend.'],
  ['International Payouts', 'Send money across 50+ currencies with routing intelligence, low-friction approvals, and clean reconciliation.'],
  ['Crypto Rails', 'Move USDC, USDT, BTC, SOL, and ETH alongside traditional business banking workflows.'],
  ['Global Treasury', 'Model idle cash, ladders, commercial paper, T-Bills, gilts, bunds, and FX in one place.'],
  ['Backoffice', 'Bookkeeping, taxes, 409A valuation workflows, bill payments, and concierge startup finance support.'],
];

const regions = ['North America', 'Latin America', 'Europe', 'MENA', 'Asia Pacific', 'South Asia', 'Africa', 'Offshore'];
const rails = ['Account onboarding', 'ACH', 'Wire transfer', 'USDC', 'International wire', 'Card payments', 'Book transfer', 'Invoices'];

function ProductCard({ title, body, index }) {
  return (
    <article className="productCard">
      <span className="productIndex">0{index + 1}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Meow home">
          <span className="brandMark">m</span>
          <span>Meow</span>
        </a>
        <div className="navLinks">
          <a href="#platform">Products</a>
          <a href="#agents">AI Agents</a>
          <a href="#regions">Regions</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="navActions">
          <a href="https://app.meow.com/signin">Sign in</a>
          <a className="navCta" href="https://app.meow.com/signup">Get started</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="grain" />
        <div className="heroCopy">
          <p className="eyebrow">New · Agentic business formation and onboarding</p>
          <h1>Modern banking for AI agents and global teams.</h1>
          <p className="lede">
            One calm, powerful platform for business checking, corporate cards, global payments, crypto rails, treasury workflows, and backoffice operations.
          </p>
          <div className="heroActions">
            <a className="button primary" href="https://app.meow.com/signup">Get started</a>
            <a className="button secondary" href="#agents">Open with an AI agent</a>
          </div>
          <p className="disclaimer">
            Meow Technologies is a financial technology company, not a bank or FDIC-insured depository institution. Banking services are provided by partner banks; terms apply.
          </p>
        </div>

        <div className="dashboardShell" aria-label="Meow product dashboard concept preview">
          <div className="dashHeader">
            <div>
              <span className="dashKicker">Meow command center</span>
              <strong>Operating balance</strong>
            </div>
            <span className="statusPill">Partner bank synced</span>
          </div>
          <div className="balanceRow">
            <span>$12,486,240</span>
            <small>+3.92% projected annualized yield view</small>
          </div>
          <div className="visualLedger">
            <div className="ledgerLine long" />
            <div className="ledgerLine mid" />
            <div className="ledgerLine short" />
            <div className="floatCard cardOne"><b>2.5%</b><span>AI spend rewards</span></div>
            <div className="floatCard cardTwo"><b>50+</b><span>Currencies</span></div>
            <div className="floatCard cardThree"><b>0</b><span>Wire / ACH fees</span></div>
          </div>
          <div className="agentCommand">
            <span>claude</span>
            <code>Start Meow onboarding for a Delaware C-Corp with three approvers.</code>
          </div>
        </div>
      </section>

      <section id="platform" className="section splitIntro">
        <div>
          <p className="eyebrow">One cohesive platform</p>
          <h2>All the financial rails a fast company needs.</h2>
        </div>
        <p>
          Meow brings checking, cards, global payouts, invoicing, treasury, crypto, and startup backoffice into one interface — rebuilt here with a sharper editorial layout, tactile glass surfaces, and fewer generic SaaS tropes. Mercifully, no random purple blobs wearing a Patagonia vest.
        </p>
      </section>

      <section className="productGrid sectionTight">
        {products.map(([title, body], index) => <ProductCard key={title} title={title} body={body} index={index} />)}
      </section>

      <section id="agents" className="section agentSection">
        <div className="agentStory">
          <p className="eyebrow">Banking with AI agents</p>
          <h2>Your agent handles the paperwork. You keep the keys.</h2>
          <p>
            Start onboarding from Claude, ChatGPT, or your own tooling. Agents can assemble entity details, prepare account tasks, and draft payment workflows, while humans retain final approval for sensitive financial actions.
          </p>
          <div className="railCloud">
            {rails.map((rail) => <span key={rail}>{rail}</span>)}
          </div>
        </div>
        <div className="agentPanel">
          <div className="terminalHeader"><i /><i /><i /></div>
          <pre>{`meow mcp connect\n\n✓ identity packet prepared\n✓ business entities mapped\n✓ spend controls drafted\n✓ crypto rails policy checked\n\nAwaiting human approval.`}</pre>
        </div>
      </section>

      <section className="section numbersBand">
        <div><strong>$ Billions</strong><span>assets on platform</span></div>
        <div><strong>$25M+</strong><span>expected rewards paid in 2025</span></div>
        <div><strong>Thousands</strong><span>businesses with funded accounts</span></div>
      </section>

      <section className="section checkingSection">
        <div className="checkingCopy">
          <p className="eyebrow">Business checking</p>
          <h2>A more controlled way to move money.</h2>
          <p>
            Schedule recurring wires, pay by CSV, create invoice workflows, assign approvers, and consolidate entities without burying the team in bank portals from the Bronze Age.
          </p>
        </div>
        <div className="checkingCards">
          <article><h3>Say goodbye to wire fees</h3><p>Domestic and international ACH / wire flows with transparent controls.</p></article>
          <article><h3>Effortless spend management</h3><p>Initiators, approvers, card limits, vendor rules, and role-aware transfer limits.</p></article>
          <article><h3>Reclaim your time</h3><p>Scheduled transfers, recurring invoices, entity switching, and automated reconciliation views.</p></article>
        </div>
      </section>

      <section id="regions" className="section regionsSection">
        <p className="eyebrow">Global reach</p>
        <h2>Built for companies incorporated everywhere and operating anywhere.</h2>
        <div className="regionGrid">
          {regions.map((region) => <span key={region}>{region}</span>)}
        </div>
      </section>

      <section className="section quoteSection">
        <blockquote>
          “Meow gives finance teams the modern operating layer they expected banks to build years ago.”
        </blockquote>
        <p>Conceptual redesign statement based on public product positioning.</p>
      </section>

      <section id="faq" className="section faqSection">
        <div className="faqIntro">
          <p className="eyebrow">FAQ</p>
          <h2>Plain answers, fewer banking incantations.</h2>
        </div>
        <div className="faqList">
          <details open>
            <summary>What is Meow?</summary>
            <p>Meow is positioned as a fintech platform for business banking, cards, treasury, global payouts, crypto, and backoffice services.</p>
          </details>
          <details>
            <summary>How does Meow work with AI agents?</summary>
            <p>Public materials describe agent-assisted onboarding and workflows through tools like Claude, ChatGPT, and MCP-compatible systems.</p>
          </details>
          <details>
            <summary>Who is Meow for?</summary>
            <p>Businesses, startups, VC firms, funds, real-estate operators, crypto-native teams, and global entities.</p>
          </details>
          <details>
            <summary>What guardrails exist for agent-initiated transactions?</summary>
            <p>This redesign frames agent activity as preparation and routing. Sensitive money movement should require explicit human approval.</p>
          </details>
        </div>
      </section>

      <section className="section finalCta">
        <p className="eyebrow">Apply today</p>
        <h2>Open a cleaner command center for company money.</h2>
        <a className="button primary" href="https://app.meow.com/signup">Get started</a>
      </section>

      <footer className="footer">
        <div className="footerBrand"><span className="brandMark">m</span><strong>Meow</strong></div>
        <div className="footerColumns">
          <div><b>Products</b><a>Business Checking</a><a>Corporate Cards</a><a>International Payouts</a><a>Global Treasury</a></div>
          <div><b>Financing</b><a>Founder Mortgages</a><a>SBA Loans</a><a>Business Loans</a></div>
          <div><b>Resources</b><a>About</a><a>Help Center</a><a>Customer Stories</a><a>Legal</a></div>
        </div>
        <p className="legal">
          Concept redesign for Meow using publicly visible product structure and information. No original Meow images, logos, brand files, code, or copyrighted art assets are included. Financial products, yields, rewards, and partner-bank disclosures require legal/compliance review before any real use.
        </p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
