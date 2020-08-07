import React from 'react'
import whatsapppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css'
import api from '../../services/api';



export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;

}
interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
    
    function createNewConnection(){
        api.post("/connections", {
            user_id: teacher.id
        });   
    }

    return (

        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}

            </p>
            <footer>
                <p>
                    Preço por hora:<strong>R${Number(teacher.cost)}</strong>
                </p>
                <a target="_balck" href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection}>

                    <img src={whatsapppIcon} alt="whatsapp" />
                       Entrar em contato
                       </a>
            </footer>
        </article>
    )
}
export default TeacherItem;
