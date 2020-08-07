import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Input from '../../components/Input';
import waringIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


function TeacherForm() {

    const  history = useHistory();
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    /*Adicionar mais item na lista ao clickar no button */
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, { week_day: 0, from: '', to: '' }
        ]);
    }

    //fazer com que a função obtenha o evento
    function handleCreatClass(event: FormEvent){
        //Não aconteco reload d página
        event.preventDefault();
        //conexão com o servidor
        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
                }).then(() =>{
                    alert("Casdastro realizado com sucesso!");
                    history.push('/');
                }).catch(() =>{
                    alert("Erro ao realizar o cadastro.")
                })
        console.log(scheduleItems)
     }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]:value}
            }
            return scheduleItem;
        })
        setScheduleItems(updatedScheduleItems);
    } 

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível você quer dar aulas."
                description="O primerio passo é preencher o formulário abaixo."
            />
            <main>
                <form onSubmit={handleCreatClass}>
                <fieldset>
                    <legend> Seus dados</legend>

                    <Input type="text" name="name" label="Nome Completo" value={name} onChange={(event) => {
                        setName(event.target.value);
                    }} />
                    <Input type="text" name="avatar" label="Avatar" value={avatar} onChange={(event) => {
                        setAvatar(event.target.value);
                    }} />
                    <Input type="text" name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(event) => {
                        setWhatsapp(event.target.value);
                    }} />
                    <Textarea name="Bio" label="Biografia" value={bio} onChange={(event) => {
                        setBio(event.target.value);
                    }} />

                </fieldset>

                <fieldset>
                    <legend> Sobre a aula</legend>

                    {/*Criando uma nova propriedade chamada options */}
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
                        value={subject} onChange={(event) => {
                            setSubject(event.target.value);
                        }}
                    />


                    <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(event) => {
                        setCost(event.target.value);
                    }} />

                </fieldset>
                <fieldset>
                    <legend>Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            //utilizar key(uma informação única) nesse caso o week_day
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select name="week_day" label="Dia da semana" options={[
                                    { name: '0', label: 'Domingo' },
                                    { name: '1', label: 'Segunda-feira' },
                                    { name: '2', label: 'Terça-feira' },
                                    { name: '3', label: 'Quarta-feira' },
                                    { name: '4', label: 'Quinta-feira' },
                                    { name: '5', label: 'Sexta-feira' },
                                    { name: '6', label: 'Sábado' },
                                    ]}
                                    value={scheduleItem.week_day}
                                    onChange={ event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                />

                                <Input type="time" name="from" label="Das" value={scheduleItem.from}onChange={event => {setScheduleItemValue(index, 'from', event.target.value)}}/>
                                <Input type="time" name="to" label="Até" value={scheduleItem.to} onChange={event => { setScheduleItemValue(index, 'to', event.target.value)}}/>
                            </div>

                        );
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={waringIcon} alt="Aviso importante" />Importante!
                            <br />
                            Preencha todos os dados
                            <br />
                    </p>
                    <button type="submit">Salvar Cadastro</button>
                </footer>
                </form>
            </main>
        </div>

    )
}

export default TeacherForm;