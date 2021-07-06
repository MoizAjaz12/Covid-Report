import { useSelector , useDispatch } from "react-redux";
import { getData } from "../store/action";
import { useEffect } from "react";

const Home = () => {
     let state = useSelector(state => state);

     console.log(state.reports.data)

     let dispatch = useDispatch();

     useEffect(()=>{
          dispatch(getData())
          console.log('DATA======>' ,state.reports)
     },[])


     return (
          <div className='covid-cases'>
               
          <h1 className="main">COVID RESULT</h1>
          <hr />
               {
                    state.reports.data ? state.reports.data.map((e,i)=>{
                         return (
                              <>
                            

                              <h1>
                              Date : {e.date}
                              <br />
                              State : {e.state} 
                              <br/>     
                              Total Cases : {e.total}
                              <br />
                              Deaths : {e.death}
                              </h1>
                              <h1>
                              Positives : {e.positive}
                              <br /> 
                              Negatives: {e.negative}
                              </h1>     
                              <hr />
                              
                              </>
                         )
                    })
              :"" } 
               

          </div>
     )
}

export default Home;