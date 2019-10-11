import { Component, OnInit } from '@angular/core';
var JSZip = require("jszip");

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.page.html',
  styleUrls: ['./multi-file-upload.page.scss'],
})

export class MultiFileUploadPage implements OnInit {

  dataZip: any;
  url;
  zipUrl: any;
  constructor() { }
  ngOnInit() {
    this.zipUrl = "";
  }

  transformPDF(event) {
    debugger;
    var zip = new JSZip();
    console.log(this.dataZip);
    zip.loadAsync(event.target.files[0]).then(function(zip) {
      // Leemos del archivo zip.
      zip.file("Hola.txt").async("string"); // una promesa de "Hola Mundo\n"
  });
  //   JSZip.getBinaryContent(this.dataZip, function(err, data) {
  //     if(err) {
  //         throw err; // or handle err
  //     }
  
  //     JSZip.loadAsync(data).then(function () {
  //         // ...
  //     });
  // });
    var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (imageRender: any) => { 
        this.dataZip = imageRender.target.result;
      //  console.log(this.dataZip);
      }
    //   var f = event.target.files[0]; // FileList object
    //   var reader = new FileReader();
    //   // Closure to capture the file information.
    //   reader.onload = (function(theFile) {
    //     return function(e) {
    //       var binaryData = e.target.result;
    //       //Converting Binary Data to base 64
    //       var base64String = window.btoa(binaryData);
    //       console.log("testo=> ", base64String);
    //     }
    //   })(f);
      
    // var reader = new FileReader();
    // reader.readAsDataURL(this.dataZip); 
    // reader.onload = (imageRender: any) => { 
    //   var photosArray = imageRender.target.result;
    // }
  }

}
