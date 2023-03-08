import {Component, OnInit} from '@angular/core';
import {Album, Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AlbumService} from "../album.service";
import {Location} from "@angular/common";
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{

  album!: Album;

  photos!: Photo[];
  loaded: boolean

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private location: Location) {
    this.loaded = false;

  }

  ngOnInit(): void {
    this.getAlbum();
    this.getPhotos();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    });
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  returnBack(){
    this.location.back();
  }
}
