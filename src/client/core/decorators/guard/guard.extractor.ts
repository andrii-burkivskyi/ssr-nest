import "reflect-metadata";
import { GKeys} from "./guard.decorator"

export const GuardExtractor = <TFunction extends Function>(target: TFunction) => {
    return {
        name: Reflect.getMetadata(GKeys.NAME, target.prototype) as string,
    }
}