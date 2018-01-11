import axios from "axios";

export const START = "START";
export const FINISH = "FINISH";
export const RESTAURANTS = "RESTAURANTS";
export const CELL_SELECT = "CELL_SELECT";

//API KEY: hOg9MDQHp6BEgpmURsUjgTdMQqGHkuFDWvuv5xM-F8d-Z8P_WLfS86g88z9XsDaMzFQkNIrvli1PjZN5kkRwKFqfrZnf41mBsXKJczbcQA37PrvuymmXF2Vo4iJVWnYx

export function onButtonClicked() {
    return (dispatch) => {
        console.log("This worked.");
    };
}

export function getLocation(){
return (dispatch) => { 
    console.log("Getting location...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
          dispatch(getRestaurantData(position.coords.latitude, position.coords.longitude))
        },
            
        (error) => {
            console.log("Error", error);
        },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    }  
}
    
export function getRestaurantData(thisLat, thisLong){
      return (dispatch) => {
          console.log(thisLat + ", " + thisLong)
          dispatch(start());
        const mykey = "hOg9MDQHp6BEgpmURsUjgTdMQqGHkuFDWvuv5xM-F8d-Z8P_WLfS86g88z9XsDaMzFQkNIrvli1PjZN5kkRwKFqfrZnf41mBsXKJczbcQA37PrvuymmXF2Vo4iJVWnYx";
        let url = "https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=" + 
            thisLat + "&longitude=" + thisLong + "&sort_by=distance";
//       console.log("step2");
                axios.get(url, {
            headers: {
                "Authorization": "Bearer" + " " + mykey
            }
        }).then((response) => {
//                    console.log(response);
            if (response.status != 200) {
                throw Error(response.statusText);
            }
            return response;
        }).then((response) => {

                    dispatch(finish());
            dispatch(myRestaurants(response.data));

        }).catch((e) => console.log(e));
    } 
}

export function myRestaurants(data){
    return {
        restaurants: data,
        type: RESTAURANTS
    }
}

export function start() {
    return {
        type: START
    };
}

export function finish() {
    return {
        type: FINISH
    };
}

export function cellSelect(id) {
    return {
        type: CELL_SELECT,
        id: id
    };
}