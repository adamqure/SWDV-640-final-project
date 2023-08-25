import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BlogPost } from '../data-models/blog-post';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostDataSourceService {
  dataChanged: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;
  blogPosts: BlogPost[] = []

  constructor(private localStorageService: LocalStorageService) { 
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged = this.dataChangeSubject.asObservable();
    console.log("BlogPost Data Source Service Initialized");
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    console.log("Fetching all blog posts");
    await this.localStorageService.getBlogPostList().then((response) => {
      this.blogPosts = response
    }) 
    return this.blogPosts;
  }

  getBlogPost(withID: string | undefined | null): Promise<BlogPost> {
    console.log("Fetching blogPost", withID);
    return this.localStorageService.getBlogPost(withID)
  }
}
