import { Component } from '@angular/core';
import * as Mustache from 'mustache';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.less']
})
export class BlogsComponent {
  ngOnInit() {
    let componentList = document.getElementsByClassName("article-list");
    let component = componentList.item(0);
    console.log("Component: ", component);
    let structure = `
      <h2>{{ test }}</h2>
    `;
    let data = {
      test: "This is a test string",
    };
    console.log("Using Mustache version: ", Mustache.version);
    let template = Mustache.render(structure, data);
    console.log("Output Template: ", template);
    
    if (component) {
      component.innerHTML = template;
    }
  }
}
