import React,{useState, FormEvent} from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select'
import api from '../../services/api';


    function TeacherList() {
    const [subject , setSubject] = useState('');
    const [week_day , setweek_day] = useState('');
    const [time , setTime] = useState('');
    // colocar as informações em tela do filtro de professores
    const [teachers, setTeachers] = useState([]);

    //async funciona basicamente para espera algo retorna par que possa executar como um todo.
    async function searchTeachers(event: FormEvent){
        event.preventDefault();
        //espera enviar essa requisição (await)
         const response = await api.get("/classes", {
            //metodo get não pode passar o parâmetros sem o params 
            params:{
                subject, week_day, time
            } 
        })
        setTeachers(response.data)
    }
   

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select name="subject" label="Matéria" options={[
                        { name: 'Matemática', label: 'Matemática' },
                        { name: 'Geografia', label: 'Geografia' },
                        { name: 'Inglês', label: 'Inglês' },
                        { name: 'Português', label: 'Português' },
                        { name: 'Biologia', label: 'Biologia' },
                        { name: 'Programação', label: 'Programação' },
                        { name: 'Física', label: 'Física' },
                        { name: 'Educação Física', label: 'Educação Física' },
                        { name: 'Química', label: 'Química' }
                    ]} 
                        onChange={ event => { setSubject(event.target.value)}}
                    />
                    <Select  name="week_day" label="Dia da semana" options={[
                        { name: '0', label: 'Domingo' },
                        { name: '1', label: 'Segunda-feira' },
                        { name: '2', label: 'Terça-feira' },
                        { name: '3', label: 'Quarta-feira' },
                        { name: '4', label: 'Quinta-feira' },
                        { name: '5', label: 'Sexta-feira' },
                        { name: '6', label: 'Sábado' },  
                    ]} 
                        onChange={event => { setweek_day(event.target.value)}}
                    />

                    <Input type="time" name="time" label="Hora"
                        onChange= {event =>{ 
                            setTime(event.target.value)}}    
                    />
                    <button type="submit">buscar</button>
                </form>
            </PageHeader>

            <main>
                {
                    teachers.map( (teacher: Teacher) =>{
                        //passando uma propriedade
                        return <TeacherItem  key={teacher.id} teacher={teacher} />
                    })
                }
                
            </main>
        </div>
    )
}

export default TeacherList;