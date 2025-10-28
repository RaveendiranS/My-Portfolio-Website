import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Skill } from './skill/skill';
import { Awards } from './awards/awards';
import { Projects } from './projects/projects';
import { Contactme } from './contactme/contactme';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        data: { Animation: 'HomeAnimationPage' }
    },
    {
        path: 'home',
        component: Home,
        data: { Animation: 'HomeAnimationPage' }
    },
    {
        path: 'about',
        component: About,
        data: { Animation: 'AboutAnimationPage' }
    },
    {
        path: 'skill',
        component: Skill,
        data: { Animation: 'SkillAnimationPage' }
    },
    {
        path: 'awards',
        component: Awards,
        data: { Animation: 'AwardsAnimationPage' }
    },
    {
        path: 'projects',
        component: Projects,
        data: { Animation: 'ProjectsAnimationPage' }
    },
    {
        path: 'contactme',
        component: Contactme,
        data: { Animation: 'ContactmeAnimationPage' }
    }
];
