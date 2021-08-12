export interface IFilms {
results:{
  id: number,
  original_title: string,
  overview: string,
  popularity: number,
  title: string,
  poster_path: string,
  release_data: string,
  vote_average: number,
  backdrop_path: string,
  gener_ids: [number, number, number, number],
  original_language: string,
  video: boolean,
  release_date: number,
  voute_count: number
}
}
export interface ILinks {
next: string,
  prev: string
}

export interface IFIlmsFull {
  links: ILinks,
  count: number,
  data :IFilms[]
}

