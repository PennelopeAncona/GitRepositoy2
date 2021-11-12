type CharacterAPI = {
    id: string;
    name: string;
    status: string;
    species: string;
    episode: [string];
  };
  
type EpisodeAPI = {
    name: string;
    episode: string;
  };
  
type Character = Omit<CharacterAPI, "episode"> & {
    episode: Array<EpisodeAPI>;
  };
type Episode = EpisodeAPI;

export {Character, CharacterAPI, Episode, EpisodeAPI};