import React from 'react';

export default function DockerInfo({ imageTag, lastUpdated }) {
  return (
    <div className="docker-info">
      <h4>Docker Hub</h4>
      <p><strong>Latest Tag:</strong> {imageTag || 'Loading...'}</p>
      <p><strong>Last Checked:</strong> {lastUpdated || 'Never'}</p>
    </div>
  );
}

