function Reports({allReports}){
    return(
        <div className="container-reports-one">
            {allReports.map((index =>{
                const {id,image,name,all,add} = index;

                return(
                    <div key={id} className="report-card box animate fadeInLeft three">
                        <div className="cont-card">
                            <div>
                                <button className="heart">♡
                                {/* <img src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1648554691~hmac=77ff47150ee609f80a631104d0bd5086" width='20px'/> */}
                                </button>
                            </div> 
                            <div >
                                <h2 className="name">{name}</h2>
                                
                            </div>
                            <div className="img">
                                <img src={image} /> 
                            </div>
                        </div>
                        
                </div>
                )
            }))}
        </div>
    )
}
    export default Reports;
    