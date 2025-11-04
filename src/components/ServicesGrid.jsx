const services = [
  { key: 'facebook-ads', title: 'Facebook Ads', desc: 'Precise audience targeting and thumb-stopping creatives that convert.' },
  { key: 'instagram-ads', title: 'Instagram Ads', desc: 'Reels-first storytelling and high-impact formats for discovery.' },
  { key: 'tiktok-ads', title: 'TikTok Ads', desc: 'Native, trend-savvy content to ride the algorithm and win attention.' },
  { key: 'google-ads', title: 'Google Ads', desc: 'Full-funnel search, display, and Performance Max optimization.' },
  { key: 'youtube-ads', title: 'YouTube Ads', desc: 'Skippable, non‑skippable, and short-form strategies that stick.' },
  { key: 'linkedin-ads', title: 'LinkedIn Ads', desc: 'B2B account-based campaigns with qualified lead focus.' },
  { key: 'twitter-ads', title: 'Twitter/X Ads', desc: 'Real‑time conversations turned into measurable outcomes.' },
  { key: 'marketplace-ads', title: 'Marketplace Ads', desc: 'Tokopedia, Shopee, and marketplace promos that move inventory.' },
  { key: 'seo', title: 'SEO', desc: 'Technical, on‑page, and content SEO to compound organic growth.' },
  { key: 'publish-media', title: 'Publish Media Nasional', desc: 'PR placement and national media coverage to build authority.' },
];

export default function ServicesGrid({ onSelect }) {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#F5EDE0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Our Services</h2>
            <p className="mt-2 text-emerald-900/70 max-w-2xl">Integrated growth across search, social, video, and marketplaces—backed by data and crafted with 3D design aesthetics.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => onSelect?.(s.key)}
              className="text-left group rounded-xl bg-white border border-emerald-900/10 hover:border-emerald-900/20 shadow-sm hover:shadow-md transition-all p-5"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E8DCC1] to-[#9CAF88] mb-4 shadow-inner" />
              <h3 className="text-lg font-semibold text-emerald-950 group-hover:text-emerald-900">{s.title}</h3>
              <p className="mt-1 text-sm text-emerald-900/70">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#6e8f61] group-hover:gap-2 transition-all">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
