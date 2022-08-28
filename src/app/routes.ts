import {RouterModule ,Routes } from "@angular/router";
import { AboutComponent } from "src/about/about.component";
import { MovieEditorComponent } from "src/movie-item/movie-editor/movie-editor.component";
import { AddItemComponent } from "src/movie-list/add-item/add-item.component";
import { MovieListComponent } from "src/movie-list/movie-list.component";

const appRouters: Routes =[
    {path :"", component: MovieListComponent},
    {path: "new", component: AddItemComponent},
    {path: "edit/:id", component: MovieEditorComponent},
    {path: "about", component: AboutComponent}

]
export const routing = RouterModule.forRoot(appRouters);