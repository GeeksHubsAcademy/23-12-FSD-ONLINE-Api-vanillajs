const characters = document.getElementById("characters");

// const dataFetching = fetch('https://rickandmortyapi.com/api/character');
// console.log(dataFetching);

// Promesas

// fetch('https://rickandmortyapi.com/api/character')
//   .then(response => response.json())
//   .then(response => {
//     // console.log(response.results);
//     response.results.forEach(character => {
//       const characterImage = document.createElement('img');
//       const characterName = document.createElement('h2');

//       characterImage.src = character.image;
//       characterName.innerText = character.name;
//       characterName.style.color = 'white'

//       characters.appendChild(characterImage)
//       characters.appendChild(characterName)
//     }
//     )
//   })
//   .catch(error => console.log(error))

// Async Await
const getDataCharacters = async () => {
	try {
		const dataFetching = await fetch(
			"https://rickandmortyapi.com/api/character"
		);
		const data = await dataFetching.json();

		data.results.forEach((character) => {
			const card = document.createElement('div');
			card.classList.add('card');

			//// Para añadir espacio entre las tarjetas
			// card.style.marginBottom = '3rem';
			
			card.innerHTML = `
				<img src="${character.image}" class="card-img-top" alt="${character.name}">
				<div class="card-body">
					<h5 class="card-title">${character.name}</h5>
				</div>
			`;

			characters.appendChild(card);
		});
	} catch (error) {
		console.log(error);
	}
};

getDataCharacters();
