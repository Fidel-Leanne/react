import React from 'react'
import styles from './style'
import { Navbar,Hero, Billing,Business,CTA,CardDeal,Clients,Footer,Stats,Testimonials } from './components'



const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
       <div className={`${styles.boxWidth}`}>
       <Navbar/>
       </div>

       <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
        <Hero/>
        </div>
       </div>

       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default App
