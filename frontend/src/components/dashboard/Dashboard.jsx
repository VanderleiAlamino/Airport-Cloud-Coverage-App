import './Dashboard.scss'
import React from 'react'

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {


    return (
        <div className="dashboard">
            <div className="row dashboard-header">
                <div className="col-md-auto">
                    <h2>Airport Cloud Coverage</h2>
                    <small>You have 42 messages and 6 notifications.</small>
                </div>


                <div className="col-md">


                </div>
            </div>

            <div className="row dashboard-body">
                <div className="col-md-7">
                    <div className="card main-card">
                        <div className="card-header">
                            Timeline clouds average
                        </div>
                        <div className="card-body">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>1º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-info">4%</span></p>
                                            <p>Affected airports: <span className="badge badge-info">0</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>2º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-warning">36%</span></p>
                                            <p>Affected airports: <span className="badge badge-danger">2</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>1º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-info">4%</span></p>
                                            <p>Affected airports: <span className="badge badge-info">0</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>2º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-warning">36%</span></p>
                                            <p>Affected airports: <span className="badge badge-danger">2</span></p>
                                        </div>
                                    </div>

                                </div>


                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>1º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-info">4%</span></p>
                                            <p>Affected airports: <span className="badge badge-info">0</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>2º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-warning">36%</span></p>
                                            <p>Affected airports: <span className="badge badge-danger">2</span></p>
                                        </div>
                                    </div>

                                </div>


                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>1º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-info">4%</span></p>
                                            <p>Affected airports: <span className="badge badge-info">0</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="timeline-item">
                                    <div className="form-row">
                                        <div className="col-3">
                                            <p><strong>2º Day</strong></p>
                                        </div>
                                        <div className="col">
                                            <p>Cloud Percentage: <span className="badge badge-warning">36%</span></p>
                                            <p>Affected airports: <span className="badge badge-danger">2</span></p>
                                        </div>
                                    </div>

                                </div>

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