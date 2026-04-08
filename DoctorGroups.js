import { doctorGroups } from '../data/products'

export default function DoctorGroups() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge bg-green-50 text-green-700 mb-4">Specialty-Wise</div>
          <h2 className="section-title mb-4">Products by Doctor Specialty</h2>
          <p className="section-sub text-center">
            We offer curated product ranges for each medical specialty to streamline your prescription choices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorGroups.map((group, i) => (
            <div key={i} className="card p-6 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{group.icon}</div>
                <div>
                  <h3 className="font-bold text-brand-800 font-display text-base">{group.group}</h3>
                  <div className="text-xs text-slate-400">{group.products.length} products</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.products.slice(0, 5).map(p => (
                  <span key={p} className="text-[11px] bg-brand-50 text-brand-700 px-2.5 py-1 rounded-lg font-medium">
                    {p}
                  </span>
                ))}
                {group.products.length > 5 && (
                  <span className="text-[11px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg font-medium">
                    +{group.products.length - 5} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
