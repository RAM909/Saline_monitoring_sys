import React from 'react';
import './HealthDashboard.css';

const HealthDashboard = () => {
  return (
    <div className="health-dashboard">
      <div className="upper-row">
        <div className="health-box">
          <h2>Heartbeat</h2>
          <div className="data">80 bpm</div>
        </div>
        <div className="health-box">
          <h2>Saline Level</h2>
          <div className="data">3.5%</div>
        </div>
      </div>
      <div className="lower-row">
        <div className="health-box">
          <h2>Oxygen Level</h2>
          <div className="data">98%</div>
        </div>
        <div className="health-box">
          <h2>Body Temperature</h2>
          <div className="data">98.6°F</div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
