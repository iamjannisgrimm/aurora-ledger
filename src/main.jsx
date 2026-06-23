import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import createGlobe from 'cobe';
import './styles.css';

const products = [
  ['Business Checking', 'Global operating accounts, free ACH and wire workflows, checks, and approval controls from one Meow dashboard.'],
  ['Corporate Cards', 'Unlimited virtual and physical cards with granular limits for teams, vendors, and AI infrastructure spend.'],
  ['International Payouts', 'Send money across 50+ currencies with routing intelligence, low-friction approvals, and clean reconciliation.'],
  ['Crypto Rails', 'Move USDC, USDT, BTC, SOL, and ETH alongside traditional business banking workflows.'],
  ['Global Treasury', 'Model idle cash, ladders, commercial paper, T-Bills, gilts, bunds, and FX in one place.'],
  ['Backoffice', 'Bookkeeping, taxes, 409A valuation workflows, bill payments, and concierge startup finance support.'],
];

const stories = [
  ['SelfMade', 'Banking & Backoffice Bundle', '/meow-assets/selfmade-story.svg'],
  ['Daniel Singer', 'Bookkeeping & Taxes', '/meow-assets/daniel-singer-story.svg'],
  ['Optimism', 'Banking & Payments', '/meow-assets/optimism-story.svg'],
];

const regions = ['North America', 'Latin America', 'Europe', 'MENA', 'Asia Pacific', 'South Asia', 'Africa', 'Offshore'];
const rails = ['Account onboarding', 'ACH', 'Wire transfer', 'USDC', 'International wire', 'Card payments', 'Book transfer', 'Invoices'];
const companyLogos = Array.from({ length: 10 }, (_, index) => `/meow-assets/company-logo-${index + 1}.svg`);
const globeCities = [
  { name: 'New York', lat: 40.7, lng: -74 },
  { name: 'San Francisco', lat: 37.8, lng: -122.4 },
  { name: 'London', lat: 51.5, lng: -0.1 },
  { name: 'Dubai', lat: 25.2, lng: 55.3 },
  { name: 'São Paulo', lat: -23.5, lng: -46.6 },
  { name: 'Singapore', lat: 1.4, lng: 103.8 },
];

const meowLogoSvg = `<svg width="102" height="24" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_912_3412)"><mask id="mask0_912_3412" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-5" width="103" height="34"><path d="M102 -4.28572H0.00012207V28.3543H102V-4.28572Z" fill="white"></path></mask><g mask="url(#mask0_912_3412)"><path d="M48.2407 7.06062C47.3808 7.06062 46.589 7.22562 45.8654 7.55493C45.1416 7.88493 44.5435 8.35053 44.0706 8.95216C43.669 8.3363 43.1391 7.86685 42.4796 7.54439C41.8204 7.22176 41.0827 7.06053 40.2659 7.06053C39.5203 7.06053 38.8363 7.18979 38.2129 7.44753C37.5897 7.70553 37.0632 8.07856 36.633 8.56542V7.23265H33.4302V18.7974H36.7836V12.9937C36.7836 11.9905 37.0124 11.2346 37.4714 10.7258C37.9298 10.2172 38.5464 9.96265 39.32 9.96265C40.782 9.96265 41.5126 10.8728 41.5126 12.6926V18.7972H44.866V12.9937C44.866 11.9905 45.0947 11.2346 45.5538 10.7258C46.0122 10.2172 46.6356 9.96265 47.424 9.96265C48.1257 9.96265 48.6668 10.1881 49.0469 10.6395C49.4263 11.0912 49.6164 11.7758 49.6164 12.6926V18.7972H52.9697V12.1764C52.9697 10.4714 52.5431 9.19242 51.6907 8.33939C50.838 7.48747 49.6878 7.06062 48.2407 7.06062Z" fill="currentColor"></path><path d="M64.4912 7.7915C63.574 7.30465 62.5487 7.06053 61.4172 7.06053C60.2565 7.06053 59.2063 7.31527 58.2681 7.82382C57.3292 8.33262 56.5912 9.04199 56.0543 9.95167C55.5167 10.862 55.2482 11.8831 55.2482 13.0149C55.2482 14.1614 55.5202 15.1859 56.0647 16.0887C56.6092 16.9917 57.3833 17.6977 58.3863 18.206C59.3892 18.7148 60.543 18.9693 61.8471 18.9693C63.9391 18.9693 65.5297 18.3458 66.6189 17.0992L64.8349 15.1642C64.4337 15.5513 63.9997 15.8347 63.5344 16.0134C63.0685 16.1928 62.5349 16.2823 61.9333 16.2823C61.059 16.2823 60.3281 16.0747 59.7404 15.6588C59.1528 15.2435 58.7801 14.6774 58.6228 13.9606H67.3715C67.4145 13.4018 67.4361 13.1007 67.4361 13.0576C67.4361 11.854 67.1747 10.7974 66.6516 9.88713C66.1278 8.97762 65.4079 8.27896 64.4912 7.7915ZM58.5797 12.0047C58.6944 11.2598 59.0095 10.6721 59.5255 10.2421C60.0414 9.81213 60.6787 9.59699 61.4388 9.59699C62.1838 9.59699 62.8145 9.8159 63.3305 10.2528C63.8459 10.6902 64.161 11.2738 64.2764 12.0047H58.5797Z" fill="currentColor"></path><path d="M78.4422 7.82382C77.4823 7.31536 76.3933 7.06053 75.1753 7.06053C73.957 7.06053 72.8643 7.31527 71.8968 7.82382C70.9295 8.33262 70.1735 9.03856 69.6295 9.94122C69.0844 10.844 68.8124 11.8684 68.8124 13.0149C68.8124 14.1614 69.0844 15.1859 69.6295 16.0887C70.1734 16.9917 70.9295 17.6977 71.8968 18.206C72.8643 18.7148 73.957 18.9693 75.1753 18.9693C76.3932 18.9693 77.4823 18.7148 78.4422 18.206C79.4027 17.6977 80.1546 16.9917 80.6998 16.0887C81.2436 15.1859 81.5162 14.1614 81.5162 13.0149C81.5162 11.8684 81.2436 10.844 80.6998 9.94122C80.1546 9.03856 79.4027 8.33262 78.4422 7.82382ZM77.2926 15.3472C76.741 15.9276 76.035 16.218 75.1754 16.218C74.3151 16.218 73.6057 15.9276 73.0473 15.3472C72.4881 14.7668 72.2086 13.9895 72.2086 13.0149C72.2086 12.0409 72.4881 11.2631 73.0473 10.6826C73.6057 10.1025 74.3151 9.81222 75.1754 9.81222C76.035 9.81222 76.741 10.1025 77.2926 10.6826C77.8441 11.2631 78.1202 12.0409 78.1202 13.0149C78.1202 13.9896 77.8441 14.7668 77.2926 15.3472Z" fill="currentColor"></path><path d="M99.0346 7.23264L96.2189 15.0572L93.4675 7.23264H90.6303L87.7932 15.0572L85.0629 7.23264H81.9027L86.0729 18.7973H89.2975L91.9846 11.6177L94.5852 18.7973H97.8097L102.001 7.23264H99.0346Z" fill="currentColor"></path><path d="M22.6437 0.584274C22.4262 0.632214 17.4077 1.74767 12.1594 3.66375C6.91128 1.74758 1.89312 0.632214 1.67586 0.584274L0.000244141 0.214691V13.2937C0.000244141 14.2034 0.133269 15.087 0.383426 15.9296C0.510416 16.3566 0.667156 16.7731 0.851777 17.1773C2.63695 21.0842 7.03274 23.8542 12.1594 23.8542C18.046 23.8542 22.9688 20.2027 24.0832 15.3712C24.119 15.215 24.151 15.0581 24.179 14.9C24.2408 14.5506 24.2821 14.1958 24.303 13.8364C24.3138 13.6565 24.3194 0.214691 24.3194 0.214691L22.6437 0.584274ZM21.5616 3.68125V8.49761C20.2238 7.38607 18.3967 6.30504 16.0665 5.24681C18.2581 4.5491 20.24 4.01556 21.5616 3.68125ZM12.1594 21.0964C6.97537 21.0961 2.75799 17.5959 2.75799 13.2937C2.75799 12.3573 3.68586 9.85378 12.1594 6.60804C20.6332 9.85387 21.5616 12.3574 21.5616 13.2937C21.5616 13.5627 21.5454 13.8283 21.5126 14.0903C21.4648 14.4835 21.381 14.8679 21.2651 15.2413C20.2196 18.6042 16.5335 21.0964 12.1594 21.0964ZM2.7579 3.68125C4.07924 4.01556 6.06144 4.5491 8.25309 5.24681C5.9229 6.30504 4.09556 7.38607 2.7579 8.49761V3.68125Z" fill="#FF6631"></path></g></g><defs><clipPath id="clip0_912_3412"><rect width="102" height="24" fill="white"></rect></clipPath></defs></svg>`;

function MeowLogo() {
  return <span className="meowLogo" dangerouslySetInnerHTML={{ __html: meowLogoSvg }} />;
}

function RegionGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const fixedPhi = -1.08;
    let width = 0;
    let globe;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      if (globe) {
        globe.toggle(false);
        globe.destroy();
      }
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: fixedPhi,
        theta: 0.08,
        dark: 1,
        diffuse: 0.42,
        mapSamples: 18000,
        mapBrightness: 4.4,
        baseColor: [0.18, 0.2, 0.29],
        markerColor: [1, 0.4, 0.19],
        glowColor: [0.38, 0.44, 0.62],
        scale: 1.32,
        offset: [0, 0.18],
        opacity: 1,
        markers: globeCities.map((city, index) => ({
          location: [city.lat, city.lng],
          size: index < 3 ? 0.075 : 0.055,
        })),
        onRender: (state) => {
          state.phi = fixedPhi;
          state.theta = 0.08;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
    };

    resize();
    window.addEventListener('resize', resize);
    return () => {
      if (globe) globe.destroy();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="regionGlobe" aria-label="Global finance globe inspired by Meow's original hero">
      <canvas ref={canvasRef} />
      <span className="globeOrbit orbitOne" />
      <span className="globeOrbit orbitTwo" />
      <span className="globeGlow" />
    </div>
  );
}

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
          <MeowLogo />
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
          <h1>Banking for global startups.</h1>
          <p className="lede">
            Meow gives companies one place to hold cash, issue cards, send payments, manage treasury, move crypto, and let AI agents handle the busywork.
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
          <RegionGlobe />
          <div className="globeStat statOne"><strong>50+</strong><span>currencies</span></div>
          <div className="globeStat statTwo"><strong>2.5%</strong><span>AI spend rewards</span></div>
          <div className="globeStat statThree"><strong>$ Billions</strong><span>assets on platform</span></div>
          <div className="heroCommand">
            <span>Claude agent</span>
            <code>Prepare Meow onboarding for a Delaware C-Corp.</code>
          </div>
        </div>
      </section>

      <section className="credibilityStrip" aria-label="Company credibility logos">
        <p>Used by startups, funds, crypto teams, and global operators</p>
        <div className="logoStack">
          {[...companyLogos, ...companyLogos].map((src, index) => (
            <span className="logoTile" key={`${src}-${index}`}>
              <img src={src} alt={`Meow customer or partner logo ${(index % companyLogos.length) + 1}`} loading="lazy" />
            </span>
          ))}
        </div>
      </section>

      <section id="platform" className="section splitIntro">
        <div>
          <p className="eyebrow">One cohesive platform</p>
          <h2>What Meow does.</h2>
        </div>
        <p>
          Meow is a modern finance platform for startups, funds, crypto teams, and global businesses. It combines business banking through partner banks, corporate cards, international payouts, invoicing, treasury tools, and backoffice services in a single dashboard.
        </p>
      </section>

      <section className="productGrid sectionTight">
        {products.map(([title, body], index) => <ProductCard key={title} title={title} body={body} index={index} />)}
      </section>

      <section id="agents" className="section agentSection">
        <div className="agentStory">
          <p className="eyebrow">Banking with AI agents</p>
          <h2>AI agents can start the work.</h2>
          <p>
            Meow’s agent workflow helps founders open accounts, prepare onboarding, and route finance tasks from tools like Claude or ChatGPT. The agent can gather context and draft actions; your team stays in control.
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

      <section className="section storiesSection">
        <div className="storiesIntro">
          <p className="eyebrow">Customer stories</p>
          <h2>Real operators, fewer finance tabs.</h2>
          <p>Selected public Meow story artwork brought over from the original site to keep the redesign connected to the source brand.</p>
        </div>
        <div className="storyGrid">
          {stories.map(([name, label, src]) => (
            <article className="storyCard" key={name}>
              <img src={src} alt={`${name} customer story artwork`} loading="lazy" />
              <div>
                <strong>{name}</strong>
                <span>{label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section checkingSection">
        <div className="checkingCopy">
          <p className="eyebrow">Business checking</p>
          <h2>Move money without the mess.</h2>
          <p>
            Schedule recurring wires, pay by CSV, create invoice workflows, assign approvers, and consolidate entities without forcing the team through fragmented banking portals.
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
          <h2>For companies that operate globally.</h2>
        <div className="regionGrid">
          {regions.map((region) => <span key={region}>{region}</span>)}
        </div>
      </section>

      <section className="section quoteSection">
        <img src="/meow-assets/eli-wachs.png" alt="Eli Wachs testimonial portrait from Meow" loading="lazy" />
        <div>
          <blockquote>
            “Everything a startup needs to move, manage, and protect company money — without stitching together five bank portals.”
          </blockquote>
          <p>Inspired by Meow’s public customer proof and product positioning.</p>
        </div>
      </section>

      <section id="faq" className="section faqSection">
        <div className="faqIntro">
          <p className="eyebrow">FAQ</p>
          <h2>Plain answers.</h2>
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
          <h2>One dashboard for company money.</h2>
        <a className="button primary" href="https://app.meow.com/signup">Get started</a>
      </section>

      <footer className="footer">
        <div className="footerBrand"><MeowLogo /></div>
        <div className="footerColumns">
          <div><b>Products</b><a>Business Checking</a><a>Corporate Cards</a><a>International Payouts</a><a>Global Treasury</a></div>
          <div><b>Financing</b><a>Founder Mortgages</a><a>SBA Loans</a><a>Business Loans</a></div>
          <div><b>Resources</b><a>About</a><a>Help Center</a><a>Customer Stories</a><a>Legal</a></div>
        </div>
        <p className="legal">
          Concept redesign for Meow using publicly visible product structure and information. Logo SVG was extracted from the public site header for this local concept. Financial products, yields, rewards, and partner-bank disclosures require legal/compliance review before any real use.
        </p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
