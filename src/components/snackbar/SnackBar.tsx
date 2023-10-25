import React, { useState , forwardRef , useImperativeHandle } from 'react'
import "./snackbar.css"
import {BiError} from "react-icons/bi"
import {AiFillCloseCircle} from "react-icons/ai"

const SnackBar =  forwardRef((_ , ref) => {
    const [showSnackBar, setShowSnackBar] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        show(){
            setShowSnackBar(true)
        }
      })
    )

  return (
    <div   className={ showSnackBar ? "snackbar" : "hide-snackbar"  } >
        <div className="error-symbol"><BiError/></div>
        <div className="error-message">Oops Something went wrong !!! . you can even call us directly or whatsapp us to <a href='' > +91 6303467186</a></div>
        <div className="close-snackbar" onClick={ () => {  setShowSnackBar(false) } } ><AiFillCloseCircle/></div>
    </div>
  )
})

export default SnackBar