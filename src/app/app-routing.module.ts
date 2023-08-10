import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'campaign/:id', component: CampaignDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
