import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';

const SERVICE_CONTENT = {
  'facebook-ads': {
    title: 'Facebook Ads',
    body: `Maksimalkan jangkauan dan relevansi dengan segmentasi audiens, uji kreatif, dan funnel konversi yang rapi. Struktur prospecting, retargeting, dan re‑engagement yang konsisten meningkatkan performa.`,
    bullets: [
      'Arsitektur campaign full‑funnel',
      'Iterasi kreatif dan visual yang menghentikan scroll',
      'Pengaturan CAPI + pixel untuk atribusi',
      'Dynamic Product Ads untuk katalog',
    ],
    pricing: {
      starter: 'Rp 5.000.000/bulan',
      growth: 'Rp 9.000.000/bulan',
      scale: 'Rp 15.000.000/bulan',
    },
  },
  'instagram-ads': {
    title: 'Instagram Ads',
    body: `Kami merancang cerita Reels, carousel, dan creative UGC yang terasa native namun mendorong hasil di Feed, Explore, dan Stories.`,
    bullets: [
      'Strategi Reels‑first',
      'Produksi UGC & creator sourcing',
      'Format yang dioptimalkan per placement',
      'Analitik kreatif & iterasi cepat',
    ],
    pricing: {
      starter: 'Rp 5.000.000/bulan',
      growth: 'Rp 8.500.000/bulan',
      scale: 'Rp 14.000.000/bulan',
    },
  },
  'tiktok-ads': {
    title: 'TikTok Ads',
    body: `Kreatif yang peka tren dan native untuk menunggangi algoritma. Kombinasi spark ads, hook kuat, dan iterasi cepat demi efisiensi skala.`,
    bullets: [
      'Sistem creative berfokus hook',
      'Spark ads & whitelisting creator',
      'Pelacakan event & atribusi',
      'Ritme test‑and‑learn yang cepat',
    ],
    pricing: {
      starter: 'Rp 6.000.000/bulan',
      growth: 'Rp 9.500.000/bulan',
      scale: 'Rp 16.000.000/bulan',
    },
  },
  'google-ads': {
    title: 'Google Ads',
    body: `Search, Shopping, Display, dan Performance Max bekerja bersama untuk menangkap intent dan mendorong pertumbuhan profit.`,
    bullets: [
      'Pemetaan intent kata kunci yang granular',
      'Merchant Center & hygiene feed',
      'PMax dengan asset group yang kuat',
      'Rekomendasi CRO landing page',
    ],
    pricing: {
      starter: 'Rp 6.500.000/bulan',
      growth: 'Rp 10.000.000/bulan',
      scale: 'Rp 17.000.000/bulan',
    },
  },
  'youtube-ads': {
    title: 'YouTube Ads',
    body: `Dari awareness ke action dengan format skippable, non‑skippable, dan Shorts. Naskah dan storyboard yang menyampaikan pesan dalam 5 detik pertama.`,
    bullets: [
      'Strategi YouTube full‑funnel',
      'Scripting & storyboard kreatif',
      'Audience layering & exclusions',
      'Brand lift & view‑through metrics',
    ],
    pricing: {
      starter: 'Rp 6.000.000/bulan',
      growth: 'Rp 9.500.000/bulan',
      scale: 'Rp 16.000.000/bulan',
    },
  },
  'linkedin-ads': {
    title: 'LinkedIn Ads',
    body: `ABM untuk B2B. Penargetan berdasarkan firmografis & persona pembeli, fokus ke pipeline berkualitas.`,
    bullets: [
      'Target ABM & list matching',
      'Lead gen forms & routing',
      'Retargeting & content syndication',
      'Sinkronisasi CRM & UTM governance',
    ],
    pricing: {
      starter: 'Rp 7.000.000/bulan',
      growth: 'Rp 11.000.000/bulan',
      scale: 'Rp 18.000.000/bulan',
    },
  },
  'twitter-ads': {
    title: 'Twitter/X Ads',
    body: `Menang di momen percakapan real‑time dengan creative yang terasa native di timeline.`,
    bullets: [
      'Targeting percakapan & keyword',
      'Creative selaras tren',
      'Kontrol brand safety',
      'Kerangka testing berkelanjutan',
    ],
    pricing: {
      starter: 'Rp 5.000.000/bulan',
      growth: 'Rp 8.000.000/bulan',
      scale: 'Rp 13.000.000/bulan',
    },
  },
  'marketplace-ads': {
    title: 'Marketplace Ads',
    body: `Shopee, Tokopedia, dan media marketplace untuk menggerakkan inventory dan mempertahankan share of shelf.`,
    bullets: [
      'Sinkronisasi kalender promo',
      'Optimasi storefront & katalog',
      'Keyword & pertahanan kompetitor',
      'Rating, ulasan, dan bundling',
    ],
    pricing: {
      starter: 'Rp 5.500.000/bulan',
      growth: 'Rp 9.000.000/bulan',
      scale: 'Rp 14.500.000/bulan',
    },
  },
  seo: {
    title: 'SEO (Search Engine Optimisation)',
    body: `SEO teknis, on‑page, dan konten dengan roadmap praktis. Memperkuat pondasi dan menerbitkan konten yang mengakselerasi permintaan.`,
    bullets: [
      'Audit teknis & perbaikan',
      'Arsitektur konten semantik',
      'Operasional editorial & brief',
      'Earning link & digital PR',
    ],
    pricing: {
      starter: 'Rp 4.500.000/bulan',
      growth: 'Rp 7.500.000/bulan',
      scale: 'Rp 12.000.000/bulan',
    },
  },
  'publish-media': {
    title: 'Publish Media Nasional',
    body: `Penempatan PR ujung ke ujung di media nasional untuk membangun otoritas & social proof bagi peluncuran, milestone, dan POV leadership.`,
    bullets: [
      'Penyusunan media list & outreach',
      'Press kit & newsroom setup',
      'Penempatan thought leadership',
      'Pelacakan liputan & pelaporan',
    ],
    pricing: {
      starter: 'Rp 8.000.000/paket',
      growth: 'Rp 12.000.000/paket',
      scale: 'Rp 20.000.000/paket',
    },
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
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Tentang Kami</h2>
          <p className="mt-4 text-emerald-900/80 leading-relaxed">
            Kami adalah agensi kreatif digital yang memadukan performa media dengan desain 3D premium. Misi kami: membantu brand modern berkomunikasi dengan jelas, indah, dan berdampak terukur di social, search, dan marketplace.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Platform Dikelola" value="10+" />
            <Stat label="Rata-rata Kenaikan ROAS" value="2,7x" />
            <Stat label="Proyek Terselesaikan" value="200+" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">Hubungi Kami</h2>
            <p className="mt-4 text-emerald-900/80">Ceritakan tujuan, timeline, dan kisaran anggaran Anda. Kami akan kembali dengan rencana yang disesuaikan.</p>
            <div className="mt-6 p-5 rounded-xl bg-[#F5EDE0] border border-emerald-900/10">
              <p className="text-sm text-emerald-900/80">Prefer email? Kirim ke</p>
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
              const subject = encodeURIComponent(`Permintaan proyek dari ${name}`);
              const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${msg}`);
              window.location.href = `mailto:hello@sageandsand.agency?subject=${subject}&body=${body}`;
            }}
          >
            <div>
              <label className="block text-sm font-medium text-emerald-900/80">Nama</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9CAF88]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900/80">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9CAF88]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900/80">Pesan</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9CAF88]"></textarea>
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#9CAF88] text-white font-semibold hover:bg-[#89a377] transition-colors">Kirim Pesan</button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function PriceCard({ tier, price, features, highlighted = false }) {
  return (
    <div className={`rounded-xl border border-emerald-900/10 p-5 ${highlighted ? 'bg-[#F5EDE0]' : 'bg-white'} shadow-sm`}>
      <div className="text-sm font-medium text-emerald-900/70">{tier}</div>
      <div className="mt-1 text-2xl font-bold text-emerald-950">{price}</div>
      <ul className="mt-3 space-y-2 text-sm text-emerald-900/80">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9CAF88]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceDetail({ slug }) {
  const data = SERVICE_CONTENT[slug];
  if (!data) return null;
  const tierFeatures = {
    starter: ['Setup & struktur campaign', '2–3 variasi kreatif/bulan', 'Laporan bulanan'],
    growth: ['Semua di Starter', 'Optimalisasi mingguan', '5–7 variasi kreatif/bulan'],
    scale: ['Semua di Growth', 'Eksperimen multi‑channel', 'Laporan kinerja mendalam'],
  };
  return (
    <section className="pt-28 pb-16">
      <Container>
        <div className="max-w-3xl">
          <a href="#/services" className="inline-flex items-center gap-2 text-sm text-emerald-900/70 hover:text-emerald-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Kembali ke Layanan
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
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-emerald-950">Paket & Harga</h3>
          <p className="mt-2 text-emerald-900/70">Harga jasa manajemen belum termasuk biaya iklan (ad spend). Paket dapat disesuaikan kebutuhan.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <PriceCard tier="Starter" price={data.pricing.starter} features={tierFeatures.starter} />
            <PriceCard tier="Growth" price={data.pricing.growth} features={tierFeatures.growth} highlighted />
            <PriceCard tier="Scale" price={data.pricing.scale} features={tierFeatures.scale} />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#9CAF88] text-white font-semibold hover:bg-[#89a377]">Mulai Proyek</a>
          <a href="#/services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-emerald-900/10 bg-white text-emerald-900 font-semibold hover:bg-emerald-50">Lihat Layanan Lain</a>
        </div>
      </Container>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid onSelect={(slug) => (window.location.hash = `#/services/${slug}`)} />
      <section className="py-16">
        <Container>
          <div className="rounded-2xl overflow-hidden border border-emerald-900/10 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-emerald-950">Mengapa brand memilih kami</h3>
                <ul className="mt-4 space-y-3 text-emerald-900/80">
                  <li className="flex gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#E8DCC1]"/><span>Sistem kreatif berfokus 3D yang standout di feed.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#9CAF88]"/><span>Kerangka performa untuk test, learn, dan scale.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#cfd7b8]"/><span>Pelaporan jelas, data rapi, dan insight yang dapat ditindaklanjuti.</span></li>
                </ul>
                <a href="#/about" className="mt-6 inline-flex items-center px-5 py-3 rounded-lg border border-emerald-900/10 bg-white text-emerald-900 font-semibold hover:bg-emerald-50">Pelajari pendekatan kami</a>
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-br from-[#F5EDE0] to-white">
                <div className="h-full rounded-xl border border-emerald-900/10 p-6">
                  <h4 className="text-lg font-semibold text-emerald-950">Platform yang kami kuasai</h4>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-emerald-900/80">
                    {['Facebook', 'Instagram', 'TikTok', 'Google', 'YouTube', 'LinkedIn', 'Twitter/X', 'Marketplace', 'SEO', 'PR'].map((p) => (
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
    const parts = h.split('/').filter(Boolean);
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
              <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">Layanan</h1>
              <p className="mt-3 text-emerald-900/80 max-w-2xl">Pilih kanal untuk melihat detail lengkap beserta harga. Tiap layanan terintegrasi dengan mesin kreatif dan analitik kami.</p>
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
