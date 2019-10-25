import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

let JSZip = require("jszip");

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.page.html',
  styleUrls: ['./multi-file-upload.page.scss'],
})

export class MultiFileUploadPage implements OnInit {

  dataZip: any;
  url;
  zipUrl: any;
  zip = new JSZip();
  zipBase: any;

  constructor() { }
  ngOnInit() {
    this.zipUrl = "";
  }

  selectZip(data) {
    debugger;
    console.log(this.zip);
    console.log(this.zipBase);

  }
  async transformPDF(event) {
    debugger;
    var reader = new FileReader();
    var zip2 = new JSZip();
    let base644;
    console.log(event.target.files[0]);
     let data1 = await this.zip.loadAsync(event.target.files[0]).then(function (zip) {
        
      // Leemos del archivo zip.
      //  let zipBase = zip.generate({type:"base64"});
      //  zip.file("Hola.txt").async("string"); // una promesa de "Hola Mundo\n"
      var promise2 = zip.generateAsync({ type: "base64" }).then(async function (abc) {
        console.log(abc)
        
        
        base644 = await abc;
      //  console.log(this.dataZip);
         saveAs(abc,"test.zip");
        let promise3 = zip.generateAsync({ type: "blob" }).then(function (asd) {
          saveAs(asd, "test2.zip");
        
        });
      });
debugger


      // let promise = zip.generateAsync({ type: "blob" }).then(function (content) {
      //   // see FileSaver.js
      //   // saveAs(content, "example.zip");
      //   reader.readAsDataURL(content);
      //   reader.onload = (imageRender: any) => {
      //     console.log(imageRender.target.result);
      //     this.dataZip = imageRender.target.result;
      //     console.log(this.dataZip);
      //   }
      // });

    });
    this.zipBase = base644;
    // this.zipBase = this.zip.generateAsync({type: "blob"});
    //   JSZip.getBinaryContent(this.dataZip, function(err, data) {
    //     if(err) {
    //         throw err; // or handle err
    //     }

    //     JSZip.loadAsync(data).then(function () {
    //         // ...
    //     });
    // });
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onload = (imageRender: any) => {
    //   this.dataZip = imageRender.target.result;
    //   console.log(this.dataZip);
    // }
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
