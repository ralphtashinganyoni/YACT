import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { OurTeamComponent } from '../components/our-team/our-team.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BlogComponent } from '../components/blog/blog.component';
import { FqaComponent } from '../components/fqa/fqa.component';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { PageUnderConstructionComponent } from '../components/page-under-construction/page-under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    OurTeamComponent,
    BlogComponent,
    FqaComponent,
    PageUnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'our-team', component: OurTeamComponent },
      { path: 'frequently-asked-questions', component: FqaComponent },
      { path: 'page-under-construction', component: PageUnderConstructionComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
