fetch(
    'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': 'ba61444e23msh2308b97d6e9dcbap10dd42jsne2697e354bcb',
      },
    }
  )
    .then((response) =>
      response.json().then((data) => {
        // console.log(data)
        let countries_stat = data.countries_stat
        //Getting all the country statistic using a loop
        for (let i = 0; i < countries_stat.length; i++) {
          // console.log(countries_stat[i]);
          //we will start by inserting the new rows inside our table

          
        //   let row = table.insertRow(i + 1)
        //   let country_name = row.insertCell(0)
        //   let cases = row.insertCell(1)
        //   let deaths = row.insertCell(2)
        //   let serious_critical = row.insertCell(3)
        //   let recovered_per_country = row.insertCell(4)
        //   country_name.innerHTML = countries_stat[i].country_name
        //   cases.innerHTML = countries_stat[i].cases
        //   deaths.innerHTML = countries_stat[i].deaths
        //   serious_critical.innerHTML = countries_stat[i].serious_critical
        //   recovered_per_country.innerHTML = countries_stat[i].total_recovered
        }
      })
    )
    .catch((err) => {
      console.error(err)
    })