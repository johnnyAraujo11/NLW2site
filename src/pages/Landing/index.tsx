import React from 'react'; 
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../..//assets/images/icons/purple-heart.svg'
import './styles.css'
import {Link} from 'react-router-dom';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    {/*É preciso importa a imagem e naão acessar o caminho até ela*/}

                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes"className="giveClasses">
                        <img src={giveClassesIcon} alt=""/>
                        Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de conexoes já realizadas <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}
export default Landing;