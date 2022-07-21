import React from "react"
import "../styles/Map.css"
import {mapList} from "../data/maps.js"
import DlcForm from "./DlcForm"

export default function Map() {
    const mapOutput = document.getElementById("mapOutput")

    // Establishes state for map
    const [map, setMap] = React.useState("")
    const [count, setCount] = React.useState(0)
    const [visibility, setVisibility] = React.useState(false)

    // Changes map name suggested
    React.useEffect(() => {
        let verify = false
        
        let randomNumber = Math.floor(Math.random() * 63 + 1)

        while(verify === false) {
            //Checks if local storage exists before verifying data
            if (!localStorage.getItem("formData")) {
                break
            }

            //Checks if DLC is selected before allowing map to be chosen
            else if (mapList[randomNumber].dlc === "Explorers Map Pack" && JSON.parse(localStorage.getItem("formData")).explorers === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else if (mapList[randomNumber].dlc === "Scrambled Continents" && JSON.parse(localStorage.getItem("formData")).scrambledContinents === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else if(mapList[randomNumber].dlc === "Scrambled Nations" && JSON.parse(localStorage.getItem("formData")).scrambledNations === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else if (mapList[randomNumber].dlc === "Cradle of Civilzation Map Pack: Mesopotamia" && JSON.parse(localStorage.getItem("formData")).mesopotamia === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else if (mapList[randomNumber].dlc === "Cradle of Civilzation Map Pack: Mediterranean" && JSON.parse(localStorage.getItem("formData")).medeiterranean === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else if (mapList[randomNumber].dlc === "Cradle of Civilzation Map Pack: Asia" && JSON.parse(localStorage.getItem("formData")).asia === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else if (mapList[randomNumber].dlc === "Cradle of Civilzation Map Pack: Americas" && JSON.parse(localStorage.getItem("formData")).americas === false) {
                randomNumber = Math.floor(Math.random() * 63 + 1)
                continue
            }
            else {
                verify = true
                break
            }
        }

        setMap(mapList[randomNumber].name)
    }, [count, visibility])

    // Selects random map from map array
    const randomMap = (e) => {
        e.preventDefault()
        setCount((prevCount) => prevCount + 1)
        mapOutput.value = map
    }
    
    const dlcVisibleToggle = (e) => {
        e.preventDefault()
        setVisibility(true)
    }
    
    return (
    <main>
        <h1>Civilization V Truly Random Map Selector</h1>
        <form id="form" onSubmit="return false">
            <input autoComplete="off" placeholder="Map name..." className="mapOutput" id="mapOutput"></input>
            <button className="button-form" onClick={randomMap}>Suggest Map</button>
            <button className="button-form" onClick={dlcVisibleToggle}>Manage DLCs</button>
        </form>
        { visibility ? <DlcForm setVisibility={setVisibility}/> : null}
    </main>
    )
}