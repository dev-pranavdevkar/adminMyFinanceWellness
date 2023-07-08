import React from 'react'
import DescriptionList from './listDescription'
import AddDescription from './addDescription'

export default function Description() {
  return (
    <div>
        <div className=''>
            <AddDescription/>
        </div>
        <div className=''>
            <DescriptionList />
        </div>
    </div>
  )
}
