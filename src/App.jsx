import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';

const SERVICE_CONTENT = {
  'facebook-ads': {
    title: 'Facebook Ads',
    body: `Maximize reach and relevance with advanced audience segmentation, creative testing, and conversion-optimized funnels. We build structures for prospecting, retargeting, and re-engagement that compound performance.`,
    bullets: [
      'Full-funnel campaign architecture',
      'Creative iteration and thumb-stopping visuals',
      'CAPI + pixel governance for attribution',
      'Dynamic product ads for catalogs',
    ],
  },
  'instagram-ads': {
    title: 'Instagram Ads',
    body: `We craft Reels-first stories, carousel narratives, and UGC-style creatives that feel native while driving measurable outcomes across Feed, Explore, and Stories.`,
    bullets: [
      'Reels-first content strategy',
      'UGC production and creator sourcing',
      'Placement-optimized formats',
      'Creative analytics and iteration',
    ],
  },
  'tiktok-ads': {
    title: 'TikTok Ads',
    body: `Trend-aware, native creative that rides the algorithm responsibly. We combine spark ads, hooks, and fast iteration to earn attention and scale efficiently.`,
    bullets: [
      'Hook-driven creative system',
      'Spark ads and creator whitelisting',
      'Event tracking and attribution',
      'Rapid test-and-learn cadence',
    ],
  },
  'google-ads': {
    title: 'Google Ads',
    body: `Search, Shopping, Display, and Performance Max working together. We structure campaigns for intent capture and profitable growth with clean data and smart bidding.`,
    bullets: [
      'Granular search intent mapping',
      'Merchant Center + feed hygiene',
      'PMax with robust asset groups',
      'Landing page CRO recommendations',
    ],
  },
  'youtube-ads': {
    title: 'YouTube Ads',
    body: `Awareness to action with skippable, non‑skippable, and Shorts formats. We produce scripts and storyboards that land the message in the first five seconds.`,
    bullets: [
      'Full-funnel YouTube strategy',
      'Creative scripting and storyboarding',
      'Audience layering and exclusions',
      'Brand lift and view-through metrics',
    ],
  },
  'linkedin-ads': {
    title: 'LinkedIn Ads',
    body: `Account-based marketing for B2B. We target by firmographics and buyer persona, optimizing for qualified pipeline—not just clicks.`,
    bullets: [
      'ABM targeting and list matching',
      'Lead gen forms and routing',
      'Content syndication and retargeting',
      'CRM alignment and UTM governance',
    ],
  },
  'twitter-ads': {
    title: 'Twitter/X Ads',
    body: `Win the moment with real-time conversation targeting and creative that feels native to the timeline.`,
    bullets: [
      'Conversation and keyword targeting',
      'Trend-aligned creative angles',
      'Brand safety controls',
      'Always-on testing framework',
    ],
  },
  'marketplace-ads': {
    title: 'Marketplace Ads',
    body: `Shopee, Tokopedia, and marketplace media tailored to move inventory and defend share of shelf.`,
    bullets: [
      'Promo calendar and campaign sync',
      'Storefront optimization',
      'Keyword and competitor defense',
      'Ratings, reviews, and bundles',
    ],
  },
  seo: {
    title: 'SEO (Search Engine Optimisation)',
    body: `Technical, on-page, and content SEO with a pragmatic roadmap. We fix the foundations and publish content that compounds demand.`,
    bullets: [
      'Technical audits and fixes',
      'Semantic content architecture',
      'Editorial operations and briefs',
      'Link earning and digital PR',
    ],
  },
  'publish-media': {
    title: 'Publish Media Nasional',
    body: `End-to-end PR placement across national media to build authority and social proof for your brand launches, milestones, and leadership POVs.`,
    bullets: [
      'Media list development and outreach',
      'Press kit and newsroom setup',
      'Thought leadership placement',
      'Coverage tracking and reporting',
    ],
  },
};

function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

function About() {
  return (
    <section className="pt-28 pb-16">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">About Us</h2>
          <p className="mt-4 text-emerald-900/80 leading-relaxed">
            We are a digital creative agency blending performance media with premium 3D design. Our mission is to help modern brands communicate with clarity, beauty, and measurable impact across social, search, and marketplaces.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Platforms Managed" value="10+" />
            <Stat label="Avg. ROAS Lift" value="2.7x" />
            <Stat label="Projects Delivered" value="200+" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-5 rounded-xl bg-white border border-emerald-900/10 shadow-sm">
      <div className="text-2xl font-extrabold text-emerald-950">{value}</div>
      <div className="text-sm text-emerald-900/70">{label}</div>
    </div>
  );
}

function Contact() {
  return (
    <section className="pt-28 pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Contact Us</h2>
            <p className="mt-4 text-emerald-900/80">Tell us about your goals, timeline, and budget. We’ll come back with a tailored plan.</p>
            <div className="mt-6 p-5 rounded-xl bg-[#F5EDE0] border border-emerald-900/10">
              <p className="text-sm text-emerald-900/80">Prefer email? Reach us at</p>
              <a className="font-semibold text-emerald-900 hover:underline" href="mailto:hello@sageandsand.agency">hello@sageandsand.agency</a>
            </div>
          </div>
          <form
            className="p-6 rounded-xl bg-white border border-emerald-900/10 shadow-sm space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get('name');
              const email = data.get('email');
              const msg = data.get('message');
              const subject = encodeURIComponent(`Project inquiry from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
              window.location.href = `mailto:hello@sageandsand.agency?subject=${subject}&body=${body}`;
            }}
          >
            <div>
              <label className="block text-sm font-medium text-emerald-900/80">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9CAF88]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900/80">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9CAF88]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900/80">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9CAF88]"></textarea>
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#9CAF88] text-white font-semibold hover:bg-[#89a377] transition-colors">Send Message</button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function ServiceDetail({ slug }) {
  const data = SERVICE_CONTENT[slug];
  if (!data) return null;
  return (
    <section className="pt-28 pb-16">
      <Container>
        <div className="max-w-3xl">
          <a href="#/services" className="inline-flex items-center gap-2 text-sm text-emerald-900/70 hover:text-emerald-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Back to Services
          </a>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-emerald-950">{data.title}</h1>
          <p className="mt-3 text-emerald-900/80 leading-relaxed">{data.body}</p>
          <ul className="mt-6 space-y-2">
            {data.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9CAF88]" />
                <span className="text-emerald-900/90">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#9CAF88] text-white font-semibold hover:bg-[#89a377]">Start a Project</a>
            <a href="#/services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-emerald-900/10 bg-white text-emerald-900 font-semibold hover:bg-emerald-50">Explore More Services</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Home({ onSelect }) {
  return (
    <>
      <Hero />
      <ServicesGrid onSelect={(slug) => (window.location.hash = `#/services/${slug}`)} />
      <section className="py-16">
        <Container>
          <div className="rounded-2xl overflow-hidden border border-emerald-900/10 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-emerald-950">Why brands choose us</h3>
                <ul className="mt-4 space-y-3 text-emerald-900/80">
                  <li className="flex gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#E8DCC1]"/><span>3D-first creative system that stands out in crowded feeds.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#9CAF88]"/><span>Performance frameworks built to test, learn, and scale.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#cfd7b8]"/><span>Clear reporting, clean data, and actionable insights.</span></li>
                </ul>
                <a href="#/about" className="mt-6 inline-flex items-center px-5 py-3 rounded-lg border border-emerald-900/10 bg-white text-emerald-900 font-semibold hover:bg-emerald-50">Learn about our approach</a>
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-br from-[#F5EDE0] to-white">
                <div className="h-full rounded-xl border border-emerald-900/10 p-6">
                  <h4 className="text-lg font-semibold text-emerald-950">Platforms we power</h4>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-emerald-900/80">
                    {['Facebook', 'Instagram', 'TikTok', 'Google', 'YouTube', 'LinkedIn', 'Twitter/X', 'Marketplaces', 'SEO', 'PR'].map((p) => (
                      <span key={p} className="inline-flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-200" /> {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function App() {
  const [hash, setHash] = useState('#/');

  useEffect(() => {
    const sync = () => setHash(window.location.hash || '#/');
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const route = useMemo(() => {
    const h = hash.startsWith('#') ? hash.slice(1) : hash;
    const parts = h.split('/').filter(Boolean); // ["",""], etc
    if (parts.length === 0) return { name: 'home' };
    if (parts[0] === 'about') return { name: 'about' };
    if (parts[0] === 'contact') return { name: 'contact' };
    if (parts[0] === 'services' && parts[1]) return { name: 'service', slug: parts[1] };
    if (parts[0] === 'services') return { name: 'services' };
    return { name: 'home' };
  }, [hash]);

  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      {route.name === 'home' && <Home />}
      {route.name === 'about' && <About />}
      {route.name === 'contact' && <Contact />}
      {route.name === 'services' && (
        <>
          <section className="pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">Services</h1>
              <p className="mt-3 text-emerald-900/80 max-w-2xl">Choose a channel to dive deeper. Every service integrates with our creative and analytics engine for consistent growth.</p>
            </div>
          </section>
          <ServicesGrid onSelect={(slug) => (window.location.hash = `#/services/${slug}`)} />
        </>
      )}
      {route.name === 'service' && <ServiceDetail slug={route.slug} />}
      <Footer />
    </div>
  );
}
