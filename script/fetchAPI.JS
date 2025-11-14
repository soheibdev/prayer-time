function getTodayDate() {
  const today = new Date(); 
  const day   = String(today.getDate()).padStart(2, '0');  
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const year  = today.getFullYear(); 

  return `${day}-${month}-${year}`;
}
function fetchAPI(namecity){
     axios.get(`https://api.aladhan.com/v1/timingsByCity/${getTodayDate()}?city=${namecity}&country=Algeria&method=5`)
     .then(function (response) {
        const timings = response.data.data.timings;
      updateDefaultOption(33);
      document.getElementById("prayer-time-fadjer").textContent = timings.Fajr;
      document.getElementById("prayer-time-chorok").textContent = timings.Sunrise;
      document.getElementById("prayer-time-dohor").textContent = timings.Dhuhr;
      document.getElementById("prayer-time-asr").textContent = timings.Asr;
      document.getElementById("prayer-time-maghreb").textContent = timings.Maghrib;
      document.getElementById("prayer-time-aicha").textContent = timings.Isha;
      
       
  }).catch(function(error){
     console.error("API Error: "+error)
     alert("Impossible de récupérer les horaires pour cette ville.")
  })
}
fetchAPI(wilayasenfrancais[33].name)

function updateDefaultOption(index) {
  const opt = document.getElementById("Default-select");
  opt.textContent = `${wilayas[index].code} ${wilayas[index].name}`;
}
