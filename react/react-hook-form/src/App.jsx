import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const [name, setName] = useState()

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: "",
  //   password: ""
  // })
  // function handleChange(e) {
  //   const { name, value } = e.target
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }
  // function delay() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('promise fulfiled')
  //       resolve()
  //     }, 4000);
  //   })
  // }
  // async function submit() {
  //   await delay()
  //   console.log(formData)
  // }

  // step 3 

  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 4000);
    })
  }

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    await delay()
    console.log(data)
  };

  return (
    <div>
      {/* step 1  */}
      {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {name} */}

      {/* step 2  */}

      {/* <input type="text" name="name" placeholder='name' value={formData.name} onChange={handleChange} /> <br />

      <input type="email" name="email" placeholder='email' value={formData.email} onChange={handleChange} /> <br />

      <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleChange} /> <br />

      <input type="submit" onClick={submit} />
      <div>
        {formData.name} <br />
        {formData.email} <br />
        {formData.password}
      </div> */}


      {/* step 3 using react hoook form  */}

      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder='name' {...register("name", { required: { value: true, message: 'this field is requried' } })} /> <br />
        {errors.name && <div style={{ color: 'red', fontSize: "10px" }}>{errors.name.message}</div>}
        <input type="email" placeholder='email' {...register("email", { required: { value: true, message: 'this filed is requried' } })} /> <br />
        {errors.email && <div>{errors.email.message}</div>}

        <input type="password" placeholder='password' {...register("password", { required: { value: true, message: "enter password" }, minLength: { value: '4', message: 'minimun length is 4' } })} /> <br />
        {errors.password && <div>{errors.password.message}</div>}

        <input disabled={isSubmitting} type="submit" />
        {isSubmitting && <div>...loading</div>}
      </form>


    </div>
  )
}

export default App
