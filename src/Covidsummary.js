


fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': 'ba61444e23msh2308b97d6e9dcbap10dd42jsne2697e354bcb',
  },
})
  .then((response) =>
    response.json().then((data) => {
      // console.log(data);
    //   total_cases.innerHTML = data.total_cases
    //   new_cases.innerHTML = data.new_cases
    //   new_death.innerHTML = data.new_deaths
    //   total_death.innerHTML = data.total_deaths
    //   total_recovered.innerHTML = data.total_recovered


    })
  )
  .catch((err) => {
    console.log(err)
  })