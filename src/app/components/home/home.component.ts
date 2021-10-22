import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario

  imagenes: Array<Imagen> = []

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let data = JSON.parse(sessionStorage.getItem("sesionToken") || '{}')
    console.log("data", data)
    this.usuario = data.user 
    console.log("usuario", this.usuario)

    this.authService.obtenerPelicula(1, data.payload.token).subscribe( res=> {
      console.log("res", res)
      res.data.forEach((element:any) => {
        let img:Imagen
        img = element
        img.path = res.imageBaseUrl + element.backdrop_path,
        // let img = {
        //   id: element.id,
        //   path: res.imageBaseUrl + element.backdrop_path,
        //   original_title: original_title
        // }
        this.imagenes.push(img)
      });
      console.log("this.imagenes", this.imagenes)
    } )
  }

}



export interface Imagen {
  id: number,
  original_language: string,
  original_title: string,
  overview:string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  path: string
}