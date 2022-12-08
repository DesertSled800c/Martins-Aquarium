import { getFish } from './database.js'
import { FishList } from './Fishlist.js'


// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

// const fishList = FishList()

const parentHTMLElement = document.querySelector(".fish__list")

parentHTMLElement.innerHTML = FishList()
