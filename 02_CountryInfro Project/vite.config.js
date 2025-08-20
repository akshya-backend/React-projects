import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.apicountries.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

// function renderCountries(data) {
//   countriesContainer.innerHTML = ''
//   data.forEach((country) => {
//     const countryCard = document.createElement('a')
//     countryCard.classList.add('country-card')
//     countryCard.href = `/country.html?name=${country.name.common}`
//     countryCard.innerHTML = `
//           <img src="${country.flags.svg}" alt="${country.name.common} flag" />
//           <div class="card-text">
//               <h3 class="card-title">${country.name.common}</h3>
//               <p><b>Population: </b>${country.population.toLocaleString(
//                 'en-IN'
//               )}</p>
//               <p><b>Region: </b>${country.region}</p>
//               <p><b>Capital: </b>${country.capital?.[0]}</p>
//           </div>
//   `
//     countriesContainer.append(countryCard)
//   })
// }
