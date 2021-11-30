export class DynamicClass<T> {
  constructor() { }
  [k: string]: T
}

export interface DynamicObject {[k: string]: any;}

export class GlobalObjects {
  public static apiURL: string = "https://itsolutionstuff.com/";
  public static siteTitle: string = "This is example of ItSolutionStuff.com";

  public static ApplicationMemory:DynamicClass<string> = new DynamicClass<string>();
  public static AppMem: DynamicObject ={}
}










