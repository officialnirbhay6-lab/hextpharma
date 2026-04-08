export default function TrustBadges() {
  const badges = [
    { icon: '🏭', title: 'GMP Certified', sub: 'Manufacturing Excellence' },
    { icon: '🧪', title: 'Quality Tested', sub: 'Every Batch Verified' },
    { icon: '🚚', title: 'Pan-India Delivery', sub: 'Free above ₹5,000' },
    { icon: '👨‍⚕️', title: '500+ Doctors', sub: 'Trust Our Products' },
    { icon: '⚡', title: 'Fast Dispatch', sub: '24–48 Hour Processing' },
    { icon: '🔒', title: 'Secure Orders', sub: 'Safe & Transparent' },
  ]

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-soft hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all duration-200 group cursor-default"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{badge.icon}</span>
              <div className="font-semibold text-brand-800 text-sm font-display">{badge.title}</div>
              <div className="text-xs text-slate-400 mt-1">{badge.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
