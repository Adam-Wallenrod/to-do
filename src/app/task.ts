export class Task {

  protected title: string;
  protected content: string;
  protected timeStamp: number;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.timeStamp = this.getTimeTicks();
  }

  public getTitle(): string {
    return this.title;
  }


  public getContent(): string {
    return this.content;
  }


  public getTimeStamp(): number {
    return this.timeStamp;
  }




  private getTimeTicks(): number {
    return Date.now();
  }


}
