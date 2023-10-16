import { ObjectType, ID, Field } from '@nestjs/graphql';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  Authorize,
  BeforeCreateOne,
  CursorConnection,
  IDField,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';

import { FieldMetadata } from 'src/metadata/field-metadata/field-metadata.entity';

import { BeforeCreateOneObject } from './hooks/before-create-one-object.hook';

@Entity('object_metadata')
@ObjectType('object')
@BeforeCreateOne(BeforeCreateOneObject)
@Authorize({
  authorize: (context: any) => ({
    workspaceId: { eq: context?.req?.user?.workspace?.id },
  }),
})
@QueryOptions({
  defaultResultSize: 10,
  maxResultsSize: 100,
  disableFilter: true,
  disableSort: true,
})
@CursorConnection('fields', () => FieldMetadata)
export class ObjectMetadata {
  @IDField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ nullable: false, name: 'data_source_id' })
  dataSourceId: string;

  @Field()
  @Column({ nullable: false, name: 'name_singular', unique: true })
  nameSingular: string;

  @Field()
  @Column({ nullable: false, name: 'name_plural', unique: true })
  namePlural: string;

  @Field()
  @Column({ nullable: false, name: 'label_singular' })
  labelSingular: string;

  @Field()
  @Column({ nullable: false, name: 'label_plural' })
  labelPlural: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'description', type: 'text' })
  description: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'icon' })
  icon: string;

  @Column({ nullable: false, name: 'target_table_name' })
  targetTableName: string;

  @Field()
  @Column({ default: false, name: 'is_custom' })
  isCustom: boolean;

  @Field()
  @Column({ default: false, name: 'is_active' })
  isActive: boolean;

  @Column({ nullable: false, name: 'workspace_id' })
  workspaceId: string;

  @OneToMany(() => FieldMetadata, (field) => field.object)
  fields: FieldMetadata[];

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
