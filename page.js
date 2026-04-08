'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { products } from '../../data/products'

const steps = [
  { num: '01', title: 'Sign Up', desc: 'Create your bulk order account with business details.' },
  { num: '02', title: 'Select Products', desc: 'Browse and add products with desired quantities.' },
  { num: '03', title: 'Get Quote', desc: 'Receive competitive wholesale pricing instantly.' },
  { num: '04', title: 'Free Delivery', desc: 'Orders above ₹5,000 — delivered free all over India.' },
]

const perks = [
  { icon: '🚚', title: 'Free Pan-India Delivery', desc: 'Zero shipping cost on all orders above ₹5,000 across India.' },
  { icon: '💰', title: 'Wholesale Pricing', desc: 'Competitive prices for hospitals, clinics, and distributors.' },
  { icon: '⚡', title: '24–48 Hour Dispatch', desc: 'Fast order processing and same-day dispatch for confirmed orders.' },
  { icon: '📋', title: 'GST Invoice', desc: 'Proper GST billing for seamless business accounting.' },
  { icon: '🔄', title: 'Easy Reorder', desc: 'Quick repeat orders with saved product lists.' },
  { icon: '🤝', title: 'Dedicated Manager', desc: 'Assigned account manager for all your queries.' },
]

export default function BulkOrderPage() {
  const [form, setForm]       = useState({
    businessName: '', contactName: '', phone: '', email: '',
    businessType: '', city: '', state: '', pincode: '',
    monthlyRequirement: '', comments: '',
    products: [],
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [step, setStep]           = useState(1)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const toggleProduct = name => {
    setForm(f => ({
      ...f,
      products: f.products.includes(name) ? f.products.filter(p => p !== name) : [...f.products, name],
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-brand-800 py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-700/50 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-900/50 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-brand-700/50 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-600/30">
                🚚 Free Delivery Above ₹5,000
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-5 leading-tight">
                Bulk Order Sign Up
              </h1>
              <p className="text-brand-200 text-lg max-w-xl mx-auto mb-8">
                Register your hospital, clinic, or pharmacy for wholesale access to Hext Pharma's complete product range — with free delivery all over India on orders above ₹5,000.
              </p>
              {/* Stats bar */}
              <div className="inline-flex flex-wrap justify-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
                {[
                  { val: '₹5,000+', label: 'Free delivery threshold' },
                  { val: '13+', label: 'Products available' },
                  { val: '48h', label: 'Dispatch time' },
                  { val: 'PAN India', label: 'Delivery coverage' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-white font-bold font-display text-lg">{s.val}</div>
                    <div className="text-brand-300 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center section-title mb-10">How It Works</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white font-bold font-display text-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-200">
                    {s.num}
                  </div>
                  <h4 className="font-bold text-brand-800 font-display mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-7 text-brand-300 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-14 bg-soft grid-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center section-title mb-10">Bulk Order Benefits</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {perks.map((p, i) => (
                <div key={i} className="card p-5 text-center hover:-translate-y-1 transition-all duration-200 group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h4 className="font-bold text-brand-800 font-display text-xs mb-1.5">{p.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="badge bg-brand-50 text-brand-600 mb-4">Registration</div>
              <h2 className="section-title mb-2">Sign Up for Bulk Orders</h2>
              <p className="text-slate-500 text-sm">Fill in your details and our team will contact you within 24 hours with pricing.</p>
            </div>

            {submitted ? (
              <div className="card p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold font-display text-brand-800 mb-2">You're Registered!</h3>
                <p className="text-slate-500 mb-2">Our bulk order team will call you within <strong>24 hours</strong>.</p>
                <p className="text-slate-400 text-sm mb-6">
                  Remember: <span className="text-brand-600 font-semibold">FREE delivery all over India</span> on orders above ₹5,000!
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ businessName:'', contactName:'', phone:'', email:'', businessType:'', city:'', state:'', pincode:'', monthlyRequirement:'', comments:'', products:[] }); setStep(1) }} className="btn-outline">
                  Register Another Account
                </button>
              </div>
            ) : (
              <div className="card p-8">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2].map(s => (
                    <div key={s} className="flex items-center gap-2 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400'}`}>{s}</div>
                      <div className="flex-1 text-xs font-medium text-slate-500">{s === 1 ? 'Business Details' : 'Product Selection'}</div>
                      {s < 2 && <div className={`h-0.5 w-8 rounded ${step > 1 ? 'bg-brand-400' : 'bg-slate-200'}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Business / Hospital Name *</label>
                          <input type="text" name="businessName" required value={form.businessName} onChange={handleChange}
                            placeholder="City Hospital Pvt Ltd"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Contact Person Name *</label>
                          <input type="text" name="contactName" required value={form.contactName} onChange={handleChange}
                            placeholder="Dr. Ramesh Kumar"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Phone Number *</label>
                          <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email Address</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange}
                            placeholder="info@hospital.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Business Type *</label>
                        <select name="businessType" required value={form.businessType} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all bg-white">
                          <option value="">Select type…</option>
                          <option value="hospital">Hospital / Nursing Home</option>
                          <option value="clinic">Clinic / Polyclinic</option>
                          <option value="pharmacy">Pharmacy / Medical Store</option>
                          <option value="distributor">Pharmaceutical Distributor</option>
                          <option value="doctor">Individual Doctor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">City *</label>
                          <input type="text" name="city" required value={form.city} onChange={handleChange}
                            placeholder="Delhi"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">State *</label>
                          <input type="text" name="state" required value={form.state} onChange={handleChange}
                            placeholder="Delhi"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5">Pincode *</label>
                          <input type="text" name="pincode" required value={form.pincode} onChange={handleChange}
                            placeholder="110032"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Estimated Monthly Requirement</label>
                        <select name="monthlyRequirement" value={form.monthlyRequirement} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all bg-white">
                          <option value="">Select range…</option>
                          <option value="5k-15k">₹5,000 – ₹15,000</option>
                          <option value="15k-50k">₹15,000 – ₹50,000</option>
                          <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                          <option value="1l+">₹1,00,000+</option>
                        </select>
                      </div>
                      <button type="button" onClick={() => setStep(2)} className="w-full btn-primary justify-center py-3.5">
                        Next: Select Products →
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-3">Select Products You're Interested In</label>
                        <div className="grid sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                          {products.map(p => (
                            <label key={p.id} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${form.products.includes(p.name) ? 'border-brand-400 bg-brand-50' : 'border-slate-200 hover:border-brand-200'}`}>
                              <input type="checkbox" className="mt-0.5 accent-blue-600" checked={form.products.includes(p.name)} onChange={() => toggleProduct(p.name)} />
                              <div>
                                <div className="text-xs font-semibold text-brand-800">{p.name}</div>
                                <div className="text-[10px] text-slate-400">MRP ₹{p.mrp.toFixed(2)}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                        {form.products.length > 0 && (
                          <p className="text-xs text-brand-600 font-medium mt-2">✓ {form.products.length} product{form.products.length > 1 ? 's' : ''} selected</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Additional Comments</label>
                        <textarea name="comments" rows={3} value={form.comments} onChange={handleChange}
                          placeholder="Any specific requirements, quantities, or queries…"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none" />
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">
                          ← Back
                        </button>
                        <button type="submit" disabled={loading} className="btn-primary flex-1 justify-center py-3.5 disabled:opacity-60">
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                              </svg>
                              Registering…
                            </>
                          ) : 'Submit Registration 🚀'}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
