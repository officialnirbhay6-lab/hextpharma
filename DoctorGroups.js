import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      {/* Free delivery banner */}
      <div className="bg-brand-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white">
          <span className="text-xl">🚚</span>
          <span>FREE DELIVERY ALL OVER INDIA on bulk orders above</span>
          <span className="bg-white text-brand-600 font-bold px-2 py-0.5 rounded-lg">₹5,000</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold font-display text-base">HP</span>
              </div>
              <div>
                <div className="font-bold font-display text-sm">HEXT PHARMA</div>
                <div className="text-[10px] text-brand-300 tracking-widest uppercase">Private Limited</div>
              </div>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed mb-5">
              Committed to delivering high-quality pharmaceutical products that improve lives across India.
            </p>
            <div className="flex items-center gap-3">
              {['📞','📧','📍'].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-brand-800 flex items-center justify-center text-base cursor-pointer hover:bg-brand-700 transition-colors">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-display text-sm tracking-wider uppercase text-brand-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/',             label: 'Home' },
                { href: '/products',     label: 'Products' },
                { href: '/about',        label: 'About Us' },
                { href: '/contact',      label: 'Contact' },
                { href: '/bulk-order',   label: 'Bulk Order' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-200 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="text-brand-400">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold font-display text-sm tracking-wider uppercase text-brand-300 mb-4">Our Range</h4>
            <ul className="space-y-2.5 text-sm text-brand-200">
              {['Antibiotics', 'Gastro Care', 'Pain Relief', 'Nutraceuticals', 'Haematinics', 'Digestive Enzymes'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-display text-sm tracking-wider uppercase text-brand-300 mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-brand-200">
              <div className="flex gap-3">
                <span className="text-brand-400 mt-0.5 flex-shrink-0">📍</span>
                <p>27/109/3a, Opp Shankar Gali Main Panday Road, Jwala Nagar, Shahdara, Delhi North East, Delhi – 110032</p>
              </div>
              <div className="flex gap-3">
                <span className="text-brand-400 flex-shrink-0">📞</span>
                <div>
                  <p><a href="tel:9065395864" className="hover:text-white transition-colors">9065395864</a></p>
                  <p><a href="tel:9534891576" className="hover:text-white transition-colors">9534891576</a></p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-brand-400 flex-shrink-0">📧</span>
                <a href="mailto:hextpharma73@gmail.com" className="hover:text-white transition-colors break-all">
                  hextpharma73@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-400">
          <p>© {new Date().getFullYear()} Hext Pharma Private Limited. All rights reserved.</p>
          <p>Designed with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  )
}
