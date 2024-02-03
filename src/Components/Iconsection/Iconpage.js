import React from 'react'
import './Iconpage.css'
import icons1 from '../assets/Tally Solutions - png.svg'
import icons2 from '../assets/Institute of Chartered Accountants of India - png.svg'
import icons3 from '../assets/Group.svg'

const Iconpage = () => {
  return (
    <section className='iconpage-main'>
        <div className='icon-container'>
            <div className='icon-main'>
                <div className='icon'>
                    <img src={icons1} alt='' />

                </div>
                <div className='icon'>
                    <img src={icons2} alt='' />

                </div>
                <div className='icon'>
                    <img src={icons3} alt='' />

                </div>

            </div>

        </div>

    </section>
  )
}

export default Iconpage