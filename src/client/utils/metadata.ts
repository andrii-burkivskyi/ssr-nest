import "reflect-metadata";

export const pushPropertyKey = (metadataKey: string, target: Object, propertyKey: string | symbol) => {
    const keys = Reflect.getMetadata(metadataKey, target) ?? [];
    keys.push(propertyKey);
    Reflect.defineMetadata(metadataKey, keys, target);
}

export const pushPropertyData = <D>(metadataKey: string, target: Object, data: D) => {
    const keys = (Reflect.getMetadata(metadataKey, target) ?? []) as D[];
    keys.push(data);
    Reflect.defineMetadata(metadataKey, keys, target);
}