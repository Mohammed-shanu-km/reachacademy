import React from 'react'
import './Objective.css'
import round1 from '../assets/Ellipse 2.png'
import round2 from '../assets/Ellipse 3.png'
import round3 from '../assets/Ellipse 4.svg'
import round4 from '../assets/Ellipse 5.png'
import round5 from '../assets/Ellipse 6.png'
import round6 from '../assets/Ellipse 7.png'
import round7 from '../assets/Ellipse 8 (1).svg'


const Objective = () => {
  return (
    <section className='objective-main'>
        <div className='objective-container'>
            <div className='objective-content'>
                <h1>Our Objectives</h1>
                <p>At AcademiaReach Pvt Ltd, we are committed to realizing our mission through a range of activities and initiatives</p>

            </div>
            <div className='object-card-main'>
            <div className='object-first-row'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round1} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Educational Institutions</h1>
                        <p>We proudly establish and maintain a diverse array of schools, colleges, universities, and other
                             educational institutions. These institutions serve as hubs of knowledge
                             dissemination and provide students with an environment conducive to growth and development.</p>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round2} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Training & Development</h1>
                        <p>We offer educational and vocational training programs, conduct seminars, workshops, and conferences, all designed to enhance
                             learning and skill development. We believe that education should empower individuals with practical skills and knowledge.</p>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round3} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Research & Development</h1>
                        <p>Our institution actively promotes research and development activities across various academic and professional fields. We 
                            encourage both students and faculty to 
                            engage in pioneering research that advances human understanding and innovation.</p>

                    </div>

                </div>

            </div>
            <div className='object-first-row'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round4} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Collaboration</h1>
                        <p>Collaboration is at the heart of what we do. We work closely with other educational institutions, organizations, 
                            and entities to broaden the horizons of education.
                             Through these partnerships, we aim to improve the quality and scope of educational offerings.</p>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round5} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Supporting Excellence</h1>
                        <p>We are dedicated to supporting deserving students and researchers. We provide scholarships,
                             prizes, and financial assistance to ensure that 
                            talented 
                            individuals have the opportunity to pursue their educational and research aspirations.</p>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round6} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>State-of-the-Art Facilities</h1>
                        <p>AcademiaReach Pvt Ltd is committed to providing top-notch educational infrastructure and facilities. We acquire, purchase,
                             lease, or otherwise obtain the resources necessary for the proper functioning of our institutions.</p>

                    </div>

                </div>

            </div>
            <div className='object-first-row'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round7} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Cultural Enrichment</h1>
                        <p>We recognize the importance of culture and the arts in education. To this end, we regularly host academic and cultural 
                            events that celebrate academic excellence and promote the arts and culture.</p>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round3} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Educational Resources</h1>
                        <p>WTo support the learning journey, we create, maintain, and publish educational material and resources, including books, journals, and digital
                             content.
                             These resources are designed to enrich the educational experience.</p>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={round1} alt=''/>

                    </div>
                    <div className='card-content'>
                        <h1>Funding Education</h1>
                        <p>We actively raise funds, receive donations, grants, endowments, and other contributions to support our educational activities. 
                            Your support goes a long way in helping us achieve our mission.</p>

                    </div>

                </div>

            </div>
            

        </div>

        </div>
       
        

    </section>
  )
}

export default Objective