"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JoinType;
(function (JoinType) {
    JoinType["LEFT"] = "left";
    JoinType["INNER"] = "inner";
})(JoinType = exports.JoinType || (exports.JoinType = {}));
const isCommonFiltersMap = (where) => where && typeof where === 'object';
const buildQueryFilter = (filter = {}, query, getKey) => {
    if (isCommonFiltersMap(filter)) {
        Object.entries(filter).forEach(([key, value]) => {
            if (value.equal) {
                query.andWhere(`${getKey(key).linkName} LIKE :${getKey(key).varName}_equal`, { [`${getKey(key).varName}_equal`]: value.equal });
            }
            if (value.not_equal) {
                query.andWhere(`${getKey(key).linkName} NOT LIKE :${getKey(key).varName}_not_equal`, { [`${getKey(key).varName}_not_equal`]: value.not_equal });
            }
            if (value.in) {
                query.andWhere(`${getKey(key).linkName} IN (:...${getKey(key).varName}_in)`, { [`${getKey(key).varName}_in`]: value.in });
            }
            if (value.not_in) {
                query.andWhere(`${getKey(key).linkName} NOT IN (:...${getKey(key).varName}_not_in)`, { [`${getKey(key).varName}_not_in`]: value.not_in });
            }
            if (value.lt) {
                query.andWhere(`${getKey(key).linkName} < :${getKey(key).varName}_lt`, { [`${getKey(key).varName}_lt`]: value.lt });
            }
            if (value.lte) {
                query.andWhere(`${getKey(key).linkName} <= :${getKey(key).varName}_lte`, { [`${getKey(key).varName}_lte`]: value.lte });
            }
            if (value.gt) {
                query.andWhere(`${getKey(key).linkName} > :${getKey(key).varName}_gt`, { [`${getKey(key).varName}_gt`]: value.gt });
            }
            if (value.gte) {
                query.andWhere(`${getKey(key).linkName} >= :${getKey(key).varName}_gte`, { [`${getKey(key).varName}_gte`]: value.gte });
            }
            if (value.contains) {
                query.andWhere(`${getKey(key).linkName} LIKE :${getKey(key).varName}_contains`, { [`${getKey(key).varName}_contains`]: `%${value.contains}%` });
            }
            if (value.not_in) {
                query.andWhere(`NOT ${getKey(key).linkName} LIKE :${getKey(key).varName}_not_contains`, { [`${getKey(key).varName}_not_contains`]: `%${value.not_contains}%` });
            }
        });
    }
};
exports.getSelectQueryBuilder = (repository, input, joins = []) => {
    const query = repository.createQueryBuilder('q');
    joins.forEach((join) => {
        var _a;
        if (join.type === JoinType.LEFT) {
            query.leftJoinAndSelect(`q.${join.alias}`, join.alias);
            buildQueryFilter((_a = input.filter) === null || _a === void 0 ? void 0 : _a[join.alias], query, (key) => ({
                linkName: `${join.alias}.${key}`,
                varName: `${join.alias}_${key}`,
            }));
        }
        if (join.type === JoinType.INNER) {
            query.innerJoinAndSelect(`q.${join.alias}`, join.alias);
        }
    });
    if (isCommonFiltersMap(input.filter)) {
        Object.entries(input.filter).forEach(([key, value]) => {
            buildQueryFilter(input.filter, query, (keyName) => ({
                linkName: `q.${keyName}`,
                varName: keyName,
            }));
        });
    }
    return query;
};
exports.getPaginationResponse = async (repository, input, joins = []) => {
    var _a, _b;
    const query = exports.getSelectQueryBuilder(repository, input, joins);
    query.take(input.take);
    query.skip((_a = input.take, (_a !== null && _a !== void 0 ? _a : 20)) * (_b = input.page, (_b !== null && _b !== void 0 ? _b : 0)));
    const [entity, count] = await query.getManyAndCount();
    return {
        items: entity,
        totalItems: count,
        take: input.take,
        page: input.page,
    };
};
//# sourceMappingURL=buildFindOptions.js.map