import { Layout } from './components/Layout/Layout';
import InformationOverlay from './components/InformationOverlay/InformationOverlay';
import LocomotiveScroll from 'locomotive-scroll';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Title from './components/Title/Title';

function App() {
    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'horizontal',
            gestureOrientation: 'both',
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
    });

    return (
        <Layout>
            <InformationOverlay/>
            <About/>
            <Title title="projects"/>
            <Projects/>
        </Layout>
    );
}

export default App;
