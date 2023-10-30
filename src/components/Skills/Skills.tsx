const Skills = () => {

    const skills = [
        'Fashion Knowledge',
        'Color Theory',
        'Body Shape Analysis',
        'Trend Forecasting',
        'Creativity',
        'Attention to Detail',
        'Communication',
        'Networking',
        'Organization',
        'Styling Techniques',
        'Adaptability',
        'Fashion Photography',
        'Fabrics and Materials',
        'Budgeting Skills',
        'Client Management',
    ];

    return (
        <div className="skills-container" data-scroll-section>
            {skills.map((skill, i) =>
                <div className="skill-container" key={i}>
                    {skill.split('').map((letter, j) =>
                        <div className="letter-container " key={j} data-scroll data-scroll-class="active">
                            <span>{letter === ' ' ? <span>&nbsp;</span> : letter}</span>
                        </div>)}
                </div>,
            )}
        </div>
    );
};

export default Skills;
