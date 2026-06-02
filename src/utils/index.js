//get all coffees from local storage
const getAllFavourites = () => {
    const all = localStorage.getItem('favourites')
    
    if(all){
      const favourites = JSON.parse(all)
      console.log(favourites)
      return favourites
    }else{
        console.log([])
        return []
    }
}
//add coffee to local storage
const addFavourite = coffee => {
    //get all previously saved coffee data
    const favourites = getAllFavourites()
    const isExists = favourites.find(item => item.id == coffee.id)
    if (isExists) return alert('Already Exists')
    favourites.push(coffee)
    localStorage.setItem('favourites',JSON.stringify(favourites))
}
//remove a coffee from local storage

export {addFavourite,getAllFavourites}