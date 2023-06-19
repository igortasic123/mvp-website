import Image from 'next/image'
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection/FirstSection'
import SecondSection from './components/SecondSection/SecondSection'
import ThirdSection from './components/ThirdSection/ThirdSection'
import FourthSection from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div 
    className=""
    >
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />




    </div>
  )
}
