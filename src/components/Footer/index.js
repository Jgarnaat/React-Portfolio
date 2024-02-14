import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <h2>Made by Joshua Garnaat</h2>
            <p>
                <ul>
                    <a href="https://github.com/Jgarnaat">
                        <li className='logo'>
                            <VscGithubAlt />
                        </li>
                    </a>
                    <a href='none'>
                        <li className='logo'>
                            <AiOutlineLinkedin />
                        </li>
                    </a>
                    <a href='none'>
                        <li className='logo'>
                            <FaInstagram />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;