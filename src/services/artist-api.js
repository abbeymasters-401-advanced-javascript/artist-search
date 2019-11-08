export function getArtists(search, page) {
  const perPage = 25;
  const url = `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=${perPage}&offset=${perPage * (page - 1)}`;
  return fetch(url)
    .then(res => res.json());
}

export function getAlbums(id, page) {
  const perPage = 4;
  const url = `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=${perPage}&offset=${perPage * (page - 1)}`;
  return fetch(url)
    .then(res => res.json());
}

export function getTracks(id) {
  const url = `http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`;
  return fetch(url)
    .then(res => res.json());
}
