import React, { InputHTMLAttributes } from 'react';
import './style.css'
//Fazendo com que o input receba as atrubutos padróes que todo input no HTML recebe(extends)
interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;

}
/*podemos utilizar a desestruturação (props) =>{...}*/
const Textarea: React.FunctionComponent<TextareaProps> = ({name, label, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
            
        </div>
    )
}

export default Textarea;