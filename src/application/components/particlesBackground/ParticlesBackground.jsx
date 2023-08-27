import './ParticlesBackground.scss';


export const ParticlesBackground = () => {
    return (
        <div>

            <div className="page-bg"></div>

            <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>

            <div className="page-wrapper"></div>

        </div>
    )
}
