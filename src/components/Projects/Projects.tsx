import Project from '../Project/Project';
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
        // Selectors
        const body = document.querySelector('body');
        const name: any = document.querySelector('.overlay-name');
        const portfolioInfo: any = document.querySelector('.overlay-info');
        const job: any = document.querySelector('.overlay-job');
        const minutes: any = document.querySelector('.overlay-minutes');
        const line: any = document.querySelector('.overlay-line');

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

            if (way === 'enter')
                switch (targetId) {
                    case 'Billabong':
                        body!.style.backgroundColor = '#FFE787';
                        name.style.color = '#94778B';
                        portfolioInfo.style.color = '#94778B';
                        job.style.color = '#94778B';
                        minutes.style.color = '#94778B';
                        line.style.backgroundColor = '#94778B';
                        break;
                    case 'Deus':
                        body!.style.backgroundColor = '#CEB3AB';
                        name.style.color = '#B5F8FE';
                        portfolioInfo.style.color = '#B5F8FE';
                        job.style.color = '#B5F8FE';
                        minutes.style.color = '#B5F8FE';
                        line.style.backgroundColor = '#B5F8FE';
                        break;
                    default:
                        console.log('Gérer le cas par défaut');
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
                name={'Tangerine Summer'}
                brand="Billabong"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698251399/wrangler-one_wepgvo.jpg']}
                description="Summer Collection"
                year="2022"
            />
            <Project
                name={'Yeah'}
                brand="Deus"
                pictures={['https://res.cloudinary.com/dncemocxu/image/upload/v1698251400/deus_yq5h3q.png']}
                description="Winter Collection"
                year="2023"
            />
        </div>
    );
};

export default Projects;
