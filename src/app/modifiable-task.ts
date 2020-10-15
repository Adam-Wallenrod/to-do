import {Task} from './task';

export class  ModifiableTask  extends Task {


  constructor(title: string, content: string) {
    super(title, content);
  }

  public changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  public changeContent(newContent: string): void {
    this.content = newContent;
  }

}
