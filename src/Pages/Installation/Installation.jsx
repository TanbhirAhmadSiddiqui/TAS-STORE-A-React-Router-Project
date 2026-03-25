import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../../utilities/addToLocalStorage";
import InstalledAppsCard from "../../Components/InstalledAppsCard/InstalledAppsCard";

const Installation = () => {
  const [installedApps, setInstallApps] = useState([]);
  const apps = useLoaderData();
  useEffect(() => {
    const getStoredAppsList = getStoredApps();
    const convertStoredIdTOInt = getStoredAppsList.map((id) => parseInt(id));
    console.log(convertStoredIdTOInt);
    const installAppsList = apps.filter((app) =>
      convertStoredIdTOInt.includes(app.id),
    );
    setInstallApps(installAppsList);
  }, []);
  return (
    <div>
      <h1>Install Apps: {installedApps.length}</h1>
      {installedApps.map((installApp) => (
        <InstalledAppsCard
          key={installApp.id}
          installApp={installApp}
        ></InstalledAppsCard>
      ))}
    </div>
  );
};

export default Installation;
