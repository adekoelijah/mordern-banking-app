import { card } from "../assets";
import styles,{layout} from "../style";
import Button from "./Button";

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in a few easy step</h2>
        <p className={'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] p-6 max-w-[470px] mt-5'}>We are working tirelessly to satisfy your needs</p>
        <Button styles="mt-10 "/>

      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card"  className="w-[100%] h-[100%]"/>

      </div>

    </section>
  )


export default CardDeal