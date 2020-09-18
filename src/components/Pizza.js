import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup';
import formSchema from './Schema'

const initialFormValues ={
    size: "",
    originalRed: false,
    garlicRanch: false,
    bbq: false,
    pesto: false,
    pepperoni: false,
    sausage: false,
    onion: false,
    olives: false,
    name: "",
    instructions: ""
}

const initialFormErrors ={
    size: "",
    originalRed: "",
    garlicRanch: "",
    bbq: "",
    pesto: "",
    pepperoni: "",
    sausage: "",
    onion: "",
    olives: "",
    name: "",
    instructions: ""
}

const initialUsers = []
const initialDisabled = true

export default function PizzaForm(){
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    const validate = e => {
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setFormErrors({
                ...formErrors,
                [e.target.name]: ""
            });
        })
        .catch(err => {
            setFormErrors({
                ...formErrors,
                [e.target.name]: err.errors[0]
            });
        });
    };

    const inputChange = e => {
        e.persist()
        validate(e)
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormValues({...formValues, [e.target.name]: value})
    }

    const formSubmit = e => {
        e.preventDefault()
        axios
            .post("https://reqres.in/api/users", formValues)
            .then(res => {
                const apiReturn = res.data
                setUsers([...users, apiReturn])
                setFormValues(formValues)
            })
            .catch(err => console.log(err))
    }

    const[value, setValue] = useState('no');

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className="pizza-size">
                    <label htmlFor="size">
                        <h2>Choice of size</h2>
                        <select
                            value={formValues.size}
                            name="size"
                            id="size"
                            onChange={inputChange}
                        >
                            <option value="Default">--Select A Size--</option>
                            <option value="Personal">Personal</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Party">Party</option>
                        </select>
                        {formErrors.size.length > 0 ? (
                            <p className="error">{formErrors.size}</p>
                        ) : null}
                    </label>
                </div>
                <div className="pizza-sauce">
                    <h2>Choice of Sauce:</h2>
                    <label htmlFor="originalRed">
                        Original Red:
                        <input
                            type="checkbox"
                            id="originalRed"
                            name="originalRed"
                            checked={formValues.originalRed}
                            onChange={inputChange}
                        />
                        {formErrors.originalRed.length > 0 ? (
                        <p className="error">{formErrors.originalRed}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="garlicRanch">
                        Garlic Ranch:
                        <input
                            type="checkbox"
                            id="garlicRanch"
                            name="garlicRanch"
                            checked={formValues.garlicRanch}
                            onChange={inputChange}
                        />
                        {formErrors.garlicRanch.length > 0 ? (
                        <p className="error">{formErrors.garlicRanch}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="pesto">
                        Pesto:
                        <input
                            type="checkbox"
                            id="pesto"
                            name="pesto"
                            checked={formValues.pesto}
                            onChange={inputChange}
                        />
                        {formErrors.pesto.length > 0 ? (
                        <p className="error">{formErrors.pesto}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="bbq">
                        BBQ:
                        <input
                            type="checkbox"
                            id="bbq"
                            name="bbq"
                            checked={formValues.bbq}
                            onChange={inputChange}
                        />
                        {formErrors.bbq.length > 0 ? (
                        <p className="error">{formErrors.bbq}</p>
                        ) : null}
                    </label>
                </div>
                <div className="pizza-toppings">
                    <h2>Choice of Toppings:</h2>
                    <p>Choose up to 4</p>
                    
                    <label htmlFor="pepperoni">
                        Pepperoni:
                        <input
                            type="checkbox"
                            id="pepperoni"
                            name="pepperoni"
                            checked={formValues.pepperoni}
                            onChange={inputChange}
                        />
                        {formErrors.pepperoni.length > 0 ? (
                        <p className="error">{formErrors.pepperoni}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="sausage">
                        Sausage:
                        <input
                            type="checkbox"
                            id="sausage"
                            name="sausage"
                            checked={formValues.sausage}
                            onChange={inputChange}
                        />
                        {formErrors.sausage.length > 0 ? (
                        <p className="error">{formErrors.sausage}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="onion">
                        Onion:
                        <input
                            type="checkbox"
                            id="onion"
                            name="onion"
                            checked={formValues.onion}
                            onChange={inputChange}
                        />
                        {formErrors.onion.length > 0 ? (
                        <p className="error">{formErrors.onion}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="olives">
                        Olives:
                        <input
                            type="checkbox"
                            id="olives"
                            name="olives"
                            checked={formValues.olives}
                            onChange={inputChange}
                        />
                        {formErrors.olives.length > 0 ? (
                        <p className="error">{formErrors.olives}</p>
                        ) : null}
                    </label>
                </div>
                <div className="special-instructions">
                    <label htmlFor="instructions">
                        Special Instructions:
                        <br></br>
                        <textarea
                            name="instructions"
                            id="instructions"
                            placeholder="Anything else you would like to add?"
                            value={formValues.instructions}
                            onChange={inputChange}
                        />
                    </label>
                </div>
                <div className="name-div">
        <label htmlFor="name">
            Who is this pizza for?
            <br></br>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Must have at least 2 characters"
                value={formValues.name}
                onChange={inputChange}
                />
                {formErrors.name.length > 0 ? (
                    <p className="error">{formErrors.name}</p>
                ) : null}
        </label>


         </div>
                <div className="submit-button">
                    <button disabled={disabled}>Add to Order</button>
                </div>
            </form>
            
        </div>
    )
}