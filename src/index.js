const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.name)
    let countryTmp = "";
    data.forEach(item => {
      const card = `
      <div>
        <section class="card">
        <img src="${item.flag}" alt="flag" class="flag"> </img>
          <h1>${item.name}</h1>
          <ul>
            <li>Capital: ${item.capital}</li>
            <li>Region: ${item.region}</li>
            <li>Language: ${item.lenguages}</li>
            <li>Borders: ${item.borders}</li>
          </ul>
        </section>
      </div>
        `;
      countryTmp += card;
    });
    document.getElementById("cards").innerHTML = countryTmp;
  })
  .catch(err => console.log(err))

  