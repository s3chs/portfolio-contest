import gsap from 'gsap';
import { useEffect } from 'react';
import Clock from '../Clock/Clock';

const InformationOverlay = () => {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.name-container > span', 1.7, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.1,
        }).to('.time-container > span', 1.2, {
            y: '0',
            ease: 'power3.inOut',
        }, '-=1.1').to('.portfolio-information-container > span', 1.5, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.1,
        }, '<').to('.job-container > span', 1.7, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.1,
        }, '<+=0.2').to('.info', 1.3, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.2,
        },'-=1.3');
    }, []);

    return (
        <div className="information-overlay-container">
            <div className="upper-infos">
                <div className="name-container">
                    <span>MARGOT</span>
                    <span>CRENEGUY.</span>
                </div>
                <div className="time-container">
                    <Clock/>
                </div>
            </div>
            <div className="down-infos">
                <div className="portfolio-information-container">
                <span>
                    Portfolio 2023
                </span>
                    <span>
                    created by sechs
                </span>
                </div>
                <div className="line"></div>
                <div className="job-container">
                    <span>
                        FASHION
                    </span>
                    <span>
                        STYLIST
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InformationOverlay;
