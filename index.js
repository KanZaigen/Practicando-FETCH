const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72498933camsh6c61f03c97b7adfp1ba77fjsne4ecd757c7ab',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=david%20fyncher', options)
	.then(response => response.json())
	.then(response => 
		{
			const arrayMovies = response.d
			arrayMovies.map ( (element) => {
				const title = element.l
				console.log(element);
				const image = element.i.l
				console.log();
			})
		}
)
	.catch(err => console.error(err)); 