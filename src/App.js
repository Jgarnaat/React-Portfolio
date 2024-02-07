import React, {useState} from 'react';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import Resume from '../src/components/Resume';
import Footer from '../src/components/Footer';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
    const [currentTab, handleTabChange] = useState('about');

    const renderTab = () => {
        if ('About' === currentTab) {
            return <About />;
        }
        if ('Contact' === currentTab) {
            return <Contact />;
        }
        if ('Portfolio' === currentTab) {
            return <Portfolio />;
        }
        if ('Resume' === currentTab) {
            return <Resume />;
        }
        return <About />;
    };

    return (
        <>
         <Helmet>
            <title> Joshua Garnaat's Portfolio </title>
        </Helmet>;
        <Header 
         currentTab={currentTab}
         handleTabChange={handleTabChange}
        ></Header>
         <main>{renderTab()}</main>
        <Footer></Footer>
        </>
    );
}

export default App;