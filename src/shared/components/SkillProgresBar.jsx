import React, { useEffect, useRef, useState } from "react";

const SkillProgressBar = ({ skill, percent }) =>{

 const [animateProgress, setAnimateProgres] = useState(0)
 const progressRef = useRef(null)

 useEffect(()=>{

    const observer = new IntersectionObserver(([entry]) =>{
        if(entry.isIntersecting){
            let progress = 0
            const interval = setInterval(() =>{
                progress += 1
                setAnimateProgres(progress)
                if(progress >= percent) clearInterval(interval)
            }, 10) //speed of the animation
        }
    }, { threshold: 0.5 })

    if (progressRef.current) observer.observe(progressRef.current);
   
    // cleanup
    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    }

  }, [percent])

  return(
    <>
    <div ref={progressRef} className="mb-4">
      <h4>{skill}</h4>
      <span>{Math.round(animateProgress)}%</span>
      <progress value={animateProgress} max={100} className="form-control">
        {Math.round(animateProgress)}%
      </progress>
    </div> 
    </>
  )
}


export default SkillProgressBar;