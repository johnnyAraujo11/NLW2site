import React, { InputHTMLAttributes } from 'react';
import './style.css'
//Fazendo com que o input receba as atrubutos padróes que todo input no HTML recebe(extends)
interface SelectProps extends InputHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    /*Em opstions estamos passando um objeto porque um array é um objeto passado no TeacherFrom(index.tsx)*/
    options: Array<{
        name: string;
        label: string;
    }>;

}
/*podemos utilizar a desestruturação (props) =>{...}*/
const Select: React.FunctionComponent<SelectProps> = ({name,options, label, ...rest}) => {
    
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}> 
                <option value="" defaultValue="" hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.name}value={option.name}>{option.label}</option>
                })}
              
            </select>
            
        </div>
    )
}

export default Select;