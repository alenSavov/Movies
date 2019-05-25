const cinemaService = (() => {

    function addMovie(data) {
        return kinvey.post('appdata', 'movies', 'kinvey', data);
    }

    function getAllMovies() {
        // return kinvey.get('appdata', `movies?query={}&sort={}`, 'kinvey');
        return kinvey.get('appdata', `movies?query={}&sort={"tickets": -1}`, 'kinvey');
    }

    function getMovieById(id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function deleteMovieById(id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function editMovie(id, data) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', data);
    }

    function buyTicket(id, data) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', data);
    }


    return {
        addMovie,
        getAllMovies,
        getMovieById,
        deleteMovieById,
        editMovie,
        buyTicket
    }
})();