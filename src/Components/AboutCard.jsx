import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import { VecServerProcess} from 'react-icons/vsc'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
            <div > {props.icon}</div>
            <h3 className='text-xl font-bold py-4'> {props.heading} </h3>
            <p> {props.text} </p>

          </div>
  )
}

export default AboutCard