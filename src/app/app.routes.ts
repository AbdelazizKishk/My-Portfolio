import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotfoundComponent, title: 'Error' },
];
