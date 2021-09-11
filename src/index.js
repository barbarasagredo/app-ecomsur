const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
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
  });


const searchHandler = document.querySelector('#form');
const buttonSearch = document.querySelector('#button');
const data = fetch('https://restcountries.eu/rest/v2/all')

const filterCountry = (data) => {
  console.log(searchHandler.value);

  const textInput = searchHandler.value.toLowerCase();
  // console.log(textInput)
  const arr = data.filter(item => {
    let countryName = item.name.toLowerCase();
    if(countryName.indexOf(textInput) !== -1){
      return item
    }
  })
}

formCountries.addEventListener('submit', e => {
  e.preventDefault()
})

buttonSearch.addEventListener('click', filterCountry)
