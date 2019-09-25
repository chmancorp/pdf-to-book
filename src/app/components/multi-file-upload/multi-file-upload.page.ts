import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.page.html',
  styleUrls: ['./multi-file-upload.page.scss'],
})
export class MultiFileUploadPage implements OnInit {

  dataZip: any;
  url;
  constructor() { }
  ngOnInit() {
  }
  
  transformPDF(){
    debugger;
    console.log(this.dataZip);
    var reader = new FileReader();
    reader.readAsDataURL(this.dataZip); 
    reader.onload = (imageRender: any) => { 
      var photosArray = imageRender.target.result;
  }
}

}
