import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import Reports from "./Reports";
import Button from "./Button";


function CountRepports(){
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
            

                
                    <div className="cont-buttons">
                        <div className="button book "><Button aaaaaa={chooseAll}/></div>
                        <div >
                            <div className="button cont-btn-choose"><Buttons bbbbbbbbb={choose}/></div>  
                            
                        </div>
                        
                    </div> 

                <div className="container-reports">
                
                    <Reports allReports={report}/>
                </div>
            
            
            
        </div>
        
    )
    
    }
    
    export default CountRepports;
