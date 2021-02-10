import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TicketListComponent} from './tickets/ticket-list/ticket-list.component';
import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
    {path: 'tickets', component: TicketListComponent},
    {path: 'users', component: UserListComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}