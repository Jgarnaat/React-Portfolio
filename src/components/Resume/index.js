import React from "react";
//import resume from '../../assets/files/MyResume.pdf';
import { BsCloudDownload } from 'react-icons/bs';
import { MdFoundation, MdAttractions } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { GrDocumentPerformance } from "react-icons/gr";
import { Helmet } from "react-helmet";

function Resume() {
    return (
        <div>
            <Helmet>
                <title>Joshua's Resume</title>
            </Helmet>
            <section id='welcome-section' className='download-intro'>
                <div className='flex-row'>
                    <h2 className='section-title primary-border'>My Resume</h2>
                </div>
                <div className='flex-row'>
                    <div className='download-info'>
                        <div className='download-text'>
                            <p>
                                Here is a link to my Resume
                            </p><br/>
                            <a href={"add resume link"} className='download-logo' download>
                                <BsCloudDownload />
                            </a>
                            <p>
                                The following is a list of my Developer Proficiencies 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='home-page-body' className='resume-body'>
                <div className='article column1'>
                    <p className='column-title'>Front-End Tech</p>
                    <p className='column-text'>
                        <ul>
                            <li className='logo'>
                                <MdFoundation />
                            </li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>APIs</li>
                            <li>Bootstrap</li>
                            <li>GIT</li>
                        </ul>
                    </p>
                </div>

                <div className='article column2'>
                    <p className='column-title'> Back-End Tech</p>
                    <p className='column-text'>
                        <ul>
                            <li className="logo">
                                <GrTechnology />
                            </li>
                            <li>Node.Js</li>
                            <li>Jest</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>Object-Relational Mapping(ORM)</li>
                            <li>Model-View-Controller (MVC)</li>
                        </ul>
                    </p>
                </div>
                <div className='article column3'>
                    <p className='column-title'>Performance Tech</p>
                    <p className='column-text'>
                        <ul>
                            <li className="logo">
                                <GrDocumentPerformance />
                            </li>
                            <li>NoSQL</li>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>React</li>
                            <li>MERN</li>
                            <li>State</li>
                        </ul>
                    </p>
                </div>
                <div className='article column4'>
                    <p className='column-title'>Certificates</p>
                    <p className='column-text'>
                        <ul>
                            <li className='logo'>
                                <MdAttractions />
                            </li>
                            <li><a href='https://academy.zenva.com/certificate/ca63498242a9'>C++</a></li>
                            <li><a href='https://academy.zenva.com/certificate/64aee59d'>HTML</a></li>
                            <li><a href='https://academy.zenva.com/certificate/0f3804a4'>SQL</a></li>
                            <li><a href='https://academy.zenva.com/certificate/89864d92'>Kivy</a></li>
                            <li><a href='https://academy.zenva.com/certificate/ee650264'>Python</a></li>
                            <li><a href='https://academy.zenva.com/certificate/21b6dd08'>Unreal Engine</a></li>
                            <li><a href='https://academy.zenva.com/certificate/ef7ca7cf'>Blender</a></li>
                            <li><a href='https://academy.zenva.com/certificate/928ad3f9'>React</a></li>
                        </ul>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Resume;