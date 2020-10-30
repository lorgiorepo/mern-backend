const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3
  },
  nationality: {
    type: String,
    required: true,
    minlength: 3
  },
  about: {
    type: String,
    required: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Artist = mongoose.model('Artist', artistSchema);

exports.findById = (id) => {
  return Artist.findById(id)
      .then((result) => {
          result = result.toJSON();
          delete result._id;
          delete result.__v;
          return result;
      });
};

exports.createArtist = (artistData) => {
  const artist = new Artist(artistData);
  return artist.save();
};

exports.list = () => {
  return new Promise((resolve, reject) => {
    Artist.find({})
          .exec(function (err, artists) {
              if (err) {
                  reject(err);
              } else {
                  resolve(artists);
              }
          })
  });
};

exports.patchArtist = (id, artistData) => {
  return Artist.findOneAndUpdate({
      _id: id
  }, artistData);
};

exports.removeById = (artistId) => {
  return new Promise((resolve, reject) => {
    Artist.deleteMany({_id: artistId}, (err) => {
          if (err) {
              reject(err);
          } else {
              resolve(err);
          }
      });
  });
};