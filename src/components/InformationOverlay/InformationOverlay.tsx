import gsap from 'gsap';
import { useEffect } from 'react';
import Clock from '../Clock/Clock';

const InformationOverlay = () => {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.portfolio-name-container > span', 1.7, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.06,
        }).to('.time-container > span', 1.2, {
            y: '0',
            ease: 'power3.inOut',
        }, '-=1.1').to('.portfolio-information-container > span', 1.5, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.06,
        }, '<').to('.overlay-line', 1, {
            flex: 1,
            ease: 'power3.inOut',
        }, '<+=0.5').to('.job-container > span', 1.7, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.06,
        }, '<-=0.2').to('.info', 1.3, {
            y: '0',
            ease: 'power3.inOut',
            stagger: 0.1,
        }, '-=1.3').to('.overlay-name, .overlay-info, .overlay-job, .overlay-minutes, .overlay-line', 0, {
            transition: '0.7s all cubic-bezier(0.77, 0, 0.175, 1)',
        });
    }, []);

    return (
        <div className="information-overlay-container">
            <div className="upper-infos">
                <div className="portfolio-name-container">
                    <span>MARGOT</span>
                    <span className="overlay-name">CRENEGUY.</span>
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
                    <span className="overlay-info">
                    created by sechs
                </span>
                </div>
                <div className="overlay-line"></div>
                <div className="job-container">
                    <span>
                        FASHION
                    </span>
                    <span className="overlay-job">
                        STYLIST
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InformationOverlay;
