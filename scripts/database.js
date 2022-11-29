const database = {
    fish: [
        {
            id: 0,
            imgUrl:'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=824&q=80',
            name: "Money",
            species: "Goldfish",
            length: "4",
            harvestLocation: "Paris",
            food: "Granules"
        },
        {
            id: 1,
            imgUrl:'https://images.unsplash.com/photo-1564731071754-001b53a902fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            name: "Broke",
            species: "Shark",
            length: "60",
            harvestLocation: "Berlin",
            food: "Small fish"
        },
        {
            id: 2,
            imgUrl:'https://images.unsplash.com/photo-1501791187590-9ef2612ba1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
            name: "Turt",
            species: "Turtle",
            length: "12",
            harvestLocation: "Hawaii",
            food: "Grapes"
        },
        {
            id: 3,
            imgUrl:'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1805&q=80',
            name: "Burt",
            species: "Blue Tang",
            length: "6",
            harvestLocation: "Key West",
            food: "Banana"
        },
        {
            id: 4,
            imgUrl:'https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Salmon-Fish-1-1024x600.jpg',
            name: "Smoke",
            species: "Salmon",
            length: "5",
            harvestLocation: "Tennessee",
            food: "Tuna"
        },
        {
            id: 5,
            imgUrl:'https://images.unsplash.com/photo-1566177229701-8895c29b9c68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            name: "Tiger",
            species: "Tuna",
            length: "3",
            harvestLocation: "Utah",
            food: "Cactus"
        },
        {
            id: 6,
            imgUrl:'https://images.unsplash.com/photo-1602143221967-ff9a1a490e00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            name: "Gup",
            species: "Guppy",
            length: "2",
            harvestLocation: "Switzerland",
            food: "Snow"
        },
        {
            id: 7,
            imgUrl:'https://images.unsplash.com/photo-1637308101513-10f6e78d5514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
            name: "Gut",
            species: "Swordfish",
            length: "55",
            harvestLocation: "Ocean",
            food: "Guts"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}