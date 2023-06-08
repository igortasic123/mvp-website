import Image from 'next/image'
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection/FirstSection'

export default function Home() {
  return (
    <div 
    className='
    bg-gradient-to-r
    from-blue-300
    to-blue-500
'

    
    >
      <Navbar />
      <FirstSection />


    </div>
  )
}
