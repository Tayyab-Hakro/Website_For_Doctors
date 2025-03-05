import AboutUs from "../Components/AboutUs"
import HeroSection from "../Components/HeroSection"
import Newsletter from "../Components/Newsletter"
import Specaility from "../Components/Specaility"

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <Specaility/>
        <Newsletter/>
    </div>
  )
}

export default Home