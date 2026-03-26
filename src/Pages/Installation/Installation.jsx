import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../../utilities/addToLocalStorage";
import InstalledAppsCard from "../../Components/InstalledAppsCard/InstalledAppsCard";

const Installation = () => {
  const [sortButton, setSortButton] = useState("Sort By Size ⬇️");
  const [sort, setSort] = useState("");
  const [installedApps, setInstallApps] = useState([]);
  const apps = useLoaderData();
  useEffect(() => {
    const getStoredAppsList = getStoredApps();
    const convertStoredIdTOInt = getStoredAppsList.map((id) => parseInt(id));

    const installAppsList = apps.filter((app) =>
      convertStoredIdTOInt.includes(app.id),
    );
    setInstallApps(installAppsList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "LowToHigh") {
      const highToLow = [...installedApps].sort((a, b) => a.size - b.size);
      setInstallApps(highToLow);
      setSortButton("Low To High");
    }
    if (type === "HighToLow") {
      const highToLow = [...installedApps].sort((a, b) => b.size - a.size);
      setInstallApps(highToLow);
      setSortButton("High To Low");
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1>Install Apps: {installedApps.length}</h1>
        </div>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            {sortButton}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("LowToHigh")}>Low To High</a>
            </li>
            <li>
              <a onClick={() => handleSort("HighToLow")}>High To Low</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {installedApps.map((installApp) => (
          <InstalledAppsCard
            key={installApp.id}
            installApp={installApp}
          ></InstalledAppsCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
