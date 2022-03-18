import ".//App.css"
import Filter from "./companents/Filter";
import { useState } from "react"
import {useForm} from "react-hook-form"
import Siyahi from "./companents/Siyahi";
function App() {
      const [gend, setGend] = useState("")
      const [posi, setPosi] = useState("")
      const { register, handleSubmit, formState: { errors } } = useForm();
    
      const [filterAge, setfilterAge] = useState(0)


   
      const [state, setState] = useState([
            {
                  id: "",
                  name: "",
                  surName: "",
                  position: "",
                  gender: "",
                  age:"" ,
            },
         
      ])


      const [newUsers, setnewUsers] = useState({
            id: new Date().getTime(),
            name: "",
            surName: "",
            position: "",
            gender: "",
            age: "",
      })


      const handleInput = (e) => {
            setnewUsers({ ...newUsers, [e.target.name]: e.target.value })
      }

      const onSubmit = (e) => {
            
            setState([...state, newUsers])
            setnewUsers(
                  {
                        id: new Date().getTime(),
                        name: "",
                        surName: "",
                        position: "",
                        gender: "",
                        age: "",
                  }
            )  
            }
      
      

      return (
            <div>


                  <Filter muqayise={setfilterAge}  genmuq={setGend} positi={setPosi} />
                  <form action="" onSubmit={handleSubmit(onSubmit)} >
                        <div className='inp'>
                              <div className="ish">
                                    <h1>İşçiləri əlavə et</h1>
                              </div>
                            <div className="inpler">
                            <div>
                              <span>İşçinin yaşı:</span>
                              <input {...register("age",{required:true})}   value={newUsers.age} type="number" onChange={handleInput} placeholder='yaşı' name='age'  />
                              {errors.age?.type === "required" && <span style={{color:"red"}}>Bos saxlanila bilmez</span>}
                              </div>
                             <div>
                             <span>İşçinin adı:</span>
                              <input {...register("name",{required:true,pattern: /^[A-Za-z]+$/i,minLength:3,maxLength:13})} type="text"  value={newUsers.name} onChange={handleInput} name='name' placeholder='ad' />
                              {errors.name?.type === "required" && <span style={{color:"red"}}>Bos saxlanila bilmez</span>}
 {errors.name?.type === "pattern" && <span style={{color:"red"}}>Ancaq herf qebul edilir</span>}
 {errors.name?.type === "minLength" && <span style={{color:"red"}}>3 herfden qisa olmaz</span>}
 {errors.name?.type === "maxLength" && <span style={{color:"red"}}>13 herfden uzun olmaz</span>}
                             </div>
                             <div>
                             <span>işçinin soyadı:</span>
                              <input {...register("surName",{required:true,pattern: /^[A-Za-z]+$/i,minLength:3,maxLength:13})}  type="text"  value={newUsers.surName} onChange={handleInput} name='surName' placeholder='familya' />
                              {errors.surName?.type === "required" && <span style={{color:"red"}}>Bos saxlanila bilmez</span>}
 {errors.surName?.type === "pattern" && <span style={{color:"red"}}>Ancaq herf qebul edilir</span>}
 {errors.surName?.type === "minLength" && <span style={{color:"red"}}>3 herfden qisa olmaz</span>}
 {errors.surName?.type === "maxLength" && <span style={{color:"red"}}>13 herfden uzun olmaz</span>}
                             </div>
                              <div>
                              <span>
                              işçinin vəzifəsi:
                             </span>
  
                              <input {...register("position",{required:true})}   value={newUsers.position}  type="text" onChange={handleInput} name='position' placeholder='Vezife'  />
                              {errors.position?.type === "required" && <span style={{color:"red"}}>Bos saxlanila bilmez</span>}
                              </div>
                             <div>
                             <select  name="gender"  value={newUsers.gender} onChange={handleInput} >
                           
                                    <option  value="Gender">Select gender</option>
                                    <option  value="Male">Male</option>``
                                    <option value="Female">Female</option>
                              </select>
                             </div>
                             <div className="inpbtn">
                             <input type="submit" value="yadda saxla" />
                             </div>
                            </div>
                             
                        </div>
                  </form>
                  


                  {state.filter(pos => pos.position.toLowerCase().includes(posi.toLowerCase())).filter(gen => gen.gender.toLowerCase().includes(gend.toLowerCase())).filter(yash => yash.age > filterAge).map(index => (
                        <Siyahi state={state} setState={setState} key={index.id} item={index} />
                  ))}





            </div>
      );
}

export default App
