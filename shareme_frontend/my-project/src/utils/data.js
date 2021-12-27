//query user information
export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };



//query post follow categories
export const searchQuery  = (catId) => {
  const query = `*[_type == 'pin' && category match '${catId}']{
    image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      }
    }
  }`;
  return query;
}


//feed query
export const feedQuery = (catId) => {
  const query = `*[_type == 'pin'] | order(_createAt desc){
    image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      }
    }
  }`;
  return query;
}