import React from "react";
import "../styles/DlcForm.css"

export default function DlcForm(props) {
 
    //Handles form data by first checking if preference is saved and if not defaulting to true
    const [formData, setFormData] = React.useState({
        scrambledContinents: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).scrambledContinents : true,
        scrambledNations: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).scrambledNations : true,
        explorers: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).explorers : true,
        mediterranean: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).mediterranean : true,
        asia: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).asia : true,
        americas: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).americas : true,
        mesopotamia: localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")).mesopotamia : true,
    })

    // Handles changes in DLC preference
    const handleChange = (event) => {
        const {name, checked} = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: checked
        }))

        localStorage.setItem("formData", JSON.stringify(formData))
    }

    // Saves what DLCs are owned
    React.useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData))
    }, [formData])

    const visibilityChange = (e) => {
        e.preventDefault()
        props.setVisibility(false)
    }

    return (
        <div className="dlcBox">
           <form className="dlc-form">
                <p className="dlcTitle">Owned DLCs</p>
                <div className="dlcList">
                    <label htmlFor="scrambledContinents">Scrabled Continents</label>
                    <input 
                        id="scrambledContinents"
                        type="checkbox"
                        name="scrambledContinents"
                        checked={formData.scrambledContinents}
                        onClick={handleChange}/>
                    <label htmlFor="scrambledNations">Scrambled Nations</label>
                    <input 
                        id="scrambledNations"
                        type="checkbox"
                        name="scrambledNations"
                        checked={formData.scrambledNations}
                        onClick={handleChange}
                    />
                    <label htmlFor="explorers">Explorers</label>
                    <input 
                        id="explorers"
                        type="checkbox"
                        name="explorers"
                        checked={formData.explorers}
                        onClick={handleChange}
                    />
                    <label htmlFor="mediterranean">Cradle of Civilization Pack: Mediterranean</label>
                    <input 
                        id="mediterranean"
                        type="checkbox"
                        name="mediterranean"
                        checked={formData.mediterranean}
                        onClick={handleChange}
                    />
                    <label htmlFor="asia">Cradle of Civilization Pack: Asia</label>
                    <input 
                        id="asia"
                        type="checkbox"
                        name="asia"
                        checked={formData.asia}
                        onClick={handleChange}
                    />
                    <label htmlFor="americas">Cradle of Civilization Pack: Americas</label>
                    <input 
                        id="americas"
                        type="checkbox"
                        name="americas"
                        checked={formData.americas}
                        onClick={handleChange}
                    />
                    <label htmlFor="mesopotamia">Cradle of Civilization Pack: Mesopotamia</label>
                    <input 
                        id="mesopotamia"
                        type="checkbox"
                        name="mesopotamia"
                        checked={formData.mesopotamia}
                        onClick={handleChange}
                    />
                </div>
                <button className="button-form" onClick={visibilityChange}>Close</button>
            </form>
        </div>
    )
}