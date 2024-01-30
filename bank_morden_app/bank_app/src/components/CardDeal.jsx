import { card } from "../assets/assets"
import styles , {layout} from "../style"
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Find a better card deal <br className="sm:block hidden"/>
        in a few easy steps
        </h2>

        <p className={`${styles.paragraph} max-w-[470px mt-5]`}>Explore our exclusive card deals and elevate your financial 
            experience with [Your Bank Name]. Whether you're looking for premium rewards, 
            low-interest rates, or exclusive perks, our range of credit and debit cards
            caters to diverse financial needs. 
        </p>  

      <Button styles='mt-5'/>

      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>

    
    </section>
  )


export default CardDeal
