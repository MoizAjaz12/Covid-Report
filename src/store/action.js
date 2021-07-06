import axios from "axios";

const getData = () => {
     return (dispatch) => {

          // Make a request for a user with a given ID
          axios.get('https://api.covidtracking.com/v1/states/current.json')
               .then(function (response) {
                    // handle success
                    console.log(response);
                    dispatch({type : "GETREPORTS" , reports : response})
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
               // .then(function () {
               //      // always executed
               // });
     }
}

export {
     getData
}