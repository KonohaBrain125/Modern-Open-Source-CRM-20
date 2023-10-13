import {
  FieldDateMetadata,
  FieldMetadata,
  FieldNumberMetadata,
  FieldProbabilityMetadata,
  FieldRelationMetadata,
} from '@/ui/data/field/types/FieldMetadata';
import {
  IconCalendarEvent,
  IconCurrencyDollar,
  IconPencil,
  IconProgressCheck,
  IconUser,
} from '@/ui/display/icon';
import { Entity } from '@/ui/input/relation-picker/types/EntityTypeForSelect';
import { BoardFieldDefinition } from '@/ui/layout/board/types/BoardFieldDefinition';
import { Person } from '~/generated/graphql';

export const pipelineAvailableFieldDefinitions: BoardFieldDefinition<FieldMetadata>[] =
  [
    {
      key: 'closeDate',
      name: 'Close Date',
      Icon: IconCalendarEvent,
      index: 0,
      type: 'date',
      metadata: {
        fieldName: 'closeDate',
      },
      isVisible: true,
      infoTooltipContent:
        'Specified date by which an opportunity must be completed.',
    } satisfies BoardFieldDefinition<FieldDateMetadata>,
    {
      key: 'amount',
      name: 'Amount',
      Icon: IconCurrencyDollar,
      index: 1,
      type: 'number',
      metadata: {
        fieldName: 'amount',
        placeHolder: '0',
      },
      isVisible: true,
      infoTooltipContent: 'Potential monetary value of a business opportunity.',
    } satisfies BoardFieldDefinition<FieldNumberMetadata>,
    {
      key: 'probability',
      name: 'Probability',
      Icon: IconProgressCheck,
      index: 2,
      type: 'probability',
      metadata: {
        fieldName: 'probability',
      },
      isVisible: true,
      infoTooltipContent:
        "Level of certainty in the lead's potential to convert into a success.",
    } satisfies BoardFieldDefinition<FieldProbabilityMetadata>,
    {
      key: 'pointOfContact',
      name: 'Point of Contact',
      Icon: IconUser,
      index: 3,
      type: 'relation',
      metadata: {
        fieldName: 'pointOfContact',
        relationType: Entity.Person,
        useEditButton: true,
      },
      isVisible: true,
      buttonIcon: IconPencil,
      infoTooltipContent: 'Primary contact within the company.',
      entityChipDisplayMapper: (dataObject: Person) => {
        return {
          name: dataObject?.displayName,
          pictureUrl: dataObject?.avatarUrl ?? undefined,
          avatarType: 'rounded',
        };
      },
    } satisfies BoardFieldDefinition<FieldRelationMetadata>,
  ];
