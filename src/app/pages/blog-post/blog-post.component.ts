import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Mustache from 'mustache';
import { BlogPost } from 'src/app/data-models/blog-post';
import { BlogPostDataSourceService } from 'src/app/services/blog-post-data-source.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less']
})
export class BlogPostComponent {
  blogPost: BlogPost | undefined

  constructor(private route : ActivatedRoute, private router : Router, private dataSource: BlogPostDataSourceService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log("Received id:", id)
      this.dataSource.getBlogPost(id).then((blogPost) => {
        console.log("Received blog post:", blogPost)
        this.blogPost = blogPost

        let componentList = document.getElementsByClassName("blog-post");
        let component = componentList.item(0);
        let structure = `
        {{{ html }}}
        `;
        let template = Mustache.render(structure, blogPost)
        console.log(template)
        if (component) {
          component.innerHTML = template;
        }
      })
      .catch((error) => {
        console.log("Received error: " + error);
        this.router.navigate(["blogs"]);
      })
   });
  }
  
  toggleMenuButton() {
    let menu = document.getElementById("main-navigation-content");
    let hamburgerIcon = document.getElementById("navigation-icon");
    if (menu != null && hamburgerIcon != null) {
      if (menu.className === "topnav") {
        menu.className += " responsive";
        hamburgerIcon.setAttribute("aria-expanded", "true")
      } else {
        menu.className = "topnav";
        hamburgerIcon.setAttribute("aria-expanded", "false")
      }
    }
  }
}
