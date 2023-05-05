/*getting api address----------------------------------------------------------------------------*/
async function getIPAddress() {
  return fetch("https://api.ipify.org?format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("ip-address").innerHTML = data.ip;
      return data.ip;
    })
    .catch((error) => {
      alert("Error while fetching the data....", error);
    });
}
getIPAddress();
/*-----------------------------------------------------------------------------------------------*/

/*running function on button click---------------------------------------------------------------*/
async function getLocation() {
  const ipAddress = await getIPAddress();

  fetch(`https://ipinfo.io/${ipAddress}/json?token=c4dd0b9d4c6e9a`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = `./info.html`;
    })
    .catch((error) => {
      alert("Error while generation of token and getting the location", error);
    });
}
/*-----------------------------------------------------------------------------------------------*/
