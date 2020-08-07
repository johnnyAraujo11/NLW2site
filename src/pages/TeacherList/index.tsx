import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">

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
                    ]} />
                    <Select  name="week_day" label="Dia da semana" options={[
                        { name: '0', label: 'Domingo' },
                        { name: '1', label: 'Segunda-feira' },
                        { name: '2', label: 'Terça-feira' },
                        { name: '3', label: 'Quarta-feira' },
                        { name: '4', label: 'Quinta-feira' },
                        { name: '5', label: 'Sexta-feira' },
                        { name: '6', label: 'Sábado' },
                        
                    ]} />



                    
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;