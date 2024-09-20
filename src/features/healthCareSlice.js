import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    services :[
        {
            id:1,
            name:"HealthCare Service",
            description:"Virtual healthcare consultations anytime , anywhere",
            price:"1000"
        }
    ],
    idtoupdate:1,
    istoupadte:false,
    updatemsg:{
        name:"",
        description:"",
        price:"0"
    }
}

export const healthCareSlice = createSlice({
    name:"healthcare",
    initialState,
    reducers:{
        addService:(state,action)=>{
            const service = {
                id:nanoid(),
                name:action.payload.name,
                description:action.payload.description,
                price:action.payload.price,
            }
            state.services.push(service)
            console.log(state.services.length)
        },
        deleteService:(state,action)=>{
            console.log(action.payload)
            state.services = state.services.filter((service)=>(
                // console.log(todo.id)
                service.id !== action.payload
            ))
            console.log(state.services.length);
        },
        upadteStateidtoupdate:(state,action)=>{
            state.idtoupdate=action.payload
        },
        isidtoupdatecheck:(state,action)=>{
            state.istoupadte=!state.istoupadte
        },
        setupadtedmsg:(state,action)=>{
            state.updatemsg.name=action.payload.name
            state.updatemsg.description=action.payload.description
            state.updatemsg.price=action.payload.price
        },
        updateService:(state,action)=>{
            console.log("UpdateCalled")
            state.services = state.services.map((service)=>(
                service.id===action.payload.id ?{...service,
                    name:action.payload.name,
                    description:action.payload.description,
                    price:action.payload.price}:service
            ))
        }
    }
})

export const {addService,deleteService,updateService,isidtoupdatecheck,upadteStateidtoupdate,setupadtedmsg} = healthCareSlice.actions

export default healthCareSlice.reducer