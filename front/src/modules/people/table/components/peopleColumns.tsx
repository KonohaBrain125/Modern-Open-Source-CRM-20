import {
  IconBrandLinkedin,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconMail,
  IconMap,
  IconPhone,
  IconUser,
} from '@/ui/icon/index';

import { EditablePeopleCityCell } from './EditablePeopleCityCell';
import { EditablePeopleCompanyCell } from './EditablePeopleCompanyCell';
import { EditablePeopleCreatedAtCell } from './EditablePeopleCreatedAtCell';
import { EditablePeopleEmailCell } from './EditablePeopleEmailCell';
import { EditablePeopleFullNameCell } from './EditablePeopleFullNameCell';
import { EditablePeopleJobTitleCell } from './EditablePeopleJobTitleCell';
import { EditablePeopleLinkedinUrlCell } from './EditablePeopleLinkedinUrlCell';
import { EditablePeoplePhoneCell } from './EditablePeoplePhoneCell';

export type TableColumn = {
  id: string;
  title: string;
  icon: JSX.Element;
  size: number;
  cellComponent: JSX.Element;
};

export const peopleColumns: TableColumn[] = [
  {
    id: 'fullName',
    title: 'People',
    icon: <IconUser size={16} />,
    size: 210,
    cellComponent: <EditablePeopleFullNameCell />,
  },
  {
    id: 'email',
    title: 'Email',
    icon: <IconMail size={16} />,
    size: 150,
    cellComponent: <EditablePeopleEmailCell />,
  },
  {
    id: 'company',
    title: 'Company',
    icon: <IconBuildingSkyscraper size={16} />,
    size: 150,
    cellComponent: <EditablePeopleCompanyCell />,
  },
  {
    id: 'phone',
    title: 'Phone',
    icon: <IconPhone size={16} />,
    size: 150,
    cellComponent: <EditablePeoplePhoneCell />,
  },
  {
    id: 'createdAt',
    title: 'Creation',
    icon: <IconCalendarEvent size={16} />,
    size: 150,
    cellComponent: <EditablePeopleCreatedAtCell />,
  },
  {
    id: 'city',
    title: 'City',
    icon: <IconMap size={16} />,
    size: 150,
    cellComponent: <EditablePeopleCityCell />,
  },
  {
    id: 'jobTitle',
    title: 'Job title',
    icon: <IconBriefcase size={16} />,
    size: 150,
    cellComponent: <EditablePeopleJobTitleCell />,
  },
  {
    id: 'linkedinUrl',
    title: 'Linkedin',
    icon: <IconBrandLinkedin size={16} />,
    size: 150,
    cellComponent: <EditablePeopleLinkedinUrlCell />,
  },
];
