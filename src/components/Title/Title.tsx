const Title = ({title}: {title: string}) => {

    return (
        <div className="title-container" data-scroll-section>
                {title.split('').map((letter, i) =>
                    <div className="letter-container " key={i} data-scroll data-scroll-class="active" data-scroll-offset={'10%'}>
                        <span>{letter}</span>
                    </div>)}
        </div>
    );
};

export default Title;
