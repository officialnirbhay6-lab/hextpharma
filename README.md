import Link from 'next/link'
import { products } from '../data/products'

const categoryColors = {
  'Antibiotic':    'bg-red-50 text-red-600',
  'Gastro':        'bg-yellow-50 text-yellow-700',
  'Digestive':     'bg-green-50 text-green-700',
  'Pain Relief':   'bg-orange-50 text-orange-700',
  'Nutraceutical': 'bg-purple-50 text-purple-700',
  'Haematinics':   'bg-rose-50 text-rose-700',
}

export default function FeaturedProducts() {
  const featured = products.slice(0, 6)

  return (
    <section className="py-20 bg-soft grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge bg-brand-100 text-brand-600 mb-4">Product Range</div>
          <h2 className="section-title mb-4">Our Pharmaceutical Products</h2>
          <p className="section-sub text-center">
            Carefully formulated medicines across 6 therapy areas, trusted by doctors nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map(product => (
            <div key={product.id} className="card p-6 hover:-translate-y-1 transition-all duration-200 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`badge ${categoryColors[product.category] || 'bg-slate-100 text-slate-600'} text-xs`}>
                  {product.category}
                </div>
                <span className={`badge text-xs ${product.badge === 'Rx' ? 'bg-brand-50 text-brand-700' : 'bg-green-50 text-green-700'}`}>
                  {product.badge}
                </span>
              </div>

              <div className="mb-1">
                <h3 className="font-bold text-brand-800 font-display text-base group-hover:text-brand-600 transition-colors">
                  {product.name}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed line-clamp-2">{product.composition}</p>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{product.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="text-xs text-slate-400">MRP</div>
                  <div className="font-bold text-brand-700 font-display text-lg">₹{product.mrp.toFixed(2)}</div>
                </div>
                <Link href={`/products#${product.id}`} className="text-xs font-semibold text-brand-500 hover:text-brand-700 flex items-center gap-1 transition-colors">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="btn-primary">
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
