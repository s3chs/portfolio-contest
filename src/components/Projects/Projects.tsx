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
        // Billabong selectors
        const billabongBrandName = document.querySelector('.brand-container.billabong > span');
        const billabongName = document.querySelector('.name-container.billabong > span');
        const billabongCollection = document.querySelector('.collection-container.billabong > span');
        // Deus selectors
        const deusBrandName = document.querySelector('.brand-container.deus > span');
        const deusName = document.querySelector('.name-container.deus > span');
        const deusCollection = document.querySelector('.collection-container.deus > span');
        // Daily Paper selectors
        const dailyPaperBrandName = document.querySelector('.brand-container.daily-paper > span');
        const dailyPaperName = document.querySelector('.name-container.daily-paper > span');
        const dailyPaperCollection = document.querySelector('.collection-container.daily-paper > span');
        // Noah selectors
        const noahBrandName = document.querySelector('.brand-container.noah > span');
        const noahName = document.querySelector('.name-container.noah > span');
        const noahCollection = document.querySelector('.collection-container.noah > span');

        const handleCallEvent = (e: any) => {
            const targetId = e.detail.target.id;
            const way = e.detail.way;

            if (way === 'leave' && targetId === 'Billabong' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#E8FCCF';
                name.style.color = '#8884FF';
                portfolioInfo.style.color = '#8884FF';
                job.style.color = '#8884FF';
                minutes.style.color = '#8884FF';
                line.style.backgroundColor = '#8884FF';
            }

            if (way === 'enter' && targetId === 'Billabong' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#FFE787';
                name.style.color = '#94778B';
                portfolioInfo.style.color = '#94778B';
                job.style.color = '#94778B';
                minutes.style.color = '#94778B';
                line.style.backgroundColor = '#94778B';

                billabongBrandName!.classList.add('active');
                billabongName!.classList.add('active');
                billabongCollection!.classList.add('active');
            }

            if (way === 'leave' && targetId === 'Billabong' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#B5F8FE';
                portfolioInfo.style.color = '#B5F8FE';
                job.style.color = '#B5F8FE';
                minutes.style.color = '#B5F8FE';
                line.style.backgroundColor = '#B5F8FE';
            }

            if (way === 'enter' && targetId === 'Billabong' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#FFE787';
                name.style.color = '#94778B';
                portfolioInfo.style.color = '#94778B';
                job.style.color = '#94778B';
                minutes.style.color = '#94778B';
                line.style.backgroundColor = '#94778B';
            }

            if (way === 'leave' && targetId === 'Deus' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#FFE787';
                name.style.color = '#94778B';
                portfolioInfo.style.color = '#94778B';
                job.style.color = '#94778B';
                minutes.style.color = '#94778B';
                line.style.backgroundColor = '#94778B';
            }

            if (way === 'enter' && targetId === 'Deus' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#B5F8FE';
                portfolioInfo.style.color = '#B5F8FE';
                job.style.color = '#B5F8FE';
                minutes.style.color = '#B5F8FE';
                line.style.backgroundColor = '#B5F8FE';

                deusBrandName!.classList.add('active');
                deusName!.classList.add('active');
                deusCollection!.classList.add('active');
            }

            if (way === 'leave' && targetId === 'Deus' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#ADA8B6';
                name.style.color = '#B3EFB2';
                portfolioInfo.style.color = '#B3EFB2';
                job.style.color = '#B3EFB2';
                minutes.style.color = '#B3EFB2';
                line.style.backgroundColor = '#B3EFB2';
            }

            if (way === 'enter' && targetId === 'Deus' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#B5F8FE';
                portfolioInfo.style.color = '#B5F8FE';
                job.style.color = '#B5F8FE';
                minutes.style.color = '#B5F8FE';
                line.style.backgroundColor = '#B5F8FE';
            }

            if (way === 'leave' && targetId === 'Daily-Paper' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#B5F8FE';
                portfolioInfo.style.color = '#B5F8FE';
                job.style.color = '#B5F8FE';
                minutes.style.color = '#B5F8FE';
                line.style.backgroundColor = '#B5F8FE';
            }

            if (way === 'enter' && targetId === 'Daily-Paper' && e.detail.from === 'start') {
                body!.style.backgroundColor = '#ADA8B6';
                name.style.color = '#B3EFB2';
                portfolioInfo.style.color = '#B3EFB2';
                job.style.color = '#B3EFB2';
                minutes.style.color = '#B3EFB2';
                line.style.backgroundColor = '#B3EFB2';

                dailyPaperBrandName!.classList.add('active');
                dailyPaperName!.classList.add('active');
                dailyPaperCollection!.classList.add('active');
            }

            if (way === 'leave' && targetId === 'Daily-Paper' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#8C705F';
                name.style.color = '#F1F0CC';
                portfolioInfo.style.color = '#F1F0CC';
                job.style.color = '#F1F0CC';
                minutes.style.color = '#F1F0CC';
                line.style.backgroundColor = '#F1F0CC';
            }

            if (way === 'enter' && targetId === 'Deus' && e.detail.from === 'end') {
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

                noahBrandName!.classList.add('active');
                noahName!.classList.add('active');
                noahCollection!.classList.add('active');
            }

            if (way === 'leave' && targetId === 'Noah' && e.detail.from === 'end') {
                body!.style.backgroundColor = '#CEB3AB';
                name.style.color = '#B5F8FE';
                portfolioInfo.style.color = '#B5F8FE';
                job.style.color = '#B5F8FE';
                minutes.style.color = '#B5F8FE';
                line.style.backgroundColor = '#B5F8FE';
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
                name={'Tangerine Dream'}
                brand="Billabong"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698251399/wrangler-one_wepgvo.jpg']}
                collection="Summer 23'"
                projectClass="billabong"
            />
            <Project
                name={'Future Jazz'}
                brand="Deus"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698251400/deus_yq5h3q.png']}
                collection="Fall 19'"
                projectClass="deus"
            />
            <Project
                name={'On & On'}
                brand="Daily-Paper"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698333863/LACOSTE-FW21-01_dj0zse.jpg']}
                collection="Spring 21'"
                projectClass="daily-paper"
            />
            <Project
                name={'Cosy NY'}
                brand="Noah"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698327674/Capture_d_e%CC%81cran_2023-10-26_a%CC%80_15.30.05_mid2ha.png']}
                collection="Winter 17'"
                projectClass="noah"
            />
        </div>
    );
};

export default Projects;
