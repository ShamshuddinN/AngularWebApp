import { Routes } from '@angular/router';
import { Form1 } from './components/form1/form1';
import { Home } from './components/home/home';
import { Form2 } from './components/form2/form2';
import { Form11 } from './components/form11/form11';
import { Form12 } from './components/form12/form12';
import { Parent as p1 } from './components/parentChild/parent/parent';
import { Parent as p2 } from './components/childParent/parent/parent';

export const routes: Routes = [
    { path: 'form1', component: Form1, 
            children: [
            {
                path: 'form-a', // child route path
                component: Form11, // child route component that the router renders
            },
            {
                path: 'form-b',
                component: Form12, // another child route component that the router renders
            },
        ],
    },


    { path: 'form2', component: Form2 },
    { path: 'parentChild', component: p1 },
    { path: 'childParent', component: p2 },
    { path: 'home', component: Home },
    { path: '', component: Home },

    // This should be at the last
    // { path: '**', component: Home }
];
