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
			const characterImage = document.createElement("img");
			const characterName = document.createElement("h2");

			characterImage.src = character.image;
			characterName.innerText = character.name;
			characterName.style.color = "white";

			characters.appendChild(characterImage);
			characters.appendChild(characterName);
		});
	} catch (error) {
		console.log(error);
	}
};

getDataCharacters();
