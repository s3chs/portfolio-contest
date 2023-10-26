interface ProjectProps {
    name: string,
    brand: string,
    pictures: string[],
    collection: string,
    projectClass: string
}

const Project = ({name, brand, pictures, collection, projectClass}: ProjectProps) => {
    return (
        <div className={'project-container ' + projectClass} id={brand} data-scroll data-scroll-call="call"
             data-scroll-offset="40%, 40%" data-scroll-repeat
        >
            <div className={'project-picture-container'} data-scroll data-scroll-class="active"
                 data-scroll-offset="40%, 40%" data-scroll-repeat>
                <img
                    className={' project-picture'}
                    src={pictures[0]}
                    alt="project preview image"
                />
            </div>
            <div className={'brand-container ' + projectClass}>
                <span>{brand}</span>
            </div>
            <div className={'name-container ' + projectClass}>
                <span>{name}</span>
            </div>
            <div className={'collection-container ' + projectClass}>
                <span>{collection}</span>
            </div>
        </div>
    );
};

export default Project;