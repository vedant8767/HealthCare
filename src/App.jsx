import { useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import {useSelector,useDispatch} from 'react-redux'
import ServiceItem from './components/ServiceItem'
import {addService} from './features/healthCareSlice'

function App() {
  
  const services = useSelector(state => state.services)

  const dispatch = useDispatch()

  useEffect(()=>{

    const services = JSON.parse(localStorage.getItem("services"))

    if(services && services.length >0){
      services.map((service,index)=>(
       index>=1? dispatch(addService(service)):""
      ))
    }
  
  },[])

  useEffect(()=>{
    localStorage.setItem("services",JSON.stringify(services))
  },[services])

  return (
    <div>
      <h1 className='text-4xl font-semibold text-blue-500 mt-6'>HealthCare Services</h1>
      <Form></Form>
      <div className='mt-5'>
      {services.length>0
        ?(services.map(
          (service)=><ServiceItem key={service.id} service={service}/>))
        :<h1 className='text-black font-semibold text-xl'>Add Some Service</h1>}
      </div>
    </div>
  )
}

export default App
