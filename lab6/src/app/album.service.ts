import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Album, Photo} from "./models";
import {AlbumsComponent} from "./albums/albums.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumService  {
  BASE_URL: string;

  constructor(private client: HttpClient) {
    this.BASE_URL  = 'https://jsonplaceholder.typicode.com';
  }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album : Album):Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums/`, album);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.patch<Album>(`${this.BASE_URL}/albums/${album.id}`, album)
  }


  getPhotos(albumId: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${albumId}/photos`);
  }

  deleteAlbum(album: Album):Observable<Album>{
    return this.client.delete<Album>(`${this.BASE_URL}/albums/${album}`).pipe(
      tap(response => console.log('DELETE response:', response))
    )
  }


}
