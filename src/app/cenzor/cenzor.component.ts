import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  displayText: Array<string> = [];
  writeWord = '';
  textareaWord = '';
  isAdd = false;
  isWrite = false;
  a: string;
  b=[];
  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    if (this.writeWord) {
      this.displayText.push(this.writeWord);
      this.isAdd = false;
      this.writeWord = '';
      this.a = this.displayText.join()
    }
    else {
      this.isAdd = true;
    }
  }

  cenzor(): void {
    if(this.textareaWord){
      this.isWrite=false;
      this.b = this.textareaWord.split(/\b/);
      let censored = this.b.map(word => this.displayText.includes(word) ?
            '*'.repeat(word.length)
            : word)
      this.textareaWord=censored.join('');
    }
    else{
      this.isWrite=true;
    }
  }

  reset(): void {
    this.displayText.splice(0);
    this.a = this.displayText.join();
    this.textareaWord = '';
  }
}






