import Project from '../Project/Project';
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
        // Selectors
        // Body for background color changes
        const body = document.querySelector('body');
        // Information overlay elements for color changes
        const name: any = document.querySelector('.overlay-name');
        const portfolioInfo: any = document.querySelector('.overlay-info');
        const job: any = document.querySelector('.overlay-job');
        const minutes: any = document.querySelector('.overlay-minutes');
        const line: any = document.querySelector('.overlay-line');

        const handleCallEvent = (e: any) => {
            const targetId = e.detail.target.id;
            const way = e.detail.way;

            if (way === 'leave' && targetId === 'Deus' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#E8FCCF';
                name.style.color = '#8884FF';
                portfolioInfo.style.color = '#8884FF';
                job.style.color = '#8884FF';
                minutes.style.color = '#8884FF';
                line.style.backgroundColor = '#8884FF';
            }

            if (way === 'enter' && targetId === 'Deus' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#E8FCC2';
                portfolioInfo.style.color = '#E8FCC2';
                job.style.color = '#E8FCC2';
                minutes.style.color = '#E8FCC2';
                line.style.backgroundColor = '#E8FCC2';
            }

            if (way === 'leave' && targetId === 'Deus' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#6A7FDB';
                name.style.color = '#E5F77D';
                portfolioInfo.style.color = '#E5F77D';
                job.style.color = '#E5F77D';
                minutes.style.color = '#E5F77D';
                line.style.backgroundColor = '#E5F77D';
            }

            if (way === 'enter' && targetId === 'Deus' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#E8FCC2';
                portfolioInfo.style.color = '#E8FCC2';
                job.style.color = '#E8FCC2';
                minutes.style.color = '#E8FCC2';
                line.style.backgroundColor = '#E8FCC2';
            }

            if (way === 'leave' && targetId === 'Billabong' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#E8FCC2';
                portfolioInfo.style.color = '#E8FCC2';
                job.style.color = '#E8FCC2';
                minutes.style.color = '#E8FCC2';
                line.style.backgroundColor = '#E8FCC2';
            }

            if (way === 'enter' && targetId === 'Billabong' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#6A7FDB';
                name.style.color = '#E5F77D';
                portfolioInfo.style.color = '#E5F77D';
                job.style.color = '#E5F77D';
                minutes.style.color = '#E5F77D';
                line.style.backgroundColor = '#E5F77D';
            }

            if (way === 'leave' && targetId === 'Billabong' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#ADA8B6';
                name.style.color = '#B3EFB2';
                portfolioInfo.style.color = '#B3EFB2';
                job.style.color = '#B3EFB2';
                minutes.style.color = '#B3EFB2';
                line.style.backgroundColor = '#B3EFB2';
            }

            if (way === 'enter' && targetId === 'Billabong' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#6A7FDB';
                name.style.color = '#E5F77D';
                portfolioInfo.style.color = '#E5F77D';
                job.style.color = '#E5F77D';
                minutes.style.color = '#E5F77D';
                line.style.backgroundColor = '#E5F77D';
            }

            if (way === 'leave' && targetId === 'Daily-Paper' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#6A7FDB';
                name.style.color = '#E5F77D';
                portfolioInfo.style.color = '#E5F77D';
                job.style.color = '#E5F77D';
                minutes.style.color = '#E5F77D';
                line.style.backgroundColor = '#E5F77D';
            }

            if (way === 'enter' && targetId === 'Daily-Paper' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#ADA8B6';
                name.style.color = '#B3EFB2';
                portfolioInfo.style.color = '#B3EFB2';
                job.style.color = '#B3EFB2';
                minutes.style.color = '#B3EFB2';
                line.style.backgroundColor = '#B3EFB2';
            }

            if (way === 'leave' && targetId === 'Daily-Paper' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#8C705F';
                name.style.color = '#F1F0CC';
                portfolioInfo.style.color = '#F1F0CC';
                job.style.color = '#F1F0CC';
                minutes.style.color = '#F1F0CC';
                line.style.backgroundColor = '#F1F0CC';
            }

            if (way === 'enter' && targetId === 'Daily-Paper' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#ADA8B6';
                name.style.color = '#B3EFB2';
                portfolioInfo.style.color = '#B3EFB2';
                job.style.color = '#B3EFB2';
                minutes.style.color = '#B3EFB2';
                line.style.backgroundColor = '#B3EFB2';
            }

            if (way === 'leave' && targetId === 'Noah' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#ADA8B6';
                name.style.color = '#B3EFB2';
                portfolioInfo.style.color = '#B3EFB2';
                job.style.color = '#B3EFB2';
                minutes.style.color = '#B3EFB2';
                line.style.backgroundColor = '#B3EFB2';
            }

            if (way === 'enter' && targetId === 'Noah' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#8C705F';
                name.style.color = '#F1F0CC';
                portfolioInfo.style.color = '#F1F0CC';
                job.style.color = '#F1F0CC';
                minutes.style.color = '#F1F0CC';
                line.style.backgroundColor = '#F1F0CC';
            }

            if (way === 'leave' && targetId === 'Noah' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#7284A8';
                name.style.color = '#B0FF92';
                portfolioInfo.style.color = '#B0FF92';
                job.style.color = '#B0FF92';
                minutes.style.color = '#B0FF92';
                line.style.backgroundColor = '#B0FF92';
            }

            if (way === 'enter' && targetId === 'Noah' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#8C705F';
                name.style.color = '#F1F0CC';
                portfolioInfo.style.color = '#F1F0CC';
                job.style.color = '#F1F0CC';
                minutes.style.color = '#F1F0CC';
                line.style.backgroundColor = '#F1F0CC';
            }
        };

        window.addEventListener('call', handleCallEvent);
        return () => {
            window.removeEventListener('call', handleCallEvent);
        };
    }, []);

    return (
        <div className="projects-container" data-scroll-section>
            <Project
                name={'Future Jazz'}
                brand="Deus"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698251400/deus_yq5h3q.png']}
                collection="Fall 19'"
                projectClass="deus"
                link="https://eu.deuscustoms.com/"
            />
            <Project
                name={'Tangerine Dream'}
                brand="Billabong"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698251399/wrangler-one_wepgvo.jpg']}
                collection="Summer 23'"
                projectClass="billabong"
                link="https://billabong.fr/homme/blog/collaborations/billabong-wrangler-drop1-launch.html"
            />
            <Project
                name={'On & On'}
                brand="Daily-Paper"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698333863/LACOSTE-FW21-01_dj0zse.jpg']}
                collection="Spring 21'"
                projectClass="daily-paper"
                link="https://www.designscene.net/2021/05/lacoste-fw21.html"
            />
            <Project
                name={'Cosy NY'}
                brand="Noah"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698327674/Capture_d_e%CC%81cran_2023-10-26_a%CC%80_15.30.05_mid2ha.png']}
                collection="Winter 17'"
                projectClass="noah"
                link="https://noahny.com/blogs/lookbooks/fall-winter-2022-lookbook"
            />
        </div>
    );
};

export default Projects;
