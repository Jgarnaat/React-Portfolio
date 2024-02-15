import React from "react";
import PGttG from '../../assets/files/TPGttG.png'
import NoSQL from '../../assets/files/NoSQL.png'
import SQL from '../../assets/files/SQL.avif'
import BLOG from '../../assets/files/SQL2.avif'
import PWA from '../../assets/files/PWA.png'
import SRV from '../../assets/files/NodeSequelize.png'
import { Helmet } from 'react-helmet';
// update link for pgttg
// make project titles link to github
// detail project descriptions

function Portfolio() {
    return (
        <div>
            <Helmet>
                <title>Joshua's Portfolio</title>
            </Helmet>
            <section id='work' className="jobs">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">Work</h2>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://the-programmers-guide-to-the-galaxy.onrender.com/">
                                {""}
                                <img
                                  src={PGttG}
                                  className='my-2'
                                  style={{width: "100%"}}
                                  alt='The Programmers Guide to the Galaxy'
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Programmer's Guide to the Galaxy</h4>
                            <p> 
                                A MERN application that is aimed at providing basic 
                                coding information for the everyday user. A user can 
                                create and account to ask any questions they have in 
                                a general forum that other users can answer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job'>
                    <div className='job-info'>
                        <div className='job-img'>
                            <a href='https://github.com/Jgarnaat/NoSQL-No-Problem'>
                                {""}
                                <img 
                                   src={NoSQL}
                                   className='my-2'
                                   style={{width: '100%'}}
                                   alt='NoSQL No-Problem'
                                />
                            </a>
                        </div>
                        <div className='job-text'>
                            <h4>NoSQL Project</h4>
                            <p>
                                This is a project that showcases my knowledge of
                                NoSQL. This project also works with insomnia to 
                                demonstrate the functionality of the end points
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job'>
                    <div className='job-info'>
                        <div className='job-img'>
                            <a href='https://github.com/Jgarnaat/Uncle-Scrooges-Moneybin'>
                                {""}
                                <img 
                                   src={SQL}
                                   className='my-2'
                                   style={{width: '100%'}}
                                   alt='Uncle Scrooges Money bin'
                                />
                            </a>
                        </div>
                        <div className='job-text'>
                            <h4>E-Commerce Back End</h4>
                            <p>
                                This Project uses mySQL and Sequelize to simulate an 
                                e-commerce backend. This project works with insomnia
                                to demonstrate the functionality of the routes
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job'>
                    <div className='job-info'>
                        <div className='job-img'>
                            <a href='https://github.com/Jgarnaat/The-Blog-Log'>
                                {""}
                                <img 
                                   src={BLOG}
                                   className='my-2'
                                   style={{width: '100%', height: '75%'}}
                                   alt='The Blog Log'
                                />
                            </a>
                        </div>
                        <div className='job-text'>
                            <h4>Blog Style Database</h4>
                            <p>
                                This project creates a blog style webpage where users
                                can create a blog and allows other users to comment on
                                the blog. The user can sign up and login. Once logged in
                                the user can access their homepage to see the blogs they
                                have created as well as edit and delete them.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job'>
                    <div className='job-info'>
                        <div className='job-img'>
                            <a href='https://github.com/Jgarnaat/next-text-editor'>
                                {""}
                                <img 
                                   src={PWA}
                                   className='my-2'
                                   style={{width: '100%'}}
                                   alt='Next Text Editor'
                                />
                            </a>
                        </div>
                        <div className='job-text'>
                            <h4>PWA Text Editor</h4>
                            <p>
                                This is a project that uses  to create a
                                Progressive Web App. It is a text editor that can be
                                downloaded and used as an online or offline application. The
                                saved pages are linked to a database that would be synced upon
                                reconnecting to the internet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job'>
                    <div className='job-info'>
                        <div className='job-img'>
                            <a href='https://github.com/Jgarnaat/speedrunvault'>
                                {""}
                                <img 
                                   src={SRV}
                                   className='my-2'
                                   style={{width: '100%'}}
                                   alt='Next Text Editor'
                                />
                            </a>
                        </div>
                        <div className='job-text'>
                            <h4>Speed Run Vault</h4>
                            <p>
                                This was a group project using Express, Sequelize and Handlebars
                                to create a website for submitting and tracking speed runs of various
                                video games. The user can sign up and login to track their own times and post
                                comments on other users' posted times
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;