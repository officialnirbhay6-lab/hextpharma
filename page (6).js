import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import Services from '../components/Services'
import FeaturedProducts from '../components/FeaturedProducts'
import BulkOrderBanner from '../components/BulkOrderBanner'
import DoctorGroups from '../components/DoctorGroups'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <FeaturedProducts />
        <BulkOrderBanner />
        <DoctorGroups />
      </main>
      <Footer />
    </>
  )
}
