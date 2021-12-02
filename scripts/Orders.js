import { getMetals, getSizes, getStyles, getOrders } from "./database.js"


const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} costs $${order.price}
    </li>`
}

export const currentOrders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
        const orders = getOrders()
        const jewelry = getStyles()
        const metals = getMetals()
        const sizes = getSizes()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

