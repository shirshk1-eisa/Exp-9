import React from 'react';

export default function LogsViewer({ logsUrl }) {
  const handleViewLogs = () => {
    if (logsUrl) {
      window.open(logsUrl, '_blank');
    } else {
      alert('No logs available yet');
    }
  };

  return (
    <div className="logs-viewer">
      <button onClick={handleViewLogs} className="view-logs-btn">
        📋 View Latest Logs
      </button>
    </div>
  );
}

