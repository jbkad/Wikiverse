import React, {useState, useEffect} from "react";
import apiURL from '../api';


export const AddPage = ({setCurrentPageView}) => {


  const [formInputs, setFormInputs] = useState({})

    async function handleSubmit (e) {
        e.preventDefault()
        try {
            const response = await fetch(`${apiURL}/wiki`, {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    },
                body: JSON.stringify(formInputs)
            })

            const data = await response.json()
            console.log(data)
            console.log(formInputs)
            let newobj = {}
            setFormInputs(newobj)
            console.log(formInputs)
        
        } catch (err) {
            console.log(err)

        } 
    }
    
    function onChangeHandler (e) {
        let formData = formInputs
        formData[e.target.name] = e.target.value
        setFormInputs(formData)
        console.log(formInputs)
    }

    //Page submitted button message
    function pageSubmitted() {
      alert('🎉 Log in successful! Happy exploring 🎉');
    }

    // Checkbox
    const checkBox = (props) => {
      const tickedCheckbox = props.isChecked ?
          "checkbox-marked" : "checkbox-blank-outline";
    }

    return <div>
        <form>
            {/* Interactive login form */}
            <div>
                <label htmlFor="title">Username* </label>
                <input name="title" value={formInputs.username}
                onChange={onChangeHandler}></input>
            </div>
            
            <div>
                <label htmlFor="password">Password* </label>
                <input name="password" value={formInputs.password}
                onChange={onChangeHandler}></input>
            </div>

          {/* Checkbox */}
            <div>
                <label> 
                Keep me logged in
            <input type='checkbox' value= {checkBox} onChange ={e => setTickedCheckbox(true)}/>
                </label>
            </div>


            {/* Cancel and login buttons */}
            <div>
              <button onClick={pageSubmitted}>Log in</button>
            </div>

            <div>
              <button onClick={()=> setCurrentPageView(0)}>Cancel ❌</button>
            </div>


        </form>
    </div>
}