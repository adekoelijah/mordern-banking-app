import { apple, bill, google } from "../assets";
import styles, {layout} from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] " />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing and invoice</h2>
      <p className={'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] p-6 max-w-[470px] mt-5'}>We make evrything available for you , while you are resting we are doing the work for you</p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
        <img src={apple} alt="apple_store"  className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="apple_store"  className="w-[128px] h-[42px] object-contain cursor-pointer"/>

      </div>

    </div>
  

  </section>
    
  )


export default Billing