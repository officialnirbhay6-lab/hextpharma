@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    @apply text-slate-700 bg-white;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Sora', sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2;
  }
  .btn-outline {
    @apply border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2;
  }
  .card {
    @apply bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200;
  }
  .section-title {
    @apply text-3xl md:text-4xl font-bold text-brand-800 font-display;
  }
  .section-sub {
    @apply text-slate-500 text-lg max-w-2xl mx-auto;
  }
  .badge {
    @apply inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full;
  }
}

/* Gradient mesh background */
.hero-bg {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 40%, #e0f2fe 100%);
  position: relative;
}
.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(30,78,162,0.07) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(14,165,233,0.08) 0%, transparent 50%);
  pointer-events: none;
}

/* Grid pattern */
.grid-pattern {
  background-image: linear-gradient(rgba(29,78,216,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(29,78,216,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Pill nav active */
.nav-link {
  @apply relative text-slate-600 font-medium hover:text-brand-600 transition-colors duration-150 text-sm;
}
.nav-link.active {
  @apply text-brand-600;
}

/* Animate on scroll helper */
[data-aos] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-aos].visible {
  opacity: 1;
  transform: translateY(0);
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #93c5fd; border-radius: 3px; }
