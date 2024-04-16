import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';
import { vizsgal } from '../vizsgal';

@Component({
  selector: 'app-vizsgalat',
  templateUrl: './vizsgalat.component.html',
  styleUrls: ['./vizsgalat.component.css']
})
export class VizsgalatComponent {
  
  r = 0
  b = 0

  r2:any
  b2:any

  selected = ""

  redValue:any = 0
  blueValue:any = 0

  redValue2 = ""
  blueValue2 = ""

  redRange = 0
  blueRange = 0

  audio: HTMLAudioElement

  redkep: HTMLImageElement
  bluekep: HTMLImageElement

  constructor(private data:DataService) {
    this.audio = new Audio("../../assets/hang/videoplayback.m4a");
    this.redkep = new Image()
    this.bluekep = new Image()
  }

  nohear() {
    if (!this.selected) {
      Swal.fire({
        icon: "warning",
        title: "Nincs kiválasztva!"
      })
    } else if (this.selected == 'red') {
      this.r = 0
      this.r2 = setInterval(
        () => {
          if (0<=this.r && this.r<20000) {
            if (0<=this.r && this.r<8000) {
              this.r++
              this.redValue2 = "Kicsi"
              this.redkep.src = "../../assets/image/redkep1.png"
            }
            if (8000<=this.r && this.r<15000) {
              this.r++
              this.redValue2 = "Közepes"
              this.redkep.src = "../../assets/image/redkep2.png"
            }
            if (15000<=this.r && this.r<20000) {
              this.r++
              this.redValue2 = "Nagyon"
              this.redkep.src = "../../assets/image/redkep3.png"
            }
            this.r++
            this.redRange = this.r
            this.redValue = this.r
            this.audio.play()
          }
        }, 1
      )
    } else {
      this.b = 0
      this.b2 = setInterval(
        () => {
          if (0<=this.b && this.b<20000) {
            if (0<=this.b && this.b<8000) {
              this.b++
              this.blueValue2 = "Kicsi"
              this.bluekep.src = "../../assets/image/bluekep1.png"
            }
            if (8000<=this.b && this.b<15000) {
              this.b++
              this.blueValue2 = "Közepes"
              this.bluekep.src = "../../assets/image/bluekep2.png"
            }
            if (15000<=this.b && this.b<20000) {
              this.b++
              this.blueValue2 = "Nagyon"
              this.bluekep.src = "../../assets/image/bluekep3.png"
            }
            this.b++
            this.blueRange = this.b
            this.blueValue = this.b
            this.audio.play()
          }
        }, 1
      )
    }
  }

  hear() {
    if (!this.selected) {
      Swal.fire({
        icon: "warning",
        title: "Nincs kiválasztva!"
      })
    } else if (this.selected  == 'red') {
      clearInterval(this.r2)
      this.audio.pause()
      this.audio.currentTime = 0
    } else {
      clearInterval(this.b2)
      this.audio.pause()
      this.audio.currentTime = 0
    }
  }

  ertekeles() {
    if (!this.selected) {
      Swal.fire({
        icon: "warning",
        title: "Nincs kiválasztva!"
      })
    } else {
      let v= new vizsgal()
      v.left=this.b
      v.right=this.r
      console.log("bal", v)
      this.data.createNew(v)
      Swal.fire({
        title: "Bal: " + this.r + " Hz",
        imageUrl: this.redkep.src,
        imageWidth: 450,
        imageHeight: 250,
      }).then(
        () => {
          Swal.fire({
            title: "Jobb: " + this.b + " Hz",
            imageUrl: this.bluekep.src,
            imageWidth: 450,
            imageHeight: 250,
          }).then(
            async () => {
              const {value: message} = await Swal.fire({
                icon: "success",
                title: "Köszönjük!",
                input: "textarea",
                inputLabel: "Üzenet",
                inputPlaceholder: "Írja be üzenetét ide...",
                inputValidator: (value) => {
                  return !value && "Kérem írja be a üzenet" || null;
                },
                showCancelButton: true,
              })
              if (message) {
                Swal.fire(`Üzensz: ${message}`);
              }
            }
          )
        }
      )
/*
      let body:any = {}
      body.left = this.redValue
      body.right = this.blueValue
      this.data.createNew(body).then(
        () => {
          this.redValue = ""
          this.blueValue = ""
        }
      )*/
  
      clearInterval(this.r2)
      clearInterval(this.b2)

      this.selected = "";

      this.redRange = 0
      this.redValue = 0

      this.blueRange = 0
      this.blueValue = 0

      this.redValue2 = ""
      this.blueValue2 = ""
    }
  }
}