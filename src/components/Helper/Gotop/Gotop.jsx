import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa'

const Gotop = () => {
    const [scrollPosition, setSrollPosition] = useState(0);
    const [showGoTop, setshowGoTop] = useState("gotop__hidden");

    const scrollPositionHandler = () => {
        const position = document.documentElement.scrollTop;
        setSrollPosition(position);

        if(scrollPosition > 400) {
            return setshowGoTop("gotop__show");
        }
        else if (scrollPosition < 400) {
            return setshowGoTop("gotop__hidden");
        }
    }

    const scrollToTopHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollPositionHandler);
    })

  return (
    <div className={`gotop ${showGoTop}`} onClick={scrollToTopHandler}>
        <FaAngleUp className='gotop__icon' />
    </div>
  )
}

export default Gotop