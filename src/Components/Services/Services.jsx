import React from 'react'
import { FaHeadset, FaShippingFast ,FaMoneyBillWave, FaLock, FaTag} from 'react-icons/fa'

export default function Services() {
    const infoitems=[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:"Free Shipping",
            description:" Get your order delivered with no extra cost"
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/> ,
            title:"Support 24/7",
            description:"We are here to assist you anytime"
        },
        {
            icon:<FaMoneyBillWave className='text-3xl text-red-600'/> ,
            title:"100% Money Back",
            description:"Full refund if you are not satisfied"
        },
        {
            icon:<FaLock className='text-3xl text-red-600'/> ,
            title:"Payment Secure",
            description:"Your payment information is safe with us"
        },
        {
            icon:<FaTag className='text-3xl text-red-600'/> ,
            title:"Discount",
            description:"Enjoy the best prices on our products"
        }
    ]
  return (
    <div className='bg-gray-100'>
    <div className="container mx-auto p-12">
        <h1 className='p-5 text-center font-bold text-4xl'>Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {infoitems.map((i,index)=>(
                <div key={index} className=" flex cursor-pointer flex-col items-center text-clip rounded-lg border shadow-lg p-4 transform transition-transform duration-300 hover:scale-75">
                    {i.icon}
                    <h1 className='mt-4 font-bold text-xl'>{i.title}</h1>
                    <p className='mt-2 text-justify text-gray-600 text-sm'>{i.description}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}
