import React from 'react';

export default function DeploymentList({ deployments }) {
  if (!deployments || deployments.length === 0) {
    return (
      <div className="deployment-list empty">
        <p>No deployments yet</p>
      </div>
    );
  }

  return (
    <ul className="deployment-list">
      {deployments.map((deployment) => (
        <li key={deployment.id} className={`deployment-item ${deployment.status.toLowerCase()}`}>
          <span className="status-badge">{deployment.status}</span>
          <span className="time">{new Date(deployment.time).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
}

