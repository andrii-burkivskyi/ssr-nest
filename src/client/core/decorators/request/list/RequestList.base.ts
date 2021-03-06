
import { observable, action, IObservableArray } from 'mobx';
import { DEFAULT_ARRAY, DEFAULT_OBJECT, DEFAULT_STRING } from '../../../../utils/constants';

import { QueryBase } from '../../../../core/decorators/query/query/Query.base';

import { IPaginationDTO } from '../../../../../common/pagination/pagination.dto';
import { IPaginationInput } from '../../../../../common/pagination/pagination.input';

import { RequestListExtractor } from './requestList.extractor';
import { RequestItemBase } from '../item/RequestItem.base';
import Request from '../request';
import { ModuleBase } from '../../module/Module.base';
import { SSRService } from '../../../services/SSR.service';

interface InitProps<
    ItemClass extends RequestItemBase<DTO, ID> = any,
    DTO = any,
    ID = any,
    Query extends QueryBase<any> = any,
    FilterInput = any
> {
    name?: RequestListBase['name'];
    query?: RequestListBase<ItemClass, DTO, ID, Query, FilterInput >['query'];
    isLocalUpdated?: RequestListBase<ItemClass, DTO, ID, Query, FilterInput>['isLocalUpdated'];
}

export class RequestListBase<
    ItemClass extends RequestItemBase<DTO, ID> = any,
    DTO = any,
    ID = any,
    Query extends QueryBase<any> = any,
    FilterInput = any,
> {
  constructor(props?: InitProps<ItemClass, DTO, ID, Query, FilterInput>) {
    const gql = RequestListExtractor(this).query;
    this.ItemConstructor = RequestListExtractor(this).ItemConstructor;
    this.getRequest = new Request<IPaginationDTO<Partial<DTO> & ID>, InputOf<IPaginationInput<FilterInput>>>({
      query: gql.getList,
    });
    if (props) {
      this.isLocalUpdated = props.isLocalUpdated ?? this.isLocalUpdated;
      this.name = props.name;
      this.query = props.query;
      this.query?.subscribe((input) => this.get({
        ...input,
        page: input.page ?? this.page,
        take: input.take ?? this.take,
      }));
    }
  }

    private name?: string;

    private getRequest: Request<IPaginationDTO<Partial<DTO> & ID>, InputOf<IPaginationInput<FilterInput>>>;

    private ItemConstructor: Constructable<ItemClass>;

    data: IObservableArray<ItemClass> = observable.array(DEFAULT_ARRAY);

    @observable isLocalUpdated = false;

    @observable page = 0;

    @observable take = 1000;

    @observable totalItems = 0;

    query?: Query;

    ssrService: SSRService = ModuleBase.services.get(SSRService);

    @action private onDelete = async (deletedItem: ItemClass) => {
      if (this.isLocalUpdated) {
        this.data.replace(this.data.filter((item) => item !== deletedItem));
        this.totalItems -= 1;
      } else {
        const filter = this.query?.getPagination() ?? DEFAULT_OBJECT;
        await this.get(filter);
      }
    }

    @action private onUpdate = async (updatedItem: ItemClass) => {
      if (this.isLocalUpdated) {
        if (!this.data.includes(updatedItem)) {
          this.data.unshift(updatedItem);
          this.totalItems += 1;
        }
      } else {
        const filter = this.query?.getPagination() ?? DEFAULT_OBJECT;
        await this.get(filter);
      }
    }

    @action get = async (filter: IPaginationInput<FilterInput> = DEFAULT_OBJECT) => {

      this.ssrService.requests.start()
      try {
        let data!: IPaginationDTO<Partial<DTO> & ID>; 
        if (this.name && this.ssrService.requests.data[this.name]) {
          data = this.ssrService.requests.data[this.name];
          this.ssrService.requests.data[this.name] = null;
        } else {
          data = await this.getRequest.send({ input: filter });
        }

        const newItems = data.items.map((item) => new this.ItemConstructor({
          ...item,
          onDelete: this.onUpdate,
          onUpdate: this.onUpdate,
        }));
        this.data.replace(newItems);
        this.page = data.page;
        this.take = data.take;
        this.totalItems = data.totalItems;

        this.name && this.ssrService.requests.done({ [this.name]: data })
      } catch (error) {
        console.error(error.toJSON?.());
        this.ssrService.requests.done()
      }
    }

    @action add = async (data: Subtraction<DTO, ID>) => {
      try {
        const item = new this.ItemConstructor();
        item.updateListRegistration({
          onDelete: this.onDelete,
          onUpdate: this.onUpdate,
        });
        await item.create(data);
      } catch (error) {
        console.error(error);
      }
    }

    @action addEmpty = () => {
      try {
        const item = new this.ItemConstructor();
        item.updateListRegistration({
          onDelete: this.onDelete,
          onUpdate: this.onUpdate,
        });

        return item;
      } catch (error) {
        console.error(error);
      }

      return DEFAULT_OBJECT as ItemClass;
    }
}
