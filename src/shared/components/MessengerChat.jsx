import { useEffect, version } from "react"

const Messenger = () =>{

 useEffect(()=>{
    // load Facebook SDK
    if(document.querySelector("#facebook-jdssdk")) return
    
    window.fbAsyncInit = function(){
        window.FB.init({
            xfbml: true,
            version: "v19.0"
        })
    }

    const script = document.createElement("script")
    script.id = "facebook-jssdk"
    script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    document.body.appendChild(script)

 }, [])

 return(
    <>
    <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="702948410077187"
        theme_color="#0084FF"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Hi! Please log in to chat with us."
      ></div>
    </>
 )

}

export default Messenger

