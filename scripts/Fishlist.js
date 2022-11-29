// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
            <div><img  class="fish__image image--card" src="${fish.imgUrl}" /></div>
            <div class="fish__name">I ${fish.name},</div>
            <div class="fish__species">am a ${fish.species}</div>
            <div class="fish__length">who is ${fish.length} long</div>
            <div class="fish__location">& born in ${fish.harvestLocation}</div>
            <div class="fish__diet">who likes to eat ${fish.food}.</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}