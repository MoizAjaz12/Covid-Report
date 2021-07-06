const INITIAL_STATE ={
    reports : []
}


const reducer = (state = INITIAL_STATE,action) => {
    switch (action.type){
         case "GETREPORTS" :
              return {
                   ...state,
                   reports : action.reports
              }
         default :
         return state     
    }
}

export default reducer;