import React from 'react';
import profileImage from '../../assets/large/Profile_Pic.png';
function About() {
    return (
        <section id='about-me' className='my-5 intro'>
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