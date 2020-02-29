import "reflect-metadata";

import { pushPropertyKey } from "../../../../utils/metadata";

export enum RIKeys {
    NAME = "front_ri_keys:name",
    QUERY = "front_ri_keys:query",

    KEYS = "front_ri_keys:keys",
    IS_PRIMARY = "front_ri_keys:is_primary",
}

export interface ConnectedQuery {
    get: string;
    create: string;
    update: string;
    delete: string;
}

interface IGqlFieldProps {
    isPrimary: boolean
}

export const GqlConnect = (name: string, props: ConnectedQuery): ClassDecorator => (target) => {
    Reflect.defineMetadata(RIKeys.NAME, name, target.prototype)
    Reflect.defineMetadata(RIKeys.QUERY, props, target.prototype)
}

export const GqlPrimaryField = () => GqlField({ isPrimary: true });

export const GqlField = (props?: IGqlFieldProps): PropertyDecorator => (target, propertyKey) => {
    pushPropertyKey(RIKeys.KEYS, target, propertyKey);
    const isPrimary = props?.isPrimary ?? false;
    Reflect.defineMetadata(RIKeys.IS_PRIMARY, isPrimary, target, propertyKey);
}
