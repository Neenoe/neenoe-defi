import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import { VscServerProcess} from 'react-icons/vsc'
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className=' w-full   bg-black text-white text-center'>
        <div className='max-w-[1024px] mx-auto px-4 py-16'>
        <div>
            <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
            <p className='py-4 text-xl'>The Defi protocol empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AboutCard icon={<SiHiveBlockchain className='bg-[#00d8ff] inline-flex rounded-full p-2' size={40} />} heading='Reliable, tamper-proof network' text='Use Decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract' />
        
            <AboutCard icon={<SiStrapi className='bg-[#00d8ff] inline-flex rounded-full p-2' size={40} />} heading='Reliable, tamper-proof network' text='Use Decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract' />
            <AboutCard icon={<SiFsecure className='bg-[#00d8ff] inline-flex rounded-full p-2' size={40} />} heading='Reliable, tamper-proof network' text='Use Decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract' />
            <AboutCard icon={<VscServerProcess className='bg-[#00d8ff] inline-flex rounded-full p-2' size={40} />} heading='Reliable, tamper-proof network' text='Use Decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract' />

        </div>
        </div>
       
    </div>
  )
}

export default About