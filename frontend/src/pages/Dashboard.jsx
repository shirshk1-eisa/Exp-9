import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatusCard from "../components/StatusCard";
import DeploymentList from "../components/DeploymentList";
import DockerInfo from "../components/DockerInfo";
import LogsViewer from "../components/LogsViewer";
import { getWorkflowRuns, getLogs } from "../services/githubApi";
import { getLatestDockerTag } from "../services/dockerApi";

export default function Dashboard() {
  const [buildStatus, setBuildStatus] = useState("Loading...");
  const [deployments, setDeployments] = useState([]);
  const [dockerImage, setDockerImage] = useState("Loading...");
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchData = async () => {
    const dockerRepository =
      import.meta.env.VITE_DOCKER_REPOSITORY || import.meta.env.VITE_REPO_NAME;

    try {
      const runs = await getWorkflowRuns();
      const latest = runs[0];

      setBuildStatus(latest?.conclusion || latest?.status || "No Runs Yet");
      setDeployments(
        runs.slice(0, 5).map((run) => ({
          id: run.id,
          status: run.conclusion || run.status || "Running",
          time: run.created_at,
        }))
      );
    } catch (error) {
      console.error("GitHub fetch failed:", error);
      setBuildStatus("GitHub Error");
      setDeployments([]);
    }

    try {
      const latestTag = await getLatestDockerTag(
        import.meta.env.VITE_DOCKER_USERNAME,
        dockerRepository
      );
      setDockerImage(latestTag);
    } catch (error) {
      console.error("Docker fetch failed:", error);
      setDockerImage("Unavailable");
    }

    setLastUpdated(new Date().toLocaleString());
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-shell">
      <Navbar />

      <div className="main-grid">
        <StatusCard title="Build Status" status={buildStatus} />
      </div>

      <div className="content-panel">
        <h3 className="section-title">Deployment History</h3>
        <DeploymentList deployments={deployments} />

        <h3 className="section-title">Docker</h3>
        <DockerInfo imageTag={dockerImage} lastUpdated={lastUpdated} />

        {deployments[0] && (
          <LogsViewer logsUrl={getLogs(deployments[0].id)} />
        )}
      </div>
    </div>
  );
}
