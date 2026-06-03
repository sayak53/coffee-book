import toast from "react-hot-toast"

//get all coffees from local storage
const getAllFavourites = () => {
    const all = localStorage.getItem('favourites')
    
    if(all){
      const favourites = JSON.parse(all)
      return favourites
    }else{
        return []
    }
}
//add coffee to local storage
const addFavourite = coffee => {
    //get all previously saved coffee data
    const favourites = getAllFavourites()
    const isExists = favourites.find(item => item.id == coffee.id)
    if (isExists) return toast.error('Coffee Already Exists!');

    favourites.push(coffee)
    localStorage.setItem('favourites',JSON.stringify(favourites))
    toast.success('Successfully created!');


}
//remove a coffee from local storage
const removeFavourites = (id) =>{
    const favourites = getAllFavourites()
    const remained = favourites.filter(coffee=> coffee.id != id)
    localStorage.setItem('favourites',JSON.stringify(remained))
    toast.success('Successfully removed!');
}

export {addFavourite,getAllFavourites,removeFavourites}