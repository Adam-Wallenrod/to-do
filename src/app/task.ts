export class Task {

  static latestId: number;
  protected id: number;
  protected title: string;
  protected content: string;
  protected timeStamp: number;


  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.timeStamp = this.getTimeTicks();
    this.id = Task.incrementId();
  }

  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      ++this.latestId;
    }
    return this.latestId;
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

  public getId(): number {
    return this.id;
  }


  private getTimeTicks(): number {
    return Date.now();
  }


}
