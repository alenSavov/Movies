handlers.getCinema = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    cinemaService.getAllMovies()
        .then(function (res) {
            let movies = res;
            ctx.movies = movies;



            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                movie: 'templates/cinema/movie.hbs'
            }).then(function () {
                this.partial('templates/cinema/cinema.hbs');
            }).catch(function (err) {
                console.log(err);
            });

        }).catch(function (err) {
        console.log(err)
    })

}

handlers.getAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/cinema/addMovie.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.addMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let title = ctx.params.title;
    let imageUrl = ctx.params.imageUrl;
    let description = ctx.params.description;
    let genres = ctx.params.genres;
    let tickets = ctx.params.tickets;

    let data = {
        title,
        imageUrl,
        description,
        genres,
        tickets
    };

    if (!description.length >= 6) {
        notifications.showError('The title should be at least 6 characters long');
        return;
    }

    if (!description.length >= 10) {
        notifications.showError('The description should be at least 10 characters long.');
        return;
    }

    if (!imageUrl.startsWith('http' || imageUrl === '')) {
        notifications.showError('The image should start with "http://"');
        return;
    }

    if (isNaN(tickets)) {
        notifications.showError('o\tThe available tickets should be a number.');
        return;
    }

    cinemaService.addMovie(data)
        .then(function (res) {
            notifications.showSuccess('Movie created successfully.');
            ctx.redirect('#/home');
        }).catch(function (err) {
        notifications.showError(err)
    });
}


handlers.detailsMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    cinemaService.getMovieById(id)
        .then(function (res) {

            ctx.title = res.title;
            ctx.description = res.description;
            ctx.imageUrl = res.imageUrl;
            ctx.genres = res.genres;
            ctx.tickets = res.tickets;

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs'
            }).then(function () {
                this.partial('templates/cinema/detailsMovie.hbs');
            }).catch(function (err) {
                console.log(err);
            });

        })
}

handlers.getMyMovies = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let userId = sessionStorage.getItem('id');



    cinemaService.getAllMovies()
        .then(function (res) {
            console.log('from sort')
            let myMovies = res.filter(x => x._acl.creator === userId);


            ctx.movies = myMovies;
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                movie: 'templates/cinema/myMovie.hbs'
            }).then(function () {
                this.partial('templates/cinema/myMovies.hbs');
            }).catch(function (err) {
                console.log(err);
            });

        }).catch(function (err) {
        console.log(err);
    })
}

handlers.getDeleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    cinemaService.getMovieById(id)
        .then(function (res) {
            ctx.title = res.title;
            ctx.description = res.description;
            ctx.imageUrl = res.imageUrl;
            ctx.genres = res.genres;
            ctx.tickets = res.tickets;
            ctx.id = id;

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/cinema/deleteMovie.hbs');
            }).catch(function (err) {
                console.log(err);
            });

        })
}

handlers.deleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    cinemaService.deleteMovieById(id)
        .then(function (res) {
            notifications.showSuccess('Movie removed successfully!');
            ctx.redirect('#/home');
        }).catch(function (err) {
        console.log(err);
    })
}


handlers.getEditMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    cinemaService.getMovieById(id)
        .then(function (res) {
            ctx.title = res.title;
            ctx.description = res.description;
            ctx.imageUrl = res.imageUrl;
            ctx.genres = res.genres;
            ctx.tickets = res.tickets;
            ctx.id = id;

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/cinema/editMovie.hbs');
            }).catch(function (err) {
                console.log(err);
            });
        })
}

handlers.editMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;

    let title = ctx.params.title;
    let imageUrl = ctx.params.imageUrl;
    let description = ctx.params.description;
    let genres = ctx.params.genres;
    let tickets = ctx.params.tickets;

    let data = {
        title,
        imageUrl,
        description,
        genres,
        tickets
    };

    cinemaService.editMovie(id, data)
        .then(function (res) {
            console.log(res)
            notifications.showSuccess('Edited successfully!');
            ctx.redirect('#/home');
        }).catch(function (err) {
        console.log(err);
    });
}

handlers.buyTicket = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.id;


    cinemaService.getMovieById(id)
        .then(function (res) {

            let title = res.title;
            let imageUrl = res.imageUrl;
            let description = res.description;
            let genres = res.genres;
            let tickets = Number(res.tickets) - 1;

            let data = {
                title,
                imageUrl,
                description,
                genres,
                tickets
            };
            cinemaService.buyTicket(id, data)
                .then(function (res) {
                    notifications.showSuccess(`Successfully bought ticket for ${res.title}!`);
                }).catch(function (err) {
                console.log(err);
            })
        }).catch(function (err) {
        console.log(err);
    })
}
