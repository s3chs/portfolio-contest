const About = () => {
    return (
        <div className="about-container" data-scroll-section>
            <div className="about-text-container">
                <div>
                    <span className="greetings info">Hello !</span>
                </div>
                <div>
                        <span className="info-text info">
                    My name is <span className="name">Margot Creneguy</span>.
                    </span>
                </div>
                <div>
                        <span className="info-text info">
                    I am a 33 years old <span className="job">fashion stylist</span>.
                    </span>
                </div>
                <div>
                <span className="info-text info">
                   Currently working for <span className="brand">Roxy</span>,
                I have a strong experience in drawing and designing surfwear and streetwear fashion.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;

