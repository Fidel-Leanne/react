import { clients } from "../constants"
import styles from "../style"

const Clients=()=>(

  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client)=>(
      <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] cursor-pointer hover:glow`}>
       <img src={client.logo} alt="client"
       className="sm:w-[192px] w-[100px] object-contain image"/>
      <div/></div>
    ))}
    </div>
  </section>
)


export default Clients
