import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
    <div className={'${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer m-6'}> 
      <div className={'${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full'}>
        <div className={'${styles.flexStart} flex-row p-6'}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1"> 
            <span className="text-gradient p-4">Get</span>
            <img src= {arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain mr-6 "/>
          </p>
          <p className="font-poppins font-medium text-[18px] lading-[20px]">
            <span className="text-gradient m-2 ">
              Started
            </span>
          </p>
        </div>
    
        
      </div>

    </div>
  )

export default GetStarted