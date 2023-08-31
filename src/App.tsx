import { useState } from 'react'

import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import {useForm} from 'react-hook-form'

interface FormData{

  name: string
  pass: string

}

function App() {

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()
 

  const onSubmit = (data: FormData) => {
      console.log(data);    
      window.alert(JSON.stringify(data))
      
  }
  
  return (
    <div className='
    h-screen 
    flex 
    justify-content-center
    align-items-center' 
    
    style={{backgroundColor: "#242424"}}
    >

      <div

        about='container' 
        className='w-6 h-30rem flex align-items-center justify-content-center flex-column gap-7'
        style={{
          background: "Linear-gradient(135deg, rgba(255,255,255,0), rgba(255, 255, 255, 0))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px, solid, rgba(255,255,255, 0.18",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37"
        }}
      >

              <h1 className='text-50 underline'>Tela de Login</h1>    

<div className='w-full flex align-items-center justify-content-center flex-column gap-5'>

        <div className='flex w-5 flex-column'>
          <span className='p-float-label w-full'>
         
            <InputText  id='InputName' 
            className={`w-full bg-black-alpha-30 font-semibold text-50 ${errors.name && "p-invalid" }`} 

            {...register("name", {required: true})}
            />
            
            <label htmlFor="InputName" className='text-50 font-bold text-md'>UserName</label>
         </span>
            {errors.name?.type === "required" && (<small id="InputName-help" className='text-red-600'>Campo Nome é Obrigatorio</small>)}
      </div>     
        
 
      <div className='flex w-5 flex-column'>
          <span className='p-float-label w-full'>
  
            <InputText
              id='pass' 
              type='password'
              {...register("pass", {required: true})}
              className={`w-full bg-black-alpha-30 font-semibold text-50 ${errors.pass && "p-invalid" }`} 
            />

            <label htmlFor="pass" className='text-50 font-bold text-md'>Password</label>
          
          </span>
            {errors.pass?.type === "required" && (<small id="InputName-help" className='text-red-600'>Campo Password é Obrigatorio</small>)}
      </div>
    
</div>
      <Button label='Logar' onClick={() => handleSubmit(onSubmit)()} className='w-3 border-round-3xl bg-black-alpha-30 border-50'/>
      
        
      </div>        
      

    </div>
  )
}

export default App
