import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {addService,updateService,deleteService,upadteStateidtoupdate,setupadtedmsg,isidtoupdatecheck} from '../features/healthCareSlice'

export default function Form(){

    const regex = /^\d+$/;

    const [serviceName,setServiceName] = useState("")
    const [serviceDescription,setServiceDescription] = useState("")
    const [servicePrice,setServicePrice] = useState("")

    const dispatch = useDispatch()

    const services = useSelector(state => state.services)
    const idtoupdate = useSelector(state => state.idtoupdate)
    const istoupdate = useSelector(state=>state.istoupadte)

    const addSubmit =(e)=>{
        e.preventDefault()
        if(serviceName==="" || serviceDescription==="" || servicePrice===""){
            document.getElementById('msg').style.display = "block"
            return
        }
        if(regex.test(servicePrice)){
            dispatch(addService({name:serviceName,description:serviceDescription,price:servicePrice}))
            setServiceName("")
            setServiceDescription("")
            setServicePrice("")
            document.getElementById('msg').style.display = "none"
        }else{
            alert("Enter Number Value for Price and avoid spaces")
        }
    }

    const update =(e)=>{
        e.preventDefault()
        if(serviceName==="" || serviceDescription==="" || servicePrice===""){
            document.getElementById('msg').style.display = "block"
            return
        }
        console.log(regex.test(servicePrice))
        if(regex.test(servicePrice)){
            dispatch(updateService({id:idtoupdate,name:serviceName,description:serviceDescription,price:servicePrice}))
            dispatch(isidtoupdatecheck())
            dispatch(setupadtedmsg({name:serviceName,description:serviceDescription,price:servicePrice}))
            setServiceName("")
            setServiceDescription("")
            setServicePrice("")
            document.getElementById('msg').style.display = "none"
        }else{
            alert("Enter Number Value for Price and avoid spaces")
        }
        
    }

    let checkformsubmit=addSubmit

    useEffect(()=>{
        if(!istoupdate){
            console.log("perform add"); 
            checkformsubmit=addSubmit
        }
        else{
            console.log("perform update");
            checkformsubmit=update
        }
    },[istoupdate])

    useEffect(()=>{
        if(istoupdate){
            let name = ""
            let description =""
            let price =""
            services.map((service)=>(
                service.id==idtoupdate?name=service.name:'',
                service.id==idtoupdate?description=service.description:'',
                service.id==idtoupdate?price=service.price:''
            ))
            document.getElementById('name').value=name
            document.getElementById('desc').value=description
            document.getElementById('price').value=price
        }
    },[istoupdate])
    return(
        <div className="mt-7">
            <form onSubmit={istoupdate?update:addSubmit}>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <input
                     className="w-full max-w-lg px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out text-gray-700 bg-white sm:text-base text-sm"
                     id="name" type="text" placeholder="Name"  value={serviceName} onChange={(e)=>setServiceName(e.target.value)}/>
                    <input 
                    className="w-full max-w-lg px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out text-gray-700 bg-white sm:text-base text-sm"
                    id="desc" type="text" placeholder="Desc" value={serviceDescription} onChange={(e)=>setServiceDescription(e.target.value)}/>
                    <input 
                    className="w-full max-w-lg px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out text-gray-700 bg-white sm:text-base text-sm"
                    id="price" type="text" placeholder="price"  value={servicePrice} onChange={(e)=>setServicePrice(e.target.value)}/>
                    <button className="w-full max-w-xs px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out sm:text-base text-sm" type="submit">{istoupdate?'Update Service':'Add Service'}</button>
                    <h2 id="msg" className="hidden text-xl text-red-400">All Field should be Filled</h2>
                </div>
            </form>
        </div>
    )
}