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

  newTaskTitle: string;
  newTaskContent: string;

  ngOnInit() {
    this.tasks.push(this.testTask);
    console.log('testTask: ', this.testTask);
  }


  createTask() {
    const newTask = new ModifiableTask(this.newTaskTitle, this.newTaskContent);
    this.tasks.push(newTask);
    this.clearNewTaskData();
  }


  clearNewTaskData() {
    this.newTaskTitle = '';
    this.newTaskContent = '';
  }


  editTask(taskToModify: ModifiableTask) {

  }


  deleteTask(taskToDelete: ModifiableTask, index: number) {
    this.tasks.splice(index, 1);
  }

}
