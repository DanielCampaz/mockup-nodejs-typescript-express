const singleton: Record<string, any> = {};

function Inject<T = any>(cns: (new () => T) | string, name?: string): T {
  if (typeof cns === "string") {
    const instance = singleton[cns];

    console.log(instance, cns);
    if (instance === null || instance === undefined) {
      throw new Error(`Error to get Singleton to ${name}`);
    } else {
      return instance as T;
    }
  } else {
    const instance = singleton[cns.name];
    if (instance === null || instance === undefined) {
      singleton[name ?? cns.name] = new cns();
    }

    return singleton[cns.name] as T;
  }
}

export function Singleton<T = any>(cns: new () => T, name?: string): void {
  const instance = singleton[cns.name];
  if (instance === null || instance === undefined) {
    singleton[name ?? cns.name] = new cns();
  }
}

export default Inject;
