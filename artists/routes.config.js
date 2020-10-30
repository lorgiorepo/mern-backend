const ArtistController = require('./controllers/artist.controller');

exports.routesConfig = function(app) {
    app.post('/artists', [ArtistController.insert]);
    app.get('/artists', [ArtistController.list]);
    app.get('/artists/:artistId', [ArtistController.getById]);
    app.patch('/artists/:artistId', [ArtistController.patchById]);
    app.delete('/artists/:artistId', [ArtistController.removeById]);
}