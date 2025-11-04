import Spline from '@splinetool/react-spline';

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[86vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-8 md:py-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E8DCC1]/70 text-emerald-950 shadow-sm">Digital Creative Agency</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-emerald-950">
            Elevate your brand with 3D flair and social-first growth
          </h1>
          <p className="mt-4 md:mt-6 text-emerald-900/80 text-base md:text-lg leading-relaxed">
            We blend strategy, media buying, and immersive 3D visuals to drive attention and conversions across every platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#/services"
              onClick={onExplore}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#9CAF88] text-white font-semibold shadow hover:shadow-md hover:bg-[#89a377] transition-colors"
            >
              Explore Services
            </a>
            <a
              href="#/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-emerald-900/10 bg-white text-emerald-900 font-semibold hover:bg-emerald-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
