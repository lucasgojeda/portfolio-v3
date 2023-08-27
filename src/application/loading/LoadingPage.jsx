import { ParticlesBackground } from '../components/particlesBackground/ParticlesBackground'
import { SpinnerLoading } from '../components/spinnerLoading/SpinnerLoading'

import './LoadingPage.scss';


export const LoadingPage = () => {
    return (
        <div className='loadingPageContainer'>

            <SpinnerLoading />

            <ParticlesBackground />

        </div>
    )
}
