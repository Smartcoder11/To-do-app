import {useState} from "react";


const Todoform = () => {

    const[text, setText] = useState("")

    const onFormSubmit = () => {

    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                placeholder="Enter new to-do...."
                Classname="input"
                onChange={onInputChange}
            />
        </form>
    )
}
export default Todoform;