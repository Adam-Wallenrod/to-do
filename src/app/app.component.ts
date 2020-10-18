import {Component, OnInit} from '@angular/core';
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
  editId: number;

  newTaskTitle: string;
  newTaskContent: string;

  ngOnInit() {
    this.tasks.push(this.testTask);
    console.log('testTask: ', this.testTask);
  }


  createTask() {
    const newTask = new ModifiableTask(this.newTaskTitle, this.newTaskContent);
    this.tasks.push(newTask);
    this.clearTaskFormData();
  }


  clearTaskFormData() {
    this.newTaskTitle = '';
    this.newTaskContent = '';
  }


  startEditTask(taskToModify: ModifiableTask) {
    this.newTaskTitle = taskToModify.getTitle();
    this.newTaskContent = taskToModify.getContent();
    this.editId = taskToModify.getId();
  }

  editTask(id: number) {
    const editedTask = this.tasks.find(task => task.getId() === id);
    editedTask.changeTitle(this.newTaskTitle);
    editedTask.changeContent(this.newTaskContent);
    this.clearTaskFormData();
    this.editId = null;
  }


  deleteTask(taskToDelete: ModifiableTask, index: number) {
    this.tasks.splice(index, 1);
  }


  onClose() {
    close('closing Modal');
    this.isCreateMode = false;
    this.editId = null;
  }

}
