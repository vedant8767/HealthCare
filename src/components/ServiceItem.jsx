import {useSelector,useDispatch} from 'react-redux'
import {deleteService,upadteStateidtoupdate,isidtoupdatecheck} from '../features/healthCareSlice'

export default function ServiceItem({service}){

    const dispatch = useDispatch()

    const updatestate = ()=>{
        dispatch(upadteStateidtoupdate(service.id))
        dispatch(isidtoupdatecheck())
    }
    return (
        <div className="mt-5 p-4 bg-gradient-to-r bg-gray-400 rounded-lg shadow-lg max-w-sm mx-auto cursor-pointer">
            <h1 className="text-lg font-bold text-gray-900 mb-2">Service Name : {service.name}</h1>
            <h2 className="text-black-700 font-semibold mb-3 text-base">Service Description : {service.description}</h2>
            <h2 className="text-black-700 font-semibold mb-4 text-base">Service Price : {service.price} 💸</h2>
            <div className="flex space-x-3 justify-center">
                <button
                className="bg-blue-500 text-white font-medium px-3 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 ease-in-out text-sm"
                onClick={updatestate}>
                ✏️ Update
                </button>
                <button
                className="bg-red-500 text-white font-medium px-3 py-2 rounded-md shadow-sm hover:bg-red-600 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-300 ease-in-out flex items-center space-x-1 text-sm"
                onClick={()=>dispatch(deleteService(service.id))}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                    <span>Delete</span>
                </button>
            </div>
        </div>



    )
}