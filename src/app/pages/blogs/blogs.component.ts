import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Mustache from 'mustache';
import { Observable, Subject } from 'rxjs';
import { BlogPost } from 'src/app/data-models/blog-post';
import { BlogPostDataSourceService } from 'src/app/services/blog-post-data-source.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.less']
})
export class BlogsComponent {
  campaigns: Observable<BlogPost[]> = new Observable()
  private campaignList: Subject<BlogPost[]>

  constructor(private route : ActivatedRoute, private router : Router, private dataSource: BlogPostDataSourceService) {
    this.campaignList = new Subject<BlogPost[]>();
    this.campaigns = this.campaignList.asObservable();
  }
  
  ngOnInit() {
    this.dataSource.getAllBlogPosts().then((blogs) => {
      let componentList = document.getElementsByClassName("blog-list");
      let component = componentList.item(0);
      console.log("Component: ", component);
      let structure = `
      {{ #blogs }}
       <h2 id="{{ _id }}">{{ title }}</h2>
      {{ /blogs }}
      `;
      console.log("Using Mustache version: ", Mustache.version);
      let template = Mustache.render(structure, {
        blogs: blogs
      });
      console.log("Output Template: ", template);
      
      if (component) {
        component.innerHTML = template;
      }

      blogs.forEach((blog) => {
        let blogComponent = document.getElementById(blog._id);
        if (blogComponent) {
          blogComponent?.addEventListener("click", () => {
            campaignClicked(blog._id)
          })
        }
        
        const campaignClicked = (id: any) => {
          this.router.navigate(["blog", id])
        }
      })
    })
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
