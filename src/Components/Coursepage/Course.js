import React from 'react'
import './Course.css'
import courseimage from '../assets/Rectangle 2041 (2).svg'

const Course = () => {
  return (
   <section className='course-main'>
    <div className='course-container'>
        <div className='course-content'>
            <h1>course-container</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>

        </div>
        <div className='course-card-main'>
            <div className='course-card'>
                <div className='course-card-image'>
                    <img src={courseimage} alt=''/>

                </div>
                <div className='course-card-content'>
                    <h1>English Programs</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        , when an unknown printer took a galley......</p>

                </div>

            </div>
            <div className='course-card'>
                <div className='course-card-image'>
                    <img src={courseimage} alt=''/>

                </div>
                <div className='course-card-content'>
                    <h1>English Programs</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        , when an unknown printer took a galley......</p>

                </div>

            </div>
            <div className='course-card'>
                <div className='course-card-image'>
                    <img src={courseimage} alt=''/>

                </div>
                <div className='course-card-content'>
                    <h1>English Programs</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        , when an unknown printer took a galley......</p>

                </div>

            </div>

        </div>
        

    </div>

   </section>
  )
}

export default Course