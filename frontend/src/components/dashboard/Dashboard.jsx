import './Dashboard.scss'
import React from 'react'

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DashboardHeader from './dashboard-header/DashboardHeader';
import Timeline from './timeline/Timeline';

export default (props) => {


    return (
        <div className="dashboard">
            
            <DashboardHeader />

            <div className="row dashboard-body">
                <div className="col-md-7">
                    <div className="card main-card">
                        <div className="card-header">
                            Timeline Clouds Average
                        </div>
                        <div className="card-body">

                            <div className="timeline">

                                <Timeline title="Day 1" clouds={4} airports={0} />

                                <Timeline title="Day 2" clouds={36} airports={1} />

                                <Timeline title="Day 3" clouds={48} airports={2} />

                                <Timeline title="Day 4" clouds={59} airports={3} />

                                <Timeline title="Day 5" clouds={80} airports={3} />

                                <Timeline title="Day 6" clouds={95} airports={3} />

                                <Timeline title="Day 7" clouds={100} airports={3} />
                                
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="widget bg-warning text-white text-center mb-3">
                        <span className="icon">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                        <h1 className="m-xs">Alert</h1>
                        <h3 className="font-bold no-margins">
                            Imminent risk
                            </h3>
                        <small>for tomorrow</small>
                    </div>

                    <div className="card">
                        <div className="card-body p-3">
                            <h3>To do</h3>

                            <div className="todo-list">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <input type="checkbox" id="item" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="item">
                                            No person can operate an aircraft on acrobatic flights
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="todo-list">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <input type="checkbox" id="item" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="item">
                                            No person can operate an ultralight vehicle
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="todo-list">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <input type="checkbox" id="item" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="item">
                                            No one can perform a parachute jump
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="todo-list">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <input type="checkbox" id="item" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="item">
                                            No one can conduct air operations in uncontrolled airspace
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="todo-list">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <input type="checkbox" id="item" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="item">
                                            No one can operate a helicopter unless that person has visual references to the surface
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row dashboard-footer">
                <div className="col-12">
                    <strong>Copyright</strong> GFT © 2021
                </div>
            </div>
        </div>
    )

}