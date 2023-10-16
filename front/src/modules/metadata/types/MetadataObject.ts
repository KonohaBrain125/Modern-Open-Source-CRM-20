import { Field, Object as GeneratedObject } from '~/generated-metadata/graphql';

export type MetadataObject = Omit<
  GeneratedObject,
  'fields' | 'dataSourceId'
> & {
  fields: Field[];
};
