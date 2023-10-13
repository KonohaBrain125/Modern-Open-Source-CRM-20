import { ColumnDefinition } from '@/ui/data/data-table/types/ColumnDefinition';
import {
  FieldBooleanMetadata,
  FieldChipMetadata,
  FieldDateMetadata,
  FieldMetadata,
  FieldMoneyMetadata,
  FieldNumberMetadata,
  FieldRelationMetadata,
  FieldTextMetadata,
  FieldURLMetadata,
} from '@/ui/data/field/types/FieldMetadata';
import {
  IconArrowUpRight,
  IconBrandLinkedin,
  IconBrandX,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconLink,
  IconMap,
  IconMoneybag,
  IconPencil,
  IconTarget,
  IconUserCircle,
  IconUsers,
} from '@/ui/display/icon/index';
import { Entity } from '@/ui/input/relation-picker/types/EntityTypeForSelect';
import { User } from '~/generated/graphql';

export const companiesAvailableColumnDefinitions: ColumnDefinition<FieldMetadata>[] =
  [
    {
      key: 'name',
      name: 'Name',
      Icon: IconBuildingSkyscraper,
      size: 180,
      index: 0,
      type: 'chip',
      metadata: {
        urlFieldName: 'domainName',
        contentFieldName: 'name',
        relationType: Entity.Company,
        placeHolder: 'Company Name',
      },
      isVisible: true,
      buttonIcon: IconArrowUpRight,
      infoTooltipContent: 'The company name.',
      basePathToShowPage: '/companies/',
    } satisfies ColumnDefinition<FieldChipMetadata>,
    {
      key: 'domainName',
      name: 'URL',
      Icon: IconLink,
      size: 100,
      index: 1,
      type: 'url',
      metadata: {
        fieldName: 'domainName',
        placeHolder: 'example.com',
      },
      isVisible: true,
      buttonIcon: IconPencil,
      infoTooltipContent:
        'The company website URL. We use this url to fetch the company icon.',
    } satisfies ColumnDefinition<FieldURLMetadata>,
    {
      key: 'accountOwner',
      name: 'Account Owner',
      Icon: IconUserCircle,
      size: 150,
      index: 2,
      type: 'relation',
      metadata: {
        fieldName: 'accountOwner',
        relationType: Entity.User,
      },
      isVisible: true,
      infoTooltipContent:
        'Your team member responsible for managing the company account.',
      entityChipDisplayMapper: (dataObject: User) => {
        return {
          name: dataObject?.displayName,
          pictureUrl: dataObject?.avatarUrl ?? undefined,
          avatarType: 'rounded',
        };
      },
    } satisfies ColumnDefinition<FieldRelationMetadata>,
    {
      key: 'createdAt',
      name: 'Creation',
      Icon: IconCalendarEvent,
      size: 150,
      index: 3,
      type: 'date',
      metadata: {
        fieldName: 'createdAt',
      },
      isVisible: true,
      infoTooltipContent: "Date when the company's record was created.",
    } satisfies ColumnDefinition<FieldDateMetadata>,
    {
      key: 'employees',
      name: 'Employees',
      Icon: IconUsers,
      size: 150,
      index: 4,
      type: 'number',
      metadata: {
        fieldName: 'employees',
        isPositive: true,
        placeHolder: 'Employees',
      },
      isVisible: true,
      infoTooltipContent: 'Number of employees in the company.',
    } satisfies ColumnDefinition<FieldNumberMetadata>,
    {
      key: 'linkedin',
      name: 'LinkedIn',
      Icon: IconBrandLinkedin,
      size: 170,
      index: 5,
      type: 'url',
      metadata: {
        fieldName: 'linkedinUrl',
        placeHolder: 'LinkedIn URL',
      },
      isVisible: true,
      buttonIcon: IconPencil,
      infoTooltipContent: 'The company Linkedin account.',
    } satisfies ColumnDefinition<FieldURLMetadata>,
    {
      key: 'address',
      name: 'Address',
      Icon: IconMap,
      size: 170,
      index: 6,
      type: 'text',
      metadata: {
        fieldName: 'address',
        placeHolder: 'Addre​ss', // Hack: Fake character to prevent password-manager from filling the field
      },
      isVisible: true,
      infoTooltipContent: 'The company address.',
    } satisfies ColumnDefinition<FieldTextMetadata>,
    {
      key: 'idealCustomerProfile',
      name: 'ICP',
      Icon: IconTarget,
      size: 150,
      index: 7,
      type: 'boolean',
      metadata: {
        fieldName: 'idealCustomerProfile',
      },
      isVisible: false,
      infoTooltipContent:
        'Ideal Customer Profile:  Indicates whether the company is the most suitable and valuable customer for you.',
    } satisfies ColumnDefinition<FieldBooleanMetadata>,
    {
      key: 'annualRecurringRevenue',
      name: 'ARR',
      Icon: IconMoneybag,
      size: 150,
      index: 8,
      type: 'moneyAmount',
      metadata: {
        fieldName: 'annualRecurringRevenue',
        placeHolder: 'ARR',
      },
      infoTooltipContent:
        'Annual Recurring Revenue: The actual or estimated annual revenue of the company.',
    } satisfies ColumnDefinition<FieldMoneyMetadata>,
    {
      key: 'xUrl',
      name: 'Twitter',
      Icon: IconBrandX,
      size: 150,
      index: 9,
      type: 'url',
      metadata: {
        fieldName: 'xUrl',
        placeHolder: 'X',
      },
      isVisible: false,
      buttonIcon: IconPencil,
      infoTooltipContent: 'The company Twitter account.',
    } satisfies ColumnDefinition<FieldURLMetadata>,
  ];

export const suppliersAvailableColumnDefinitions: ColumnDefinition<FieldMetadata>[] =
  [
    {
      key: 'name',
      name: 'Name',
      Icon: IconBuildingSkyscraper,
      size: 180,
      index: 0,
      type: 'text',
      metadata: {
        fieldName: 'name',
        placeHolder: 'Company Name',
      },
      isVisible: true,
      buttonIcon: IconArrowUpRight,
      infoTooltipContent: 'The company name.',
      basePathToShowPage: '/companies/',
    } satisfies ColumnDefinition<FieldTextMetadata>,
    {
      key: 'city',
      name: 'City',
      Icon: IconBuildingSkyscraper,
      size: 180,
      index: 0,
      type: 'text',
      metadata: {
        fieldName: 'city',
        placeHolder: 'Company Name',
      },
      isVisible: true,
      buttonIcon: IconArrowUpRight,
      infoTooltipContent: 'The company name.',
      basePathToShowPage: '/companies/',
    } satisfies ColumnDefinition<FieldTextMetadata>,
  ];
