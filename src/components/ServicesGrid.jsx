const services = [
  { key: 'facebook-ads', title: 'Facebook Ads', desc: 'Penargetan akurat & visual yang menghentikan scroll untuk hasil konversi.', price: 'Mulai Rp 5.000.000/bulan' },
  { key: 'instagram-ads', title: 'Instagram Ads', desc: 'Cerita Reels & format impact tinggi untuk discovery dan remarketing.', price: 'Mulai Rp 5.000.000/bulan' },
  { key: 'tiktok-ads', title: 'TikTok Ads', desc: 'Konten native, trend-savvy yang menunggangi algoritma secara efektif.', price: 'Mulai Rp 6.000.000/bulan' },
  { key: 'google-ads', title: 'Google Ads', desc: 'Search, Display, Shopping & PMax untuk menangkap niat dan skala profit.', price: 'Mulai Rp 6.500.000/bulan' },
  { key: 'youtube-ads', title: 'YouTube Ads', desc: 'Strategi skippable, non‑skippable & Shorts untuk awareness hingga action.', price: 'Mulai Rp 6.000.000/bulan' },
  { key: 'linkedin-ads', title: 'LinkedIn Ads', desc: 'ABM B2B berfokus pada pipeline berkualitas, bukan sekadar klik.', price: 'Mulai Rp 7.000.000/bulan' },
  { key: 'twitter-ads', title: 'Twitter/X Ads', desc: 'Percakapan real‑time yang diubah menjadi hasil terukur.', price: 'Mulai Rp 5.000.000/bulan' },
  { key: 'marketplace-ads', title: 'Marketplace Ads', desc: 'Tokopedia, Shopee, dan promo marketplace yang menggerakkan penjualan.', price: 'Mulai Rp 5.500.000/bulan' },
  { key: 'seo', title: 'SEO (Search Engine Optimisation)', desc: 'Teknis, on‑page, dan konten SEO yang membangun pertumbuhan organik.', price: 'Mulai Rp 4.500.000/bulan' },
  { key: 'publish-media', title: 'Publish Media Nasional', desc: 'Penempatan PR dan liputan media nasional untuk bangun otoritas.', price: 'Mulai Rp 8.000.000/paket' },
];

export default function ServicesGrid({ onSelect }) {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#F5EDE0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Layanan Kami</h2>
            <p className="mt-2 text-emerald-900/70 max-w-2xl">Pertumbuhan terintegrasi di search, social, video, dan marketplace—didukung data dan estetika desain 3D.</p>
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
              <div className="mt-3 text-sm font-semibold text-[#6e8f61]">{s.price}</div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#6e8f61] group-hover:gap-2 transition-all">
                Lihat detail
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
