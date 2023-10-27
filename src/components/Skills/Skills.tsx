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
        'Fashion Photography Awareness',
        'Knowledge of Fabrics and Materials',
        'Budgeting and Shopping Skills',
        'Client Management',
    ];

    return (
        <div className="skills-container">
            {skills.map((skill, i) => (
                <div className="skill-container" key={i}>
                    {skill.split('').join(' ').split(' ').map((word, j) => (
                        <div className="word-container" key={j}>
                            {word.split('').map((letter, k) => (
                                <div className="letter-container" key={k} data-scroll data-scroll-class="active">
                                    <span>{letter}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Skills;
