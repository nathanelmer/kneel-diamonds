import { getMetals, setMetal } from "./database.js"

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
       if (event.target.name === "metal"){
           setMetal(parseInt(event.target.value))
       }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const metal = metals.map((everyMetal) => { 
        return html += `<li>
            <input type="radio" name="metal" value="${everyMetal.id}" /> ${everyMetal.metal}
        </li>`
    })

    html += "</ul>"
    return html
}

