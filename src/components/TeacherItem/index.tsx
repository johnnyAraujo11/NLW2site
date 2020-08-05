import React from 'react'
import whatsapppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css'



function TeacherItem() {

    return (

        <article className="teacher-item">
            <header>
                <img src="https://akm-img-a-in.tosshub.com/sites/dailyo//story/embed/201709/teacher-2_090517073432.jpg" alt="" />
                <div>
                    <strong>Nome do professor(substiStuir)</strong>
                    <span>Inglês</span>
                </div>
            </header>
            <p>Melhor professor para você aprender inglês by the way.
                       <br /> <br />
                        A 10 anos lecionando e trazendo alegria prara muita gente.
                   </p>
            <footer>
                <p>
                    Preço por hora:<strong>R$100.</strong>
                </p>
                <button type="button">

                    <img src={whatsapppIcon} alt="whatsapp" />
                       Entrar em contato
                       </button>
            </footer>
        </article>
    )
}
export default TeacherItem;
