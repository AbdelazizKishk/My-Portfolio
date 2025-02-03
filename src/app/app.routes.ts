import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
    title: 'About',
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./skills/skills.component').then((m) => m.SkillsComponent),
    title: 'Skills',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Projects',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./notfound/notfound.component').then((m) => m.NotfoundComponent),
    title: 'Error',
  },
];
