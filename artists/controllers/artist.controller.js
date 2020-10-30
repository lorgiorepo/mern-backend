const ArtistModel = require('../models/artist.model');

exports.insert = (req, res) => {
    ArtistModel.createArtist(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
}

exports.patchById = (req, res) => {

    ArtistModel.patchArtist(req.params.artistId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.list = (req, res) => {
    ArtistModel.list()
        .then((result) => {
            res.status(200).send(result);
        })
}

exports.getById = (req, res) => {
    ArtistModel.findById(req.params.artistId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.removeById = (req, res) => {
    ArtistModel.removeById(req.params.artistId)
        .then((result)=>{
            res.status(204).send({});
        });
};