import * as Yup from "yup";

  const  SinupSchema=Yup.object({
    firstname:Yup.string().min(2).max(20).required("Please enter your firstname !"),
    lastname:Yup.string().min(2).max(20).required("Please enter your lastname !"),
    email:Yup.string().email().required("Please enter your email !"),
    password:Yup.string().min(3).required("Please enter your password !")
  /** for password confirm */  
//   password_confirm:Yup.string().oneOf([Yup.ref('password',null,"password must match"])
})

export default SinupSchema
