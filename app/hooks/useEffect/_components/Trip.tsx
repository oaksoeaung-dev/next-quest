import { CircleDollarSign, MapIcon } from 'lucide-react'
import React from 'react'
import { TripType } from '../_type/TripType'

const Trip = ({trip} : {trip: TripType}) => {
  return (
    <li className='space-y-3 p-5 max-w-xs bg-blue-200 rounded-lg'>
      <div className='flex gap-2 items-center'>
        <MapIcon className='text-gray-800'/>
        <span className='font-bold text-gray-800'>{trip.name}</span>
      </div>
      <div className='flex gap-2 items-center'>
        <CircleDollarSign className='text-gray-800'/>
        <span className='font-bold text-gray-800'>{trip.price}</span>
      </div>
    </li>
  )
}

export default Trip