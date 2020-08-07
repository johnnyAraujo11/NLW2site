import React, { InputHTMLAttributes } from 'react';
import './style.css'
//Fazendo com que o input receba as atrubutos padróes que todo input no HTML recebe(extends)
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;

}
/*podemos utilizar a desestruturação (props) =>{...}*/
const Input: React.FunctionComponent<InputProps> = ({name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
            
        </div>
    )
}

export default Input;