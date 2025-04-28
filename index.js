document.addEventListener('DOMContentLoaded', () => {
    const missions = [
      { name: "Mars Rover", status: "Active", last_communication: "2025-04-20" },
      { name: "Juno Probe", status: "Inactive", last_communication: "2024-12-15" },
      { name: "Voyager 2", status: "Active", last_communication: "2025-04-22" },
      { name: "Titan Orbiter", status: "Active", last_communication: "2025-04-25" }
    ];
  
    const missionList = document.getElementById('mission-list');
    const activeMissionsCount = document.getElementById('active-missions');
    const dataCollected = document.getElementById('data-collected');
  
    let activeMissions = 0;
    let totalData = 0;
  
    missions.forEach(mission => {
      const listItem = document.createElement('li');
      listItem.classList.add('mission');
      listItem.innerHTML = `
        <strong>${mission.name}</strong> - Status: ${mission.status} 
        <br> Last Communication: ${mission.last_communication}
      `;
      missionList.appendChild(listItem);
  
      if (mission.status === "Active") {
        activeMissions++;
        totalData += 10;
      }
    });
  
    activeMissionsCount.textContent = activeMissions;
    dataCollected.textContent = `${totalData} GB`;
  });  