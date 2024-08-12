import { useState } from 'react'
import './index.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios';

type FormValidationType = {
  number: number;
}

function App() {
  const [response, setResponse] = useState();
  const [type, setType] = useState("triangle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValidationType>()

  const onSubmit: SubmitHandler<FormValidationType> = async (data) => {
    const res = await axios.post(`http://localhost:5000/${type}`, { number: data.number })
    setResponse(res.data.data)
  }

  

  return (
    <section className='main-container'>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className='mb-4' {...register("number", { required: true })} />
        {/* Terms 1 */}
        {errors.number && <p className='mb-4'>This field is required</p>}
        <div className="flex-container mb-4">
          <button onClick={() => setType("triangle")}>Generate Segitiga</button>
          <button onClick={() => setType("odd")}>Generate Bilangan Ganjil</button>
          {/* <button>Generate Bilangan Prima</button> */}
        </div>
        <h1>Result:</h1>
        <p>{response}</p>
      </form>
    </section>
  )
}

export default App
