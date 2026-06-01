//get all coffees from local storage

//add coffee to local storage
const addFavourite = coffee => {
    //get all previously saved coffee data
    const favourites = []
    favourites.push(coffee)
    localStorage.setItem('favourites',JSON.stringify(favourites))
}
//remove a coffee from local storage

export {addFavourite}