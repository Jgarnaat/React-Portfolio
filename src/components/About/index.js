import React from 'react';
import profileImage from '../../assets/large/Profile_Pic.jpeg';
import { Helmet } from 'react-helmet';

function About() {
    return (
        <section id='about-me' className='my-5 intro'>
            <Helmet>
                <title>Joshua's About Page</title>
            </Helmet>
            <div class='flex-row'>
                <h1 id='about' className='section-title primary-border'>
                    About Me
                </h1>
            </div>
            <div className='flex-row'>
                <div class='into-info'>
                    <div class='intro-img'>
                        <img src={profileImage} style={{ width: '100%'}} alt='profile' />
                    </div>
                    <p>
                        info about me
                    </p>
                    <p>
                        more info about me
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;