


const SectionTitle = ({ title, subtitle, paragarap }) => {

    return (
        <div className="wpo-section-title mb-0 pt-0" style={{maxWidth:'860px'}}>
            <span className="text-center pt-0" style={{textTransform:'none'}}>{subtitle}</span>
            <h2 className="about-heading-second text-smallll w-100 mt-0 mb-2 pt-md-2" style={{maxWidth:'860px'}}>{title}</h2>
            {paragarap && <div className="d-flex w-100 justify-content-center mb-0">
            <p className="text-center mt-0 p-2 mb-0">{paragarap}</p>
            </div>}
        </div>
    )
}

export default SectionTitle;

