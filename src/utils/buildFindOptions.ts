import { Repository, SelectQueryBuilder } from 'typeorm';
import { ICommonFiltersMapInput, ICommonFilterInput } from '../common/filter';
import { PaginationInput, IPaginationInput } from '../common/pagination/pagination.input';

export enum JoinType {
    LEFT = 'left',
    INNER = 'inner',
}

interface JoinProps {
    type: JoinType;
    alias: string;
}

type IGetKey = (key: string) => {
    linkName: string;
    varName: string;
};

const isCommonFiltersMap = (where?: any): where is ICommonFiltersMapInput => where && typeof where === 'object';

const buildQueryFilter = <E>(filter: object = {}, query: SelectQueryBuilder<E>, getKey: IGetKey) => {
  if (isCommonFiltersMap(filter)) {
    Object.entries<ICommonFilterInput>(filter).forEach(([key, value]) => {
      if (value.equal) {
        query.andWhere(
          `${getKey(key).linkName} LIKE :${getKey(key).varName}_equal`,
          { [`${getKey(key).varName}_equal`]: value.equal },
        );
      }
      if (value.not_equal) {
        query.andWhere(
          `${getKey(key).linkName} NOT LIKE :${getKey(key).varName}_not_equal`,
          { [`${getKey(key).varName}_not_equal`]: value.not_equal },
        );
      }
      if (value.in) {
        query.andWhere(
          `${getKey(key).linkName} IN (:...${getKey(key).varName}_in)`,
          { [`${getKey(key).varName}_in`]: value.in },
        );
      }
      if (value.not_in) {
        query.andWhere(
          `${getKey(key).linkName} NOT IN (:...${getKey(key).varName}_not_in)`,
          { [`${getKey(key).varName}_not_in`]: value.not_in },
        );
      }
      if (value.lt) {
        query.andWhere(
          `${getKey(key).linkName} < :${getKey(key).varName}_lt`,
          { [`${getKey(key).varName}_lt`]: value.lt },
        );
      }
      if (value.lte) {
        query.andWhere(
          `${getKey(key).linkName} <= :${getKey(key).varName}_lte`,
          { [`${getKey(key).varName}_lte`]: value.lte },
        );
      }
      if (value.gt) {
        query.andWhere(
          `${getKey(key).linkName} > :${getKey(key).varName}_gt`,
          { [`${getKey(key).varName}_gt`]: value.gt },
        );
      }
      if (value.gte) {
        query.andWhere(
          `${getKey(key).linkName} >= :${getKey(key).varName}_gte`,
          { [`${getKey(key).varName}_gte`]: value.gte },
        );
      }
      if (value.contains) {
        query.andWhere(
          `${getKey(key).linkName} LIKE :${getKey(key).varName}_contains`,
          { [`${getKey(key).varName}_contains`]: `%${value.contains}%` },
        );
      }
      if (value.not_in) {
        query.andWhere(
          `NOT ${getKey(key).linkName} LIKE :${getKey(key).varName}_not_contains`,
          { [`${getKey(key).varName}_not_contains`]: `%${value.not_contains}%` },
        );
      }
    });
  }
};

export const getSelectQueryBuilder = <E, P extends any>(
  repository: Repository<E>,
  input: PaginationInput<P>,
  joins: JoinProps[] = [],
) => {
  const query = repository.createQueryBuilder('q');
  joins.forEach((join) => {
    if (join.type === JoinType.LEFT) {
      query.leftJoinAndSelect(`q.${join.alias}`, join.alias);
      buildQueryFilter(input.filter?.[join.alias], query, (key: string) => ({
        linkName: `${join.alias}.${key}`,
        varName: `${join.alias}_${key}`,
      }));
    }
    if (join.type === JoinType.INNER) {
      query.innerJoinAndSelect(`q.${join.alias}`, join.alias);
    }
  });
  if (isCommonFiltersMap(input.filter)) {
    Object.entries<ICommonFilterInput>(input.filter).forEach(() => {
      buildQueryFilter(input.filter, query, (keyName: string) => ({
        linkName: `q.${keyName}`,
        varName: keyName,
      }));
    });
  }
  return query;
};

export const getPaginationResponse = async <E, P>(
  repository: Repository<E>,
  input: IPaginationInput<P>,
  joins: JoinProps[] = [],
) => {
  const query = getSelectQueryBuilder(repository, input, joins);
  query.take(input.take);
  query.skip((input.take ?? 20) * (input.page ?? 0));

  const [entity, count] = await query.getManyAndCount();

  return {
    items: entity,
    totalItems: count,
    take: input.take,
    page: input.page,
  };
};
