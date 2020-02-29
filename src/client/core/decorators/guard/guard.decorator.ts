
import "reflect-metadata";

export enum GKeys {
    NAME = "guard_decorator:name"
}

export const Guard = (name: string): ClassDecorator =>
    (target) => {
        Reflect.defineMetadata(GKeys.NAME, name , target.prototype);
    }
