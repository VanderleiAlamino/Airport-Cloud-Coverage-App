import './DashboardHeader.scss'
import React, { useState } from 'react'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {

    const [day, setDay] = useState(1);    

    return (
        <div className="row dashboard-header">
            <div className="col-md-12 col-lg-auto">
                <h2>Airport Cloud Coverage</h2>
                <small>You have 4 clouds in national territory.</small>
            </div>

            <div className="col-md-12 col-lg border-left"> 

                <div className="row align-items-center">
                    <div className="col-auto">
                        <span className="icon-calendar">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                    </div>
                    <div className="col">
                        <h3>Simulate timeline</h3>

                        <div className="form-row">
                            <div className="col-auto">
                                <button className="btn btn-info" onClick={() => setDay(day !== 1 ? day - 1 : day)}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            </div>

                            <div className="col-auto">
                                <button className="btn btn-info" onClick={() => setDay(day + 1)}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>

                            <div className="col">
                                <strong>Day {day}</strong>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}