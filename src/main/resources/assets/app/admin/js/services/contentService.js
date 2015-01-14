var contentService = function ($http) {
  var getAllCategories = function (type) {
    return $http.get('/api/category/'+type);
  };

  var getAllSongs = function () {
    return $http.get('/api/songs/getAllSongs');
  };

  var getAllPeople = function () {
    return $http.get('/api/people');
  };

  var getAllCouplets = function () {
    return $http.get('/api/couplets');
  };

  var getAllWords = function () {
    return $http.get('/api/words');
  };

  return {
    getAllPeople:getAllPeople,
    getAllCategories:getAllCategories,
    getAllSongs: getAllSongs,
    getAllCouplets:getAllCouplets,
    getAllWords:getAllWords,
  };
};