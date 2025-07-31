import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const TypingEffect = () =>{
  const typedRef = useRef(null)
  const typedInstance = useRef(null)
  
  useEffect(() =>{

   typedInstance.current = new Typed(typedRef.current,{
    strings: ["Hi There!", "I'm Jeff Ronald G. Gamasan", "Front-End Web developer and", "ReactJS Developer", "PHP+MySQL, Laravel, CodeIgniter Developer"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
   })
   
   return () => {
        typedInstance.current.destroy();
    };
  }, [])
  
    return <span ref={typedRef} className="d-block text-start text-light fw-bold"></span>
}

export default TypingEffect