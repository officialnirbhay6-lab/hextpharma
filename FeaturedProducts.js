import Link from 'next/link'

export default function BulkOrderBanner() {
  return (
    <section className="py-16 bg-brand-700 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-600/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-800/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-500/30 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-4 border border-brand-400/30">
              🎉 Special Offer
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
              Bulk Orders?<br />
              <span className="text-blue-200">We've Got You Covered.</span>
            </h2>
            <p className="text-brand-200 max-w-lg text-base leading-relaxed">
              Sign up for a bulk order account and enjoy <strong className="text-white">FREE delivery all over India</strong> on every order above ₹5,000. 
              Best prices for hospitals, clinics, and pharmaceutical distributors.
            </p>
          </div>

          {/* Right — stats + CTA */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: '₹5K+', label: 'Free Delivery', icon: '🚚' },
                { value: '13+', label: 'Products', icon: '💊' },
                { value: '48h', label: 'Dispatch', icon: '⚡' },
              ].map(stat => (
                <div key={stat.label} className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-white font-bold font-display text-lg">{stat.value}</div>
                  <div className="text-brand-200 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link href="/bulk-order" className="w-full flex items-center justify-center gap-2 bg-white text-brand-700 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-colors shadow-xl text-base">
              Register for Bulk Orders
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
