import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SolidButtonComponent } from './components/solid-button/solid-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    BlogPostComponent,
    CampaignsComponent,
    CampaignDetailsComponent,
    SolidButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
