import React from 'react'

export default props =>
    <div className="timeline">
        <div className="timeline-item">

            <div className="form-row">
                <div className="col-3">
                    <p><strong>{props.title}</strong></p>
                </div>
                <div className="col">
                    <p className="mb-2">
                        Cloud Percentage: 
                        <span className={`ml-2 float-right badge ${props.clouds <= 40 ? "badge-info" : (props.clouds <= 60 && props.clouds >= 41 ? "badge-warning" : "badge-danger")}`}>{props.clouds}%</span>
                    </p>
                    
                    <p>
                        Affected airports: 
                        <span className={`ml-2 float-right badge ${props.airports === 0 ? "badge-info" : (props.airports === 1 ? "badge-warning" : "badge-danger")}`}>{props.airports}</span>
                    </p>
                </div>
            </div>            
        </div>

        

    </div>






