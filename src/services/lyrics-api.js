export default function getLyrics(artist, track) {
  const url = `https://api.lyrics.ovh/v1/${artist}/${track}`;
  return fetch(url)
    .then(res => res.json());
}
