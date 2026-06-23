import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const products = [
  ['Operating Account', 'Multi-entity balances, approvals, and same-day money movement from one command center.'],
  ['Adaptive Cards', 'Issue virtual cards for teams, vendors, and AI agents with live policy guardrails.'],
  ['Global Payouts', 'Route wires, ACH, SEPA, and stablecoin rails from a single treasury workflow.'],
  ['Treasury Console', 'Model idle cash, ladders, and liquidity windows before money leaves the account.'],
];

const rails = ['ACH', 'Wire', 'SEPA', 'Cards', 'Invoices', 'USDC', 'FX', 'Book transfers'];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Aurora Ledger home">
          <span className="brandMark">A</span>
          <span>Aurora Ledger</span>
        </a>
        <div className="navLinks" aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#agents">Agents</a>
          <a href="#security">Security</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="navCta" href="mailto:hello@example.com">Request access</a>
      </nav>

      <section id="top" className="hero section">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="heroCopy">
          <p className="eyebrow">Agent-native finance for global operators</p>
          <h1>Business banking that moves at the speed of your company.</h1>
          <p className="lede">
            Aurora Ledger unifies accounts, cards, payments, treasury workflows, and AI-agent approvals in a single cinematic finance OS for founders and lean teams.
          </p>
          <div className="heroActions">
            <a className="button primary" href="mailto:hello@example.com">Join the private beta</a>
            <a className="button ghost" href="#platform">Explore platform</a>
          </div>
          <div className="proofStrip" aria-label="Company metrics">
            <div><strong>3.8s</strong><span>median approval path</span></div>
            <div><strong>52</strong><span>supported payout regions</span></div>
            <div><strong>24/7</strong><span>agent policy monitoring</span></div>
          </div>
        </div>
        <div className="heroPanel" aria-label="Finance dashboard preview">
          <div className="panelTop">
            <span>Liquidity cockpit</span>
            <span className="live">Live</span>
          </div>
          <div className="balanceCard">
            <span>Total operating balance</span>
            <strong>$8,420,914</strong>
            <small>Projected 30-day runway: 28.4 months</small>
          </div>
          <div className="flowGrid">
            <div className="flowCard accent"><span>Agent request</span><strong>$42,000</strong><small>GPU credits · awaiting policy match</small></div>
            <div className="flowCard"><span>Card rewards</span><strong>2.5%</strong><small>AI infrastructure category</small></div>
            <div className="flowCard"><span>FX route</span><strong>0.42%</strong><small>Projected savings vs bank wire</small></div>
            <div className="flowCard"><span>Approval chain</span><strong>2/3</strong><small>Founder + finance lead complete</small></div>
          </div>
          <div className="commandLine">aurora approve vendor/gpu-labs --cap 50k --agent nova</div>
        </div>
      </section>

      <section id="platform" className="section productSection">
        <div className="sectionIntro">
          <p className="eyebrow">One finance surface</p>
          <h2>Everything your team needs after the seed round.</h2>
          <p>Designed for companies that want bank-grade controls without bank-grade sediment. You know, the fun mud of legacy finance.</p>
        </div>
        <div className="productGrid">
          {products.map(([title, text]) => (
            <article className="productCard" key={title}>
              <span className="cardGlyph">✦</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agents" className="section agentsSection">
        <div className="agentsPanel">
          <p className="eyebrow">Built for AI operators</p>
          <h2>Let agents prepare the work. Keep humans in control.</h2>
          <p>
            Assign bounded permissions to software agents so they can draft payments, reconcile invoices, assemble KYC packets, and recommend treasury moves — while approvals remain explicit, auditable, and reversible.
          </p>
          <div className="railList">
            {rails.map((rail) => <span key={rail}>{rail}</span>)}
          </div>
        </div>
        <div className="terminal" aria-label="Agent terminal example">
          <div className="terminalHeader"><span /> <span /> <span /></div>
          <pre>{`$ aurora agent onboard\n\n✓ entity profile assembled\n✓ spend policy synced\n✓ vendor ledger checked\n\nNext: founder approval required\nNo funds move without approval.`}</pre>
        </div>
      </section>

      <section id="security" className="section securitySection">
        <div>
          <p className="eyebrow">Controls by default</p>
          <h2>Finance automation with adult supervision.</h2>
        </div>
        <div className="securityGrid">
          <div><strong>Policy simulation</strong><span>Preview every transfer against live approvals, caps, vendors, and entity rules.</span></div>
          <div><strong>Human finality</strong><span>AI can prepare and recommend. Humans approve movement of money.</span></div>
          <div><strong>Audit trails</strong><span>Every agent action is signed, timestamped, and attached to the underlying transaction.</span></div>
        </div>
      </section>

      <section className="section testimonial">
        <blockquote>
          “Aurora Ledger feels like the missing command center between our founders, finance lead, and AI operators.”
        </blockquote>
        <p>— Maya Chen, COO at Halcyon Robotics</p>
      </section>

      <section id="faq" className="section faqSection">
        <h2>Questions founders ask first</h2>
        <details open>
          <summary>Is Aurora Ledger a real financial product?</summary>
          <p>No. This is an original concept landing page created as a design and frontend implementation demo.</p>
        </details>
        <details>
          <summary>Can agents move money autonomously?</summary>
          <p>The concept assumes agent preparation only. Money movement requires explicit human approval.</p>
        </details>
        <details>
          <summary>What inspired the direction?</summary>
          <p>The category: modern business banking, cards, payments, treasury, and agent-assisted workflows. Copy, visuals, layout, and brand are original.</p>
        </details>
      </section>

      <footer className="footer">
        <span>Aurora Ledger</span>
        <p>Original fintech landing page concept. Not affiliated with Meow or any bank.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
