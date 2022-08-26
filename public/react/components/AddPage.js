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
      alert('🎉 Page submitted succesfully! 🎉');
    }

    // Checkbox
    const checkBox = (props) => {
      const tickedCheckbox = props.isChecked ?
          "checkbox-marked" : "checkbox-blank-outline";
    }

    return <div>
        <form id="newPage" onSubmit={handleSubmit}>

          <div>
            <p>Please fill out the form below</p>
          </div>
            
            {/* Interactive form page */}
            <div>
                <label htmlFor="title">Title </label>
                <input name="title" value={formInputs.title}
                onChange={onChangeHandler}></input>

            </div>
            
            <div>
                <label htmlFor="article content">Article Content </label>
                <input name="slug" value={formInputs.articleContent}
                onChange={onChangeHandler}></input>
            </div>


            <div>
                <label htmlFor="author name">Author Name </label>
                <input name="content" value={formInputs.authorName}
                onChange={onChangeHandler}></input>
            </div>

            <div>
                <label htmlFor="author email">Author Email </label>
                <input name="content" value={formInputs.authorEmail}
                onChange={onChangeHandler}></input>
            </div>

            <div>
                <label htmlFor="tags">Tags </label>
                <input name="content" value={formInputs.tags}
                onChange={onChangeHandler}></input>
            </div>

          {/* Checkbox */}
          <div>
            <label> 
              I agree that this information is correct
           <input type='checkbox' value= {checkBox} onChange ={e => setTickedCheckbox(true)}/>
            </label>
          </div>



            {/* Cancel and submit buttons */}
            <div>
              <button onClick={pageSubmitted}>Create Page</button>
            </div>

            <div>
              <button onClick={()=> setCurrentPageView(0)}>Cancel ❌</button>
            </div>


        </form>
    </div>
}