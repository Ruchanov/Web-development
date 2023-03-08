import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Album} from "../models";
import {AlbumService} from "../album.service";
import {AlbumsComponent} from "../albums/albums.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  loaded: boolean;
  newAlbumTitle: string;


  constructor(private route: ActivatedRoute, private albumService: AlbumService, private location: Location) {
    this.album = {} as Album;
    this.loaded = true;
    this.newAlbumTitle = '';

  }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;

      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });

    })
  }

  changeAlbumTitle(albumId: number): void {
    this.album.title = this.newAlbumTitle;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      this.newAlbumTitle = '';
    });
  }

  deleteAlbum(): void{
    this.albumService.deleteAlbum(this.album).subscribe(album=>{
      this.returnBack()
    })
  }

  returnBack(){
    this.location.back();
  }
}
