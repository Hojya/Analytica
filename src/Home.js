import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import Reports from "./Reports";
import Button from "./Button";


function Home(){
    const [report, setReport] = useState(data);
    const chooseAll = (all) => {
        const newReports = data.filter(index => index.all ===all);
        setReport(newReports);
    }
    const choose = (typeofreports) => {
        const newArr = data.filter(index => index.typeofreports===typeofreports);
        setReport(newArr);
    }
    


    return(
        <div >
            <div className="container-reports">
                
                

                <div className="container-reports-one cont-btn">
                        <div className="button book"><Button aaaaaa={chooseAll}/></div>
                        <div className="button"><Buttons bbbbbbbbb={choose}/>  </div>           
                </div> 

                <div className="">
                
                    <Reports allReports={report}/>
                </div>
            
            </div>
            
        </div>
        
    )
    
    }
    
export default Home;