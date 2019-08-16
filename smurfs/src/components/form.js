import React, {useState} from 'react'
import {withFormik, Form, Field} from 'formik'
import axios from 'axios'




const SmurfForm = props => {

    const [smurf, setSmurf]= useState({name: '', age:'', height: ''})

    const handleChange = event => {
        setSmurf({...smurf, [event.target.name]: event.target.value})
    }

    const addSmurf = event => {
        event.preventDefault()
       props.sendData(smurf)
       console.log('using not formik form', smurf)
    }

    return(
        <>
        <form onSubmit={addSmurf}>
            <label>Name</label>
            <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
            />
            <label>Age</label>
            <input
            type="text"
            name="age"
            onChange={event => handleChange(event)}
            />
            <label>Height</label>
            <input
            type="text"
            name="height"
            onChange={event => handleChange(event)}
            />
            <button>Submit</button>
        </form>
        {/* <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="age" placeholder="Age" />
            <Field type="text" name="height" placeholder="Height" />
            <button type='submit' >Submit</button>
        </Form> */}
        </>
    )
}

// const FormWithFormik = withFormik({

//     mapPropsToValues({name, age, height}){
//        return{
//         name: name || '',
//         age: age || '',
//         height: height || '',
//         id: Date.now()
//         }
//     },
//     handleSubmit(values){
//         console.log(values)
//         axios.post('http://localhost:3333/smurfs', values)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err))
//     }
// })(SmurfForm )

export default SmurfForm