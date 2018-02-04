var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    year: '2001 r.',
    director: 'reż. Chris Columbus',
    image: './images/potter.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    year: '1994 r.',
    director: 'reż. Rob Minkoff',
    image: './images/lion.jpg'
  },
  {
  	id: 3,
  	title: 'Jurassic Park',
  	desc: 'Film o parku rozrywki z żywymi dinozaurami',
  	year: '1993 r.',
  	director: 'reż. Steven Spielberg',
  	image: './images/park.jpg'
  },
  {
  	id: 4,
  	title: 'Władca Pierścieni',
  	desc: 'Film o przygodach małego hobbita',
  	year: '2001 r.',
  	director: 'reż. Peter Jackson',
  	image: './images/ring.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.year),
      React.createElement('p', {}, movie.director),
      React.createElement('img', {src: movie.image})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));