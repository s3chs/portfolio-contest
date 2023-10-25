interface ProjectProps {
    name: string,
    brand: string,
    pictures: string[],
    description: string,
    year: string
}

const Project = ({name, brand, pictures, description, year}: ProjectProps) => {
    return (
        <>
            <div className={'project-container ' + brand} id={brand} data-scroll data-scroll-call="call"
                 data-scroll-offset="40%, 40%" data-scroll-repeat
            >
                <div className={'project-picture-container'} data-scroll data-scroll-class="active"
                     data-scroll-offset="40%, 40%"
                     data-scroll-repeat>
                    <img
                        className={' project-picture'}
                        src={pictures[0]}
                        alt="project preview image"
                    />
                </div>
            </div>
        </>
    );
};

export default Project;
