export interface Album {
  id: number;
  title: string;

}


export interface Photo {
  album_id: number,
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
