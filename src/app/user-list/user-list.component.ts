import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: Observable<any[]> = of([]);
  usersArray: any[] = [];
  private userService = inject(UserService);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  // getUsers(): void {
  //   this.userService.getUsers().subscribe((users) => (this.usersArray = users));
  // }
}
