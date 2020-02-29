import "reflect-metadata";
import { SKeys} from "./service.decorator"

export const ServiceExtractor = <TFunction extends Function>(target: TFunction) => {
    return {
        name: Reflect.getMetadata(SKeys.NAME, target.prototype) as string,
        isGlobal: Reflect.getMetadata(SKeys.IS_GLOBAL, target.prototype) as boolean
    }
}