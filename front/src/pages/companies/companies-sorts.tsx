import { SortType } from '@/filters-and-sorts/interfaces/sorts/interface';
import {
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconLink,
  IconMap,
  IconUsers,
} from '@/ui/icons/index';
import { CompanyOrderByWithRelationInput as Companies_Order_By } from '~/generated/graphql';

export const availableSorts = [
  {
    key: 'name',
    label: 'Name',
    icon: <IconBuildingSkyscraper size={16} />,
    _type: 'default_sort',
  },
  {
    key: 'employees',
    label: 'Employees',
    icon: <IconUsers size={16} />,
    _type: 'default_sort',
  },
  {
    key: 'domainName',
    label: 'Url',
    icon: <IconLink size={16} />,
    _type: 'default_sort',
  },
  {
    key: 'address',
    label: 'Address',
    icon: <IconMap size={16} />,
    _type: 'default_sort',
  },
  {
    key: 'createdAt',
    label: 'Creation',
    icon: <IconCalendarEvent size={16} />,
    _type: 'default_sort',
  },
] satisfies Array<SortType<Companies_Order_By>>;
