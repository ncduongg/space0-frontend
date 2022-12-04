import { useEffect, useState } from "react";

const CountDown = ({countDate,countDownClassName}) =>{
      const [now,setNow] = useState(new Date().getTime())
      const [days, setDays] = useState(0);
      const [hours, setHours] = useState(0);
      const [minutes, setMinues] = useState(0);
      const [seconds, setSeconds] = useState(0);
      useEffect(() =>{  
        const intervalId = setInterval(()=>{
          setNow(new Date().getTime())
        },1000)
        const distance = countDate - now;
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinues(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        return () => clearInterval(intervalId);
      },[now])
      return(
        <>
         <span className={countDownClassName ? countDownClassName : '' } >{' '} {days == 0 ? '' : days + ':'} {hours == 0 ? '' : hours + ':'} {minutes == 0 ? '' : minutes + ':'} {seconds}</span>
        </>
      )
}
export default CountDown;