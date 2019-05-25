const handlers = {}

$(() => {
  const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    // ADD YOUR ROUTES HERE
    this.get('#/cinema', handlers.getCinema);
    this.get('#/getAddMovie', handlers.getAddMovie);
    this.post('#/addMovie', handlers.addMovie);
    this.get('#/details/:id', handlers.detailsMovie);
    this.get('#/getMyMovies', handlers.getMyMovies);
    this.get('#/deleteMovie/:id', handlers.deleteMovie);
    this.get('#/getDeleteMovie/:id', handlers.getDeleteMovie);
    this.get('#/getEditMovie/:id', handlers.getEditMovie);
    this.post('#/editMovie/:id', handlers.editMovie);
    this.get('#/buyTicket/:id', handlers.buyTicket);

  });
  app.run();
});

