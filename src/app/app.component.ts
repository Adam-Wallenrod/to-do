import {Component, OnInit} from '@angular/core';
import {Task} from './task';
import {ModifiableTask} from './modifiable-task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'to-do-app';
  testTask = new ModifiableTask('First task', 'This is my first task ever.');
  tasks: ModifiableTask[] = [];
  isCreateMode: boolean;

  ngOnInit() {
    this.tasks.push(this.testTask);
    console.log('testTask: ', this.testTask);
  }


}
