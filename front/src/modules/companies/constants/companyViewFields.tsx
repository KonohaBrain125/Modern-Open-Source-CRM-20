import {
  ViewFieldChipMetadata,
  ViewFieldDateMetadata,
  ViewFieldDefinition,
  ViewFieldMetadata,
  ViewFieldNumberMetadata,
  ViewFieldRelationMetadata,
  ViewFieldTextMetadata,
  ViewFieldURLMetadata,
} from '@/ui/editable-field/types/ViewField';
import {
  IconBrandLinkedin,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconLink,
  IconMap,
  IconUserCircle,
  IconUsers,
} from '@/ui/icon/index';
import { Entity } from '@/ui/input/relation-picker/types/EntityTypeForSelect';

export const companyViewFields: ViewFieldDefinition<ViewFieldMetadata>[] = [
  {
    id: 'name',
    columnLabel: 'Name',
    columnIcon: <IconBuildingSkyscraper />,
    columnSize: 180,
    columnOrder: 1,
    metadata: {
      type: 'chip',
      urlFieldName: 'domainName',
      contentFieldName: 'name',
      relationType: Entity.Company,
    },
    isVisible: true,
  } as ViewFieldDefinition<ViewFieldChipMetadata>,
  {
    id: 'domainName',
    columnLabel: 'URL',
    columnIcon: <IconLink />,
    columnSize: 100,
    columnOrder: 2,
    metadata: {
      type: 'url',
      fieldName: 'domainName',
      placeHolder: 'example.com',
    },
    isVisible: true,
  } as ViewFieldDefinition<ViewFieldURLMetadata>,
  {
    id: 'accountOwner',
    columnLabel: 'Account Owner',
    columnIcon: <IconUserCircle />,
    columnSize: 150,
    columnOrder: 3,
    metadata: {
      type: 'relation',
      fieldName: 'accountOwner',
      relationType: Entity.User,
    },
    isVisible: true,
  } satisfies ViewFieldDefinition<ViewFieldRelationMetadata>,
  {
    id: 'createdAt',
    columnLabel: 'Creation',
    columnIcon: <IconCalendarEvent />,
    columnSize: 150,
    columnOrder: 4,
    metadata: {
      type: 'date',
      fieldName: 'createdAt',
    },
    isVisible: true,
  } satisfies ViewFieldDefinition<ViewFieldDateMetadata>,
  {
    id: 'employees',
    columnLabel: 'Employees',
    columnIcon: <IconUsers />,
    columnSize: 150,
    columnOrder: 5,
    metadata: {
      type: 'number',
      fieldName: 'employees',
      isPositive: true,
    },
    isVisible: true,
  } satisfies ViewFieldDefinition<ViewFieldNumberMetadata>,
  {
    id: 'linkedin',
    columnLabel: 'LinkedIn',
    columnIcon: <IconBrandLinkedin />,
    columnSize: 170,
    columnOrder: 6,
    metadata: {
      type: 'url',
      fieldName: 'linkedinUrl',
      placeHolder: 'LinkedIn URL',
    },
    isVisible: true,
  } satisfies ViewFieldDefinition<ViewFieldURLMetadata>,
  {
    id: 'address',
    columnLabel: 'Address',
    columnIcon: <IconMap />,
    columnSize: 170,
    columnOrder: 7,
    metadata: {
      type: 'text',
      fieldName: 'address',
      placeHolder: 'Addre​ss', // Hack: Fake character to prevent password-manager from filling the field
    },
    isVisible: true,
  } satisfies ViewFieldDefinition<ViewFieldTextMetadata>,
];
