import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { InsideTestComponent } from './test/inside-test/inside-test.component';


const routes: Routes = [

  {path: 'test' , component: TestComponent },
  {path: 'inside' , component: InsideTestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
