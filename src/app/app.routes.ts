import { Routes } from '@angular/router';
import { InterfazPage } from './features/interfaz-page/interfaz-page';
import { heuristicaRoutes } from './features/heuristica/heuristica.routes';

export const routes: Routes = [
  {
  path: "",
  component : InterfazPage,
  },
  {
    path: "heuristica",
    loadChildren: () => Promise.resolve(heuristicaRoutes)
  }
];
