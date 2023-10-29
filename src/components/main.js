import React from 'react';
import './main.css';
import ContinuousGraph from "./changing";
import MyChart from "./graphing";

function PatientData() {
    return (
        <div className="container py-5">
            <h1 className="text-center">Patient-Data</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Patient - Card</h5>
                            <p className="card-text">Patient Name - Ramesh Yadav</p>
                            <p className="card-text">Age - 23</p>
                            <p className="card-text">Gender - Male</p>
                            <p className="card-text">Contact - 8277272772</p>
                            <p className="card-text">Address - idbsdvbss</p>
                            <p className="card-text">Birth-Date - xx/yy/zz</p>
                            <p className="card-text">Email - xyz@gmail.com</p>
                        </div>
                        <div className="mb-5 d-flex justify-content-around"></div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <iframe src="graphing.js" width="365" height="200"></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Patient-Recovery-Graph</h5>
                            <p className="card-text">
                                Over the course of September, the patient responded well to antimalarial medications. Fever gradually
                                subsided, and the patient's strength improved. Side effects of medications, including nausea, were
                                managed. The patient was declared malaria-free upon negative blood test results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <iframe src="changing.js" width="350" height="200"></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Heart-Rate</h5>
                            <p className="card-text">
                                Heart rate refers to the number of times a person's heart beats per minute (bpm).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientData;
