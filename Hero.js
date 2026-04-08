import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">

          {/* Left */}
          <div className="animate-fade-up">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-brand-200">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by 500+ Healthcare Professionals
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-brand-900 leading-[1.1] mb-6">
              Quality Medicines
              <br />
              <span className="text-brand-500 relative">
                You Can Trust
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                  <path d="M2 4 Q75 1 150 4 Q225 7 298 4" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
              Hext Pharma Private Limited — manufacturing and distributing premium pharmaceutical products across India. 
              From antibiotics to nutraceuticals, every product meets rigorous quality standards.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/products" className="btn-primary text-base py-3.5 px-7 shadow-lg shadow-brand-200">
                View Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/bulk-order" className="btn-outline text-base py-3.5 px-7">
                Bulk Order
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </Link>
            </div>

            {/* Free delivery callout */}
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-slate-100">
              <span className="text-2xl">🚚</span>
              <div>
                <div className="text-xs text-slate-400 font-medium">Pan-India Delivery</div>
                <div className="text-sm font-semibold text-brand-700">FREE on orders above ₹5,000</div>
              </div>
            </div>
          </div>

          {/* Right — decorative card stack */}
          <div className="relative hidden lg:flex items-center justify-center animate-fade-in" style={{animationDelay:'0.2s'}}>
            <div className="relative w-full max-w-sm">
              {/* Background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-100/60 blur-3xl" />

              {/* Main card */}
              <div className="relative card p-8 z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-brand-800 font-display">Quality Assured</div>
                    <div className="text-xs text-slate-400">GMP Certified Products</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Total Products', value: '13+', color: 'bg-blue-50 text-blue-700' },
                    { label: 'Therapy Areas', value: '6', color: 'bg-green-50 text-green-700' },
                    { label: 'Doctor Specialties', value: '6', color: 'bg-purple-50 text-purple-700' },
                    { label: 'Delivery Coverage', value: 'Pan India', color: 'bg-orange-50 text-orange-700' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{item.label}</span>
                      <span className={`badge text-xs ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -top-4 -right-8 card p-4 shadow-lg z-20 animate-fade-up" style={{animationDelay:'0.4s'}}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💊</span>
                  <div>
                    <div className="text-xs font-bold text-brand-800">13 Products</div>
                    <div className="text-[10px] text-slate-400">in our portfolio</div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -bottom-4 -left-8 card p-4 shadow-lg z-20 animate-fade-up" style={{animationDelay:'0.6s'}}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="text-xs font-bold text-brand-800">Free Shipping</div>
                    <div className="text-[10px] text-slate-400">on orders ₹5,000+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
