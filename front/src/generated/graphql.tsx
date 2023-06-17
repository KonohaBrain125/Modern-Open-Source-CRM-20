import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JSON: any;
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorId: Scalars['String'];
  body: Scalars['String'];
  commentThread: CommentThread;
  commentThreadId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type CommentCreateInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String'];
  commentThread: CommentThreadCreateNestedOneWithoutCommentsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyCommentThreadInput = {
  authorId: Scalars['String'];
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyCommentThreadInputEnvelope = {
  data: Array<CommentCreateManyCommentThreadInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutCommentThreadInput = {
  createMany?: InputMaybe<CommentCreateManyCommentThreadInputEnvelope>;
};

export type CommentCreateOrConnectWithoutCommentThreadInput = {
  create: CommentCreateWithoutCommentThreadInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutCommentThreadInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  commentThreadId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentThread = {
  __typename?: 'CommentThread';
  commentThreadTargets?: Maybe<Array<CommentThreadTarget>>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type CommentThreadCreateInput = {
  commentThreadTargets?: InputMaybe<CommentThreadTargetCreateNestedManyWithoutCommentThreadInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutCommentThreadInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentThreadCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<CommentThreadWhereUniqueInput>;
};

export type CommentThreadOrderByWithRelationInput = {
  commentThreadTargets?: InputMaybe<CommentThreadTargetOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CommentThreadRelationFilter = {
  is?: InputMaybe<CommentThreadWhereInput>;
  isNot?: InputMaybe<CommentThreadWhereInput>;
};

export enum CommentThreadScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type CommentThreadTarget = {
  __typename?: 'CommentThreadTarget';
  commentThread: CommentThread;
  commentThreadId: Scalars['String'];
  commentableId: Scalars['String'];
  commentableType: CommentableType;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type CommentThreadTargetCreateManyCommentThreadInput = {
  commentableId: Scalars['String'];
  commentableType: CommentableType;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentThreadTargetCreateManyCommentThreadInputEnvelope = {
  data: Array<CommentThreadTargetCreateManyCommentThreadInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentThreadTargetCreateNestedManyWithoutCommentThreadInput = {
  createMany?: InputMaybe<CommentThreadTargetCreateManyCommentThreadInputEnvelope>;
};

export type CommentThreadTargetCreateOrConnectWithoutCommentThreadInput = {
  create: CommentThreadTargetCreateWithoutCommentThreadInput;
  where: CommentThreadTargetWhereUniqueInput;
};

export type CommentThreadTargetCreateWithoutCommentThreadInput = {
  commentableId: Scalars['String'];
  commentableType: CommentableType;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentThreadTargetListRelationFilter = {
  every?: InputMaybe<CommentThreadTargetWhereInput>;
  none?: InputMaybe<CommentThreadTargetWhereInput>;
  some?: InputMaybe<CommentThreadTargetWhereInput>;
};

export type CommentThreadTargetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentThreadTargetScalarWhereInput = {
  AND?: InputMaybe<Array<CommentThreadTargetScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentThreadTargetScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentThreadTargetScalarWhereInput>>;
  commentThreadId?: InputMaybe<StringFilter>;
  commentableId?: InputMaybe<StringFilter>;
  commentableType?: InputMaybe<EnumCommentableTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentThreadTargetUpdateManyMutationInput = {
  commentableId?: InputMaybe<StringFieldUpdateOperationsInput>;
  commentableType?: InputMaybe<EnumCommentableTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentThreadTargetUpdateManyWithWhereWithoutCommentThreadInput = {
  data: CommentThreadTargetUpdateManyMutationInput;
  where: CommentThreadTargetScalarWhereInput;
};

export type CommentThreadTargetUpdateManyWithoutCommentThreadNestedInput = {
  connect?: InputMaybe<Array<CommentThreadTargetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentThreadTargetCreateOrConnectWithoutCommentThreadInput>>;
  create?: InputMaybe<Array<CommentThreadTargetCreateWithoutCommentThreadInput>>;
  createMany?: InputMaybe<CommentThreadTargetCreateManyCommentThreadInputEnvelope>;
  delete?: InputMaybe<Array<CommentThreadTargetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentThreadTargetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentThreadTargetWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentThreadTargetWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentThreadTargetUpdateWithWhereUniqueWithoutCommentThreadInput>>;
  updateMany?: InputMaybe<Array<CommentThreadTargetUpdateManyWithWhereWithoutCommentThreadInput>>;
  upsert?: InputMaybe<Array<CommentThreadTargetUpsertWithWhereUniqueWithoutCommentThreadInput>>;
};

export type CommentThreadTargetUpdateWithWhereUniqueWithoutCommentThreadInput = {
  data: CommentThreadTargetUpdateWithoutCommentThreadInput;
  where: CommentThreadTargetWhereUniqueInput;
};

export type CommentThreadTargetUpdateWithoutCommentThreadInput = {
  commentableId?: InputMaybe<StringFieldUpdateOperationsInput>;
  commentableType?: InputMaybe<EnumCommentableTypeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentThreadTargetUpsertWithWhereUniqueWithoutCommentThreadInput = {
  create: CommentThreadTargetCreateWithoutCommentThreadInput;
  update: CommentThreadTargetUpdateWithoutCommentThreadInput;
  where: CommentThreadTargetWhereUniqueInput;
};

export type CommentThreadTargetWhereInput = {
  AND?: InputMaybe<Array<CommentThreadTargetWhereInput>>;
  NOT?: InputMaybe<Array<CommentThreadTargetWhereInput>>;
  OR?: InputMaybe<Array<CommentThreadTargetWhereInput>>;
  commentThread?: InputMaybe<CommentThreadRelationFilter>;
  commentThreadId?: InputMaybe<StringFilter>;
  commentableId?: InputMaybe<StringFilter>;
  commentableType?: InputMaybe<EnumCommentableTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentThreadTargetWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CommentThreadUpdateInput = {
  commentThreadTargets?: InputMaybe<CommentThreadTargetUpdateManyWithoutCommentThreadNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutCommentThreadNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentThreadWhereInput = {
  AND?: InputMaybe<Array<CommentThreadWhereInput>>;
  NOT?: InputMaybe<Array<CommentThreadWhereInput>>;
  OR?: InputMaybe<Array<CommentThreadWhereInput>>;
  commentThreadTargets?: InputMaybe<CommentThreadTargetListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentThreadWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CommentUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutCommentThreadInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutCommentThreadNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutCommentThreadInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutCommentThreadInput>>;
  createMany?: InputMaybe<CommentCreateManyCommentThreadInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutCommentThreadInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutCommentThreadInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutCommentThreadInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutCommentThreadInput = {
  data: CommentUpdateWithoutCommentThreadInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutCommentThreadInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutCommentThreadInput = {
  create: CommentCreateWithoutCommentThreadInput;
  update: CommentUpdateWithoutCommentThreadInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  commentThread?: InputMaybe<CommentThreadRelationFilter>;
  commentThreadId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum CommentableType {
  Company = 'Company',
  Person = 'Person'
}

export type Company = {
  __typename?: 'Company';
  _commentCount: Scalars['Int'];
  accountOwner?: Maybe<User>;
  accountOwnerId?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  commentThreads: Array<CommentThread>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  domainName: Scalars['String'];
  employees?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  people?: Maybe<Array<Person>>;
  updatedAt: Scalars['DateTime'];
};

export type CompanyCreateInput = {
  accountOwner?: InputMaybe<UserCreateNestedOneWithoutCompaniesInput>;
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  domainName: Scalars['String'];
  employees?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  name: Scalars['String'];
  people?: InputMaybe<PersonCreateNestedManyWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyCreateManyAccountOwnerInput = {
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  domainName: Scalars['String'];
  employees?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyCreateManyAccountOwnerInputEnvelope = {
  data: Array<CompanyCreateManyAccountOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CompanyCreateNestedManyWithoutAccountOwnerInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutAccountOwnerInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutAccountOwnerInput>>;
  createMany?: InputMaybe<CompanyCreateManyAccountOwnerInputEnvelope>;
};

export type CompanyCreateNestedOneWithoutPeopleInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateOrConnectWithoutAccountOwnerInput = {
  create: CompanyCreateWithoutAccountOwnerInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateWithoutAccountOwnerInput = {
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  domainName: Scalars['String'];
  employees?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  name: Scalars['String'];
  people?: InputMaybe<PersonCreateNestedManyWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyListRelationFilter = {
  every?: InputMaybe<CompanyWhereInput>;
  none?: InputMaybe<CompanyWhereInput>;
  some?: InputMaybe<CompanyWhereInput>;
};

export type CompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithRelationInput = {
  accountOwner?: InputMaybe<UserOrderByWithRelationInput>;
  accountOwnerId?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  domainName?: InputMaybe<SortOrder>;
  employees?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  people?: InputMaybe<PersonOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  AccountOwnerId = 'accountOwnerId',
  Address = 'address',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DomainName = 'domainName',
  Employees = 'employees',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type CompanyScalarWhereInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereInput>>;
  accountOwnerId?: InputMaybe<StringNullableFilter>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  domainName?: InputMaybe<StringFilter>;
  employees?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CompanyUpdateInput = {
  accountOwner?: InputMaybe<UserUpdateOneWithoutCompaniesNestedInput>;
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  domainName?: InputMaybe<StringFieldUpdateOperationsInput>;
  employees?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  people?: InputMaybe<PersonUpdateManyWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  domainName?: InputMaybe<StringFieldUpdateOperationsInput>;
  employees?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpdateManyWithWhereWithoutAccountOwnerInput = {
  data: CompanyUpdateManyMutationInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateManyWithoutAccountOwnerNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutAccountOwnerInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutAccountOwnerInput>>;
  createMany?: InputMaybe<CompanyCreateManyAccountOwnerInputEnvelope>;
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyUpdateWithWhereUniqueWithoutAccountOwnerInput>>;
  updateMany?: InputMaybe<Array<CompanyUpdateManyWithWhereWithoutAccountOwnerInput>>;
  upsert?: InputMaybe<Array<CompanyUpsertWithWhereUniqueWithoutAccountOwnerInput>>;
};

export type CompanyUpdateOneWithoutPeopleNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyUpdateWithWhereUniqueWithoutAccountOwnerInput = {
  data: CompanyUpdateWithoutAccountOwnerInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithoutAccountOwnerInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  domainName?: InputMaybe<StringFieldUpdateOperationsInput>;
  employees?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  people?: InputMaybe<PersonUpdateManyWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpsertWithWhereUniqueWithoutAccountOwnerInput = {
  create: CompanyCreateWithoutAccountOwnerInput;
  update: CompanyUpdateWithoutAccountOwnerInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  accountOwner?: InputMaybe<UserRelationFilter>;
  accountOwnerId?: InputMaybe<StringNullableFilter>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  domainName?: InputMaybe<StringFilter>;
  employees?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  people?: InputMaybe<PersonListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumCommentableTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<CommentableType>;
};

export type EnumCommentableTypeFilter = {
  equals?: InputMaybe<CommentableType>;
  in?: InputMaybe<Array<CommentableType>>;
  not?: InputMaybe<NestedEnumCommentableTypeFilter>;
  notIn?: InputMaybe<Array<CommentableType>>;
};

export type EnumPipelineProgressableTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PipelineProgressableType>;
};

export type EnumPipelineProgressableTypeFilter = {
  equals?: InputMaybe<PipelineProgressableType>;
  in?: InputMaybe<Array<PipelineProgressableType>>;
  not?: InputMaybe<NestedEnumPipelineProgressableTypeFilter>;
  notIn?: InputMaybe<Array<PipelineProgressableType>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneComment: Comment;
  createOneCommentThread: CommentThread;
  createOneCompany: Company;
  createOnePerson: Person;
  createOnePipelineProgress: PipelineProgress;
  deleteManyCompany: AffectedRows;
  deleteManyPerson: AffectedRows;
  deleteManyPipelineProgress: AffectedRows;
  updateOneCommentThread: CommentThread;
  updateOneCompany?: Maybe<Company>;
  updateOnePerson?: Maybe<Person>;
  updateOnePipelineProgress?: Maybe<PipelineProgress>;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneCommentThreadArgs = {
  data: CommentThreadCreateInput;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateOnePersonArgs = {
  data: PersonCreateInput;
};


export type MutationCreateOnePipelineProgressArgs = {
  data: PipelineProgressCreateInput;
};


export type MutationDeleteManyCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationDeleteManyPipelineProgressArgs = {
  where?: InputMaybe<PipelineProgressWhereInput>;
};


export type MutationUpdateOneCommentThreadArgs = {
  data: CommentThreadUpdateInput;
  where: CommentThreadWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOnePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpdateOnePipelineProgressArgs = {
  data: PipelineProgressUpdateInput;
  where: PipelineProgressWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumCommentableTypeFilter = {
  equals?: InputMaybe<CommentableType>;
  in?: InputMaybe<Array<CommentableType>>;
  not?: InputMaybe<NestedEnumCommentableTypeFilter>;
  notIn?: InputMaybe<Array<CommentableType>>;
};

export type NestedEnumPipelineProgressableTypeFilter = {
  equals?: InputMaybe<PipelineProgressableType>;
  in?: InputMaybe<Array<PipelineProgressableType>>;
  not?: InputMaybe<NestedEnumPipelineProgressableTypeFilter>;
  notIn?: InputMaybe<Array<PipelineProgressableType>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  _commentCount: Scalars['Int'];
  city: Scalars['String'];
  commentThreads: Array<CommentThread>;
  comments: Array<Comment>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PersonCreateInput = {
  city: Scalars['String'];
  company?: InputMaybe<CompanyCreateNestedOneWithoutPeopleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
};

export type PersonListRelationFilter = {
  every?: InputMaybe<PersonWhereInput>;
  none?: InputMaybe<PersonWhereInput>;
  some?: InputMaybe<PersonWhereInput>;
};

export type PersonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PersonScalarFieldEnum {
  City = 'city',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  Phone = 'phone',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PersonUpdateInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutPeopleNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  city?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstname?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastname?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Pipeline = {
  __typename?: 'Pipeline';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  pipelineProgresses?: Maybe<Array<PipelineProgress>>;
  pipelineStages?: Maybe<Array<PipelineStage>>;
  updatedAt: Scalars['DateTime'];
};

export type PipelineCreateNestedOneWithoutPipelineProgressesInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
};

export type PipelineOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pipelineProgresses?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  pipelineStages?: InputMaybe<PipelineStageOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PipelineProgress = {
  __typename?: 'PipelineProgress';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  pipeline: Pipeline;
  pipelineId: Scalars['String'];
  pipelineStage: PipelineStage;
  pipelineStageId: Scalars['String'];
  progressableId: Scalars['String'];
  progressableType: PipelineProgressableType;
  updatedAt: Scalars['DateTime'];
};

export type PipelineProgressCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  pipeline: PipelineCreateNestedOneWithoutPipelineProgressesInput;
  pipelineStage: PipelineStageCreateNestedOneWithoutPipelineProgressesInput;
  progressableId: Scalars['String'];
  progressableType: PipelineProgressableType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PipelineProgressListRelationFilter = {
  every?: InputMaybe<PipelineProgressWhereInput>;
  none?: InputMaybe<PipelineProgressWhereInput>;
  some?: InputMaybe<PipelineProgressWhereInput>;
};

export type PipelineProgressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PipelineProgressOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pipeline?: InputMaybe<PipelineOrderByWithRelationInput>;
  pipelineId?: InputMaybe<SortOrder>;
  pipelineStage?: InputMaybe<PipelineStageOrderByWithRelationInput>;
  pipelineStageId?: InputMaybe<SortOrder>;
  progressableId?: InputMaybe<SortOrder>;
  progressableType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PipelineProgressScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PipelineId = 'pipelineId',
  PipelineStageId = 'pipelineStageId',
  ProgressableId = 'progressableId',
  ProgressableType = 'progressableType',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PipelineProgressUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutPipelineProgressesNestedInput>;
  pipelineStage?: InputMaybe<PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput>;
  progressableId?: InputMaybe<StringFieldUpdateOperationsInput>;
  progressableType?: InputMaybe<EnumPipelineProgressableTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PipelineProgressWhereInput = {
  AND?: InputMaybe<Array<PipelineProgressWhereInput>>;
  NOT?: InputMaybe<Array<PipelineProgressWhereInput>>;
  OR?: InputMaybe<Array<PipelineProgressWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipelineId?: InputMaybe<StringFilter>;
  pipelineStage?: InputMaybe<PipelineStageRelationFilter>;
  pipelineStageId?: InputMaybe<StringFilter>;
  progressableId?: InputMaybe<StringFilter>;
  progressableType?: InputMaybe<EnumPipelineProgressableTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PipelineProgressWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum PipelineProgressableType {
  Company = 'Company',
  Person = 'Person'
}

export type PipelineRelationFilter = {
  is?: InputMaybe<PipelineWhereInput>;
  isNot?: InputMaybe<PipelineWhereInput>;
};

export enum PipelineScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Icon = 'icon',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PipelineStage = {
  __typename?: 'PipelineStage';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  pipeline: Pipeline;
  pipelineId: Scalars['String'];
  pipelineProgresses?: Maybe<Array<PipelineProgress>>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PipelineStageCreateNestedOneWithoutPipelineProgressesInput = {
  connect?: InputMaybe<PipelineStageWhereUniqueInput>;
};

export type PipelineStageListRelationFilter = {
  every?: InputMaybe<PipelineStageWhereInput>;
  none?: InputMaybe<PipelineStageWhereInput>;
  some?: InputMaybe<PipelineStageWhereInput>;
};

export type PipelineStageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PipelineStageOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pipeline?: InputMaybe<PipelineOrderByWithRelationInput>;
  pipelineId?: InputMaybe<SortOrder>;
  pipelineProgresses?: InputMaybe<PipelineProgressOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PipelineStageRelationFilter = {
  is?: InputMaybe<PipelineStageWhereInput>;
  isNot?: InputMaybe<PipelineStageWhereInput>;
};

export enum PipelineStageScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  PipelineId = 'pipelineId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type PipelineStageUpdateOneRequiredWithoutPipelineProgressesNestedInput = {
  connect?: InputMaybe<PipelineStageWhereUniqueInput>;
};

export type PipelineStageWhereInput = {
  AND?: InputMaybe<Array<PipelineStageWhereInput>>;
  NOT?: InputMaybe<Array<PipelineStageWhereInput>>;
  OR?: InputMaybe<Array<PipelineStageWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipelineId?: InputMaybe<StringFilter>;
  pipelineProgresses?: InputMaybe<PipelineProgressListRelationFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PipelineStageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PipelineUpdateOneRequiredWithoutPipelineProgressesNestedInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
};

export type PipelineWhereInput = {
  AND?: InputMaybe<Array<PipelineWhereInput>>;
  NOT?: InputMaybe<Array<PipelineWhereInput>>;
  OR?: InputMaybe<Array<PipelineWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pipelineProgresses?: InputMaybe<PipelineProgressListRelationFilter>;
  pipelineStages?: InputMaybe<PipelineStageListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PipelineWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findManyCommentThreads: Array<CommentThread>;
  findManyCompany: Array<Company>;
  findManyPerson: Array<Person>;
  findManyPipeline: Array<Pipeline>;
  findManyPipelineProgress: Array<PipelineProgress>;
  findManyPipelineStage: Array<PipelineStage>;
  findManyUser: Array<User>;
};


export type QueryFindManyCommentThreadsArgs = {
  cursor?: InputMaybe<CommentThreadWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentThreadScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentThreadOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentThreadWhereInput>;
};


export type QueryFindManyCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindManyPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryFindManyPipelineArgs = {
  cursor?: InputMaybe<PipelineWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PipelineWhereInput>;
};


export type QueryFindManyPipelineProgressArgs = {
  cursor?: InputMaybe<PipelineProgressWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineProgressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineProgressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PipelineProgressWhereInput>;
};


export type QueryFindManyPipelineStageArgs = {
  cursor?: InputMaybe<PipelineStageWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineStageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineStageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PipelineStageWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  companies?: Maybe<Array<Company>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  id: Scalars['ID'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  workspaceMember?: Maybe<WorkspaceMember>;
};


export type UserCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCompaniesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  companies?: InputMaybe<CompanyCreateNestedManyWithoutAccountOwnerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  lastSeen?: InputMaybe<Scalars['DateTime']>;
  locale: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserOrderByWithRelationInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  companies?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastSeen?: InputMaybe<SortOrder>;
  locale?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Disabled = 'disabled',
  DisplayName = 'displayName',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  LastSeen = 'lastSeen',
  Locale = 'locale',
  Metadata = 'metadata',
  PasswordHash = 'passwordHash',
  PhoneNumber = 'phoneNumber',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutCompaniesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutCommentsInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companies?: InputMaybe<CompanyUpdateManyWithoutAccountOwnerNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  displayName?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastSeen?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  locale?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  companies?: InputMaybe<CompanyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  disabled?: InputMaybe<BoolFilter>;
  displayName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  lastSeen?: InputMaybe<DateTimeNullableFilter>;
  locale?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  passwordHash?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  commentThreads?: Maybe<Array<CommentThread>>;
  comments?: Maybe<Array<Comment>>;
  companies?: Maybe<Array<Company>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  displayName: Scalars['String'];
  domainName: Scalars['String'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Person>>;
  pipelineProgresses?: Maybe<Array<PipelineProgress>>;
  pipelineStages?: Maybe<Array<PipelineStage>>;
  pipelines?: Maybe<Array<Pipeline>>;
  updatedAt: Scalars['DateTime'];
  workspaceMember?: Maybe<Array<WorkspaceMember>>;
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  workspace: Workspace;
};

export type CreateCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
  commentText: Scalars['String'];
  authorId: Scalars['String'];
  commentThreadId: Scalars['String'];
  createdAt: Scalars['DateTime'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createOneComment: { __typename?: 'Comment', id: string, createdAt: string, body: string, commentThreadId: string, author: { __typename?: 'User', id: string, displayName: string, avatarUrl?: string | null } } };

export type CreateCommentThreadWithCommentMutationVariables = Exact<{
  commentThreadId: Scalars['String'];
  commentText: Scalars['String'];
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  commentId: Scalars['String'];
  commentThreadTargetArray: Array<CommentThreadTargetCreateManyCommentThreadInput> | CommentThreadTargetCreateManyCommentThreadInput;
}>;


export type CreateCommentThreadWithCommentMutation = { __typename?: 'Mutation', createOneCommentThread: { __typename?: 'CommentThread', id: string, createdAt: string, updatedAt: string, commentThreadTargets?: Array<{ __typename?: 'CommentThreadTarget', id: string, createdAt: string, updatedAt: string, commentThreadId: string, commentableType: CommentableType, commentableId: string }> | null, comments?: Array<{ __typename?: 'Comment', id: string, createdAt: string, updatedAt: string, body: string, author: { __typename?: 'User', id: string } }> | null } };

export type GetCommentThreadsByTargetsQueryVariables = Exact<{
  commentThreadTargetIds: Array<Scalars['String']> | Scalars['String'];
  orderBy?: InputMaybe<Array<CommentThreadOrderByWithRelationInput> | CommentThreadOrderByWithRelationInput>;
}>;


export type GetCommentThreadsByTargetsQuery = { __typename?: 'Query', findManyCommentThreads: Array<{ __typename?: 'CommentThread', id: string, comments?: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', id: string, displayName: string, avatarUrl?: string | null } }> | null, commentThreadTargets?: Array<{ __typename?: 'CommentThreadTarget', id: string, commentableId: string, commentableType: CommentableType }> | null }> };

export type GetCommentThreadQueryVariables = Exact<{
  commentThreadId: Scalars['String'];
}>;


export type GetCommentThreadQuery = { __typename?: 'Query', findManyCommentThreads: Array<{ __typename?: 'CommentThread', id: string, comments?: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', id: string, displayName: string, avatarUrl?: string | null } }> | null, commentThreadTargets?: Array<{ __typename?: 'CommentThreadTarget', commentableId: string, commentableType: CommentableType }> | null }> };

export type AddCommentThreadTargetOnCommentThreadMutationVariables = Exact<{
  commentThreadId: Scalars['String'];
  commentThreadTargetCreationDate: Scalars['DateTime'];
  commentThreadTargetId: Scalars['String'];
  commentableEntityId: Scalars['String'];
  commentableEntityType: CommentableType;
}>;


export type AddCommentThreadTargetOnCommentThreadMutation = { __typename?: 'Mutation', updateOneCommentThread: { __typename?: 'CommentThread', id: string, createdAt: string, updatedAt: string, commentThreadTargets?: Array<{ __typename?: 'CommentThreadTarget', id: string, createdAt: string, updatedAt: string, commentableType: CommentableType, commentableId: string }> | null } };

export type RemoveCommentThreadTargetOnCommentThreadMutationVariables = Exact<{
  commentThreadId: Scalars['String'];
  commentThreadTargetId: Scalars['String'];
}>;


export type RemoveCommentThreadTargetOnCommentThreadMutation = { __typename?: 'Mutation', updateOneCommentThread: { __typename?: 'CommentThread', id: string, createdAt: string, updatedAt: string, commentThreadTargets?: Array<{ __typename?: 'CommentThreadTarget', id: string, createdAt: string, updatedAt: string, commentableType: CommentableType, commentableId: string }> | null } };

export type GetCompaniesQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput>;
  where?: InputMaybe<CompanyWhereInput>;
}>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, domainName: string, name: string, createdAt: string, address: string, employees?: number | null, _commentCount: number, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string } | null }> };

export type UpdateCompanyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  domainName?: InputMaybe<Scalars['String']>;
  accountOwnerId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  address?: InputMaybe<Scalars['String']>;
  employees?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateOneCompany?: { __typename?: 'Company', address: string, createdAt: string, domainName: string, employees?: number | null, id: string, name: string, accountOwner?: { __typename?: 'User', id: string, email: string, displayName: string } | null } | null };

export type InsertCompanyMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  domainName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  address: Scalars['String'];
  employees?: InputMaybe<Scalars['Int']>;
}>;


export type InsertCompanyMutation = { __typename?: 'Mutation', createOneCompany: { __typename?: 'Company', address: string, createdAt: string, domainName: string, employees?: number | null, id: string, name: string } };

export type DeleteCompaniesMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteCompaniesMutation = { __typename?: 'Mutation', deleteManyCompany: { __typename?: 'AffectedRows', count: number } };

export type GetPipelinesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPipelinesQuery = { __typename?: 'Query', findManyPipeline: Array<{ __typename?: 'Pipeline', id: string, name: string, pipelineStages?: Array<{ __typename?: 'PipelineStage', name: string, color: string, pipelineProgresses?: Array<{ __typename?: 'PipelineProgress', id: string, progressableType: PipelineProgressableType, progressableId: string }> | null }> | null }> };

export type GetPeopleQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput> | PersonOrderByWithRelationInput>;
  where?: InputMaybe<PersonWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetPeopleQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', id: string, phone: string, email: string, city: string, firstname: string, lastname: string, createdAt: string, _commentCount: number, company?: { __typename?: 'Company', id: string, name: string, domainName: string } | null }> };

export type UpdatePeopleMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
}>;


export type UpdatePeopleMutation = { __typename?: 'Mutation', updateOnePerson?: { __typename?: 'Person', city: string, email: string, firstname: string, id: string, lastname: string, phone: string, createdAt: string, company?: { __typename?: 'Company', domainName: string, name: string, id: string } | null } | null };

export type InsertPersonMutationVariables = Exact<{
  id: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  city: Scalars['String'];
  email: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
}>;


export type InsertPersonMutation = { __typename?: 'Mutation', createOnePerson: { __typename?: 'Person', city: string, email: string, firstname: string, id: string, lastname: string, phone: string, createdAt: string, company?: { __typename?: 'Company', domainName: string, name: string, id: string } | null } };

export type DeletePeopleMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeletePeopleMutation = { __typename?: 'Mutation', deleteManyPerson: { __typename?: 'AffectedRows', count: number } };

export type SearchPeopleQueryVariables = Exact<{
  where?: InputMaybe<PersonWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput> | PersonOrderByWithRelationInput>;
}>;


export type SearchPeopleQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'Person', id: string, phone: string, email: string, city: string, firstname: string, lastname: string, createdAt: string }> };

export type SearchUserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type SearchUserQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'User', id: string, email: string, displayName: string }> };

export type EmptyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type EmptyQueryQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'User', id: string }> };

export type SearchCompanyQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput>;
}>;


export type SearchCompanyQuery = { __typename?: 'Query', searchResults: Array<{ __typename?: 'Company', id: string, name: string, domainName: string }> };

export type GetCurrentUserQueryVariables = Exact<{
  uuid?: InputMaybe<Scalars['String']>;
}>;


export type GetCurrentUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, displayName: string, workspaceMember?: { __typename?: 'WorkspaceMember', id: string, workspace: { __typename?: 'Workspace', id: string, domainName: string, displayName: string, logo?: string | null } } | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: string }> };


export const CreateCommentDocument = gql`
    mutation CreateComment($commentId: String!, $commentText: String!, $authorId: String!, $commentThreadId: String!, $createdAt: DateTime!) {
  createOneComment(
    data: {id: $commentId, createdAt: $createdAt, body: $commentText, author: {connect: {id: $authorId}}, commentThread: {connect: {id: $commentThreadId}}}
  ) {
    id
    createdAt
    body
    author {
      id
      displayName
      avatarUrl
    }
    commentThreadId
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      commentText: // value for 'commentText'
 *      authorId: // value for 'authorId'
 *      commentThreadId: // value for 'commentThreadId'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateCommentThreadWithCommentDocument = gql`
    mutation CreateCommentThreadWithComment($commentThreadId: String!, $commentText: String!, $authorId: String!, $createdAt: DateTime!, $commentId: String!, $commentThreadTargetArray: [CommentThreadTargetCreateManyCommentThreadInput!]!) {
  createOneCommentThread(
    data: {id: $commentThreadId, createdAt: $createdAt, updatedAt: $createdAt, comments: {createMany: {data: {authorId: $authorId, id: $commentId, createdAt: $createdAt, body: $commentText}}}, commentThreadTargets: {createMany: {data: $commentThreadTargetArray, skipDuplicates: true}}}
  ) {
    id
    createdAt
    updatedAt
    commentThreadTargets {
      id
      createdAt
      updatedAt
      commentThreadId
      commentableType
      commentableId
    }
    comments {
      id
      createdAt
      updatedAt
      body
      author {
        id
      }
    }
  }
}
    `;
export type CreateCommentThreadWithCommentMutationFn = Apollo.MutationFunction<CreateCommentThreadWithCommentMutation, CreateCommentThreadWithCommentMutationVariables>;

/**
 * __useCreateCommentThreadWithCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentThreadWithCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentThreadWithCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentThreadWithCommentMutation, { data, loading, error }] = useCreateCommentThreadWithCommentMutation({
 *   variables: {
 *      commentThreadId: // value for 'commentThreadId'
 *      commentText: // value for 'commentText'
 *      authorId: // value for 'authorId'
 *      createdAt: // value for 'createdAt'
 *      commentId: // value for 'commentId'
 *      commentThreadTargetArray: // value for 'commentThreadTargetArray'
 *   },
 * });
 */
export function useCreateCommentThreadWithCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentThreadWithCommentMutation, CreateCommentThreadWithCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentThreadWithCommentMutation, CreateCommentThreadWithCommentMutationVariables>(CreateCommentThreadWithCommentDocument, options);
      }
export type CreateCommentThreadWithCommentMutationHookResult = ReturnType<typeof useCreateCommentThreadWithCommentMutation>;
export type CreateCommentThreadWithCommentMutationResult = Apollo.MutationResult<CreateCommentThreadWithCommentMutation>;
export type CreateCommentThreadWithCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentThreadWithCommentMutation, CreateCommentThreadWithCommentMutationVariables>;
export const GetCommentThreadsByTargetsDocument = gql`
    query GetCommentThreadsByTargets($commentThreadTargetIds: [String!]!, $orderBy: [CommentThreadOrderByWithRelationInput!]) {
  findManyCommentThreads(
    orderBy: $orderBy
    where: {commentThreadTargets: {some: {commentableId: {in: $commentThreadTargetIds}}}}
  ) {
    id
    comments {
      id
      body
      createdAt
      updatedAt
      author {
        id
        displayName
        avatarUrl
      }
    }
    commentThreadTargets {
      id
      commentableId
      commentableType
    }
  }
}
    `;

/**
 * __useGetCommentThreadsByTargetsQuery__
 *
 * To run a query within a React component, call `useGetCommentThreadsByTargetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentThreadsByTargetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentThreadsByTargetsQuery({
 *   variables: {
 *      commentThreadTargetIds: // value for 'commentThreadTargetIds'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetCommentThreadsByTargetsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentThreadsByTargetsQuery, GetCommentThreadsByTargetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentThreadsByTargetsQuery, GetCommentThreadsByTargetsQueryVariables>(GetCommentThreadsByTargetsDocument, options);
      }
export function useGetCommentThreadsByTargetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentThreadsByTargetsQuery, GetCommentThreadsByTargetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentThreadsByTargetsQuery, GetCommentThreadsByTargetsQueryVariables>(GetCommentThreadsByTargetsDocument, options);
        }
export type GetCommentThreadsByTargetsQueryHookResult = ReturnType<typeof useGetCommentThreadsByTargetsQuery>;
export type GetCommentThreadsByTargetsLazyQueryHookResult = ReturnType<typeof useGetCommentThreadsByTargetsLazyQuery>;
export type GetCommentThreadsByTargetsQueryResult = Apollo.QueryResult<GetCommentThreadsByTargetsQuery, GetCommentThreadsByTargetsQueryVariables>;
export const GetCommentThreadDocument = gql`
    query GetCommentThread($commentThreadId: String!) {
  findManyCommentThreads(where: {id: {equals: $commentThreadId}}) {
    id
    comments {
      id
      body
      createdAt
      updatedAt
      author {
        id
        displayName
        avatarUrl
      }
    }
    commentThreadTargets {
      commentableId
      commentableType
    }
  }
}
    `;

/**
 * __useGetCommentThreadQuery__
 *
 * To run a query within a React component, call `useGetCommentThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentThreadQuery({
 *   variables: {
 *      commentThreadId: // value for 'commentThreadId'
 *   },
 * });
 */
export function useGetCommentThreadQuery(baseOptions: Apollo.QueryHookOptions<GetCommentThreadQuery, GetCommentThreadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentThreadQuery, GetCommentThreadQueryVariables>(GetCommentThreadDocument, options);
      }
export function useGetCommentThreadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentThreadQuery, GetCommentThreadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentThreadQuery, GetCommentThreadQueryVariables>(GetCommentThreadDocument, options);
        }
export type GetCommentThreadQueryHookResult = ReturnType<typeof useGetCommentThreadQuery>;
export type GetCommentThreadLazyQueryHookResult = ReturnType<typeof useGetCommentThreadLazyQuery>;
export type GetCommentThreadQueryResult = Apollo.QueryResult<GetCommentThreadQuery, GetCommentThreadQueryVariables>;
export const AddCommentThreadTargetOnCommentThreadDocument = gql`
    mutation AddCommentThreadTargetOnCommentThread($commentThreadId: String!, $commentThreadTargetCreationDate: DateTime!, $commentThreadTargetId: String!, $commentableEntityId: String!, $commentableEntityType: CommentableType!) {
  updateOneCommentThread(
    where: {id: $commentThreadId}
    data: {commentThreadTargets: {connectOrCreate: {create: {id: $commentThreadTargetId, createdAt: $commentThreadTargetCreationDate, commentableType: $commentableEntityType, commentableId: $commentableEntityId}, where: {id: $commentThreadTargetId}}}}
  ) {
    id
    createdAt
    updatedAt
    commentThreadTargets {
      id
      createdAt
      updatedAt
      commentableType
      commentableId
    }
  }
}
    `;
export type AddCommentThreadTargetOnCommentThreadMutationFn = Apollo.MutationFunction<AddCommentThreadTargetOnCommentThreadMutation, AddCommentThreadTargetOnCommentThreadMutationVariables>;

/**
 * __useAddCommentThreadTargetOnCommentThreadMutation__
 *
 * To run a mutation, you first call `useAddCommentThreadTargetOnCommentThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentThreadTargetOnCommentThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentThreadTargetOnCommentThreadMutation, { data, loading, error }] = useAddCommentThreadTargetOnCommentThreadMutation({
 *   variables: {
 *      commentThreadId: // value for 'commentThreadId'
 *      commentThreadTargetCreationDate: // value for 'commentThreadTargetCreationDate'
 *      commentThreadTargetId: // value for 'commentThreadTargetId'
 *      commentableEntityId: // value for 'commentableEntityId'
 *      commentableEntityType: // value for 'commentableEntityType'
 *   },
 * });
 */
export function useAddCommentThreadTargetOnCommentThreadMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentThreadTargetOnCommentThreadMutation, AddCommentThreadTargetOnCommentThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentThreadTargetOnCommentThreadMutation, AddCommentThreadTargetOnCommentThreadMutationVariables>(AddCommentThreadTargetOnCommentThreadDocument, options);
      }
export type AddCommentThreadTargetOnCommentThreadMutationHookResult = ReturnType<typeof useAddCommentThreadTargetOnCommentThreadMutation>;
export type AddCommentThreadTargetOnCommentThreadMutationResult = Apollo.MutationResult<AddCommentThreadTargetOnCommentThreadMutation>;
export type AddCommentThreadTargetOnCommentThreadMutationOptions = Apollo.BaseMutationOptions<AddCommentThreadTargetOnCommentThreadMutation, AddCommentThreadTargetOnCommentThreadMutationVariables>;
export const RemoveCommentThreadTargetOnCommentThreadDocument = gql`
    mutation RemoveCommentThreadTargetOnCommentThread($commentThreadId: String!, $commentThreadTargetId: String!) {
  updateOneCommentThread(
    where: {id: $commentThreadId}
    data: {commentThreadTargets: {delete: {id: $commentThreadTargetId}}}
  ) {
    id
    createdAt
    updatedAt
    commentThreadTargets {
      id
      createdAt
      updatedAt
      commentableType
      commentableId
    }
  }
}
    `;
export type RemoveCommentThreadTargetOnCommentThreadMutationFn = Apollo.MutationFunction<RemoveCommentThreadTargetOnCommentThreadMutation, RemoveCommentThreadTargetOnCommentThreadMutationVariables>;

/**
 * __useRemoveCommentThreadTargetOnCommentThreadMutation__
 *
 * To run a mutation, you first call `useRemoveCommentThreadTargetOnCommentThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCommentThreadTargetOnCommentThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCommentThreadTargetOnCommentThreadMutation, { data, loading, error }] = useRemoveCommentThreadTargetOnCommentThreadMutation({
 *   variables: {
 *      commentThreadId: // value for 'commentThreadId'
 *      commentThreadTargetId: // value for 'commentThreadTargetId'
 *   },
 * });
 */
export function useRemoveCommentThreadTargetOnCommentThreadMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCommentThreadTargetOnCommentThreadMutation, RemoveCommentThreadTargetOnCommentThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCommentThreadTargetOnCommentThreadMutation, RemoveCommentThreadTargetOnCommentThreadMutationVariables>(RemoveCommentThreadTargetOnCommentThreadDocument, options);
      }
export type RemoveCommentThreadTargetOnCommentThreadMutationHookResult = ReturnType<typeof useRemoveCommentThreadTargetOnCommentThreadMutation>;
export type RemoveCommentThreadTargetOnCommentThreadMutationResult = Apollo.MutationResult<RemoveCommentThreadTargetOnCommentThreadMutation>;
export type RemoveCommentThreadTargetOnCommentThreadMutationOptions = Apollo.BaseMutationOptions<RemoveCommentThreadTargetOnCommentThreadMutation, RemoveCommentThreadTargetOnCommentThreadMutationVariables>;
export const GetCompaniesDocument = gql`
    query GetCompanies($orderBy: [CompanyOrderByWithRelationInput!], $where: CompanyWhereInput) {
  companies: findManyCompany(orderBy: $orderBy, where: $where) {
    id
    domainName
    name
    createdAt
    address
    employees
    _commentCount
    accountOwner {
      id
      email
      displayName
    }
  }
}
    `;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($id: String, $name: String, $domainName: String, $accountOwnerId: String, $createdAt: DateTime, $address: String, $employees: Int) {
  updateOneCompany(
    where: {id: $id}
    data: {accountOwner: {connect: {id: $accountOwnerId}}, address: {set: $address}, domainName: {set: $domainName}, employees: {set: $employees}, name: {set: $name}, createdAt: {set: $createdAt}}
  ) {
    accountOwner {
      id
      email
      displayName
    }
    address
    createdAt
    domainName
    employees
    id
    name
  }
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      domainName: // value for 'domainName'
 *      accountOwnerId: // value for 'accountOwnerId'
 *      createdAt: // value for 'createdAt'
 *      address: // value for 'address'
 *      employees: // value for 'employees'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const InsertCompanyDocument = gql`
    mutation InsertCompany($id: String!, $name: String!, $domainName: String!, $createdAt: DateTime, $address: String!, $employees: Int) {
  createOneCompany(
    data: {id: $id, name: $name, domainName: $domainName, createdAt: $createdAt, address: $address, employees: $employees}
  ) {
    address
    createdAt
    domainName
    employees
    id
    name
  }
}
    `;
export type InsertCompanyMutationFn = Apollo.MutationFunction<InsertCompanyMutation, InsertCompanyMutationVariables>;

/**
 * __useInsertCompanyMutation__
 *
 * To run a mutation, you first call `useInsertCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCompanyMutation, { data, loading, error }] = useInsertCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      domainName: // value for 'domainName'
 *      createdAt: // value for 'createdAt'
 *      address: // value for 'address'
 *      employees: // value for 'employees'
 *   },
 * });
 */
export function useInsertCompanyMutation(baseOptions?: Apollo.MutationHookOptions<InsertCompanyMutation, InsertCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCompanyMutation, InsertCompanyMutationVariables>(InsertCompanyDocument, options);
      }
export type InsertCompanyMutationHookResult = ReturnType<typeof useInsertCompanyMutation>;
export type InsertCompanyMutationResult = Apollo.MutationResult<InsertCompanyMutation>;
export type InsertCompanyMutationOptions = Apollo.BaseMutationOptions<InsertCompanyMutation, InsertCompanyMutationVariables>;
export const DeleteCompaniesDocument = gql`
    mutation DeleteCompanies($ids: [String!]) {
  deleteManyCompany(where: {id: {in: $ids}}) {
    count
  }
}
    `;
export type DeleteCompaniesMutationFn = Apollo.MutationFunction<DeleteCompaniesMutation, DeleteCompaniesMutationVariables>;

/**
 * __useDeleteCompaniesMutation__
 *
 * To run a mutation, you first call `useDeleteCompaniesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompaniesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompaniesMutation, { data, loading, error }] = useDeleteCompaniesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteCompaniesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompaniesMutation, DeleteCompaniesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompaniesMutation, DeleteCompaniesMutationVariables>(DeleteCompaniesDocument, options);
      }
export type DeleteCompaniesMutationHookResult = ReturnType<typeof useDeleteCompaniesMutation>;
export type DeleteCompaniesMutationResult = Apollo.MutationResult<DeleteCompaniesMutation>;
export type DeleteCompaniesMutationOptions = Apollo.BaseMutationOptions<DeleteCompaniesMutation, DeleteCompaniesMutationVariables>;
export const GetPipelinesDocument = gql`
    query GetPipelines {
  findManyPipeline(skip: 1) {
    id
    name
    pipelineStages {
      name
      color
      pipelineProgresses {
        id
        progressableType
        progressableId
      }
    }
  }
}
    `;

/**
 * __useGetPipelinesQuery__
 *
 * To run a query within a React component, call `useGetPipelinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPipelinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPipelinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPipelinesQuery(baseOptions?: Apollo.QueryHookOptions<GetPipelinesQuery, GetPipelinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPipelinesQuery, GetPipelinesQueryVariables>(GetPipelinesDocument, options);
      }
export function useGetPipelinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPipelinesQuery, GetPipelinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPipelinesQuery, GetPipelinesQueryVariables>(GetPipelinesDocument, options);
        }
export type GetPipelinesQueryHookResult = ReturnType<typeof useGetPipelinesQuery>;
export type GetPipelinesLazyQueryHookResult = ReturnType<typeof useGetPipelinesLazyQuery>;
export type GetPipelinesQueryResult = Apollo.QueryResult<GetPipelinesQuery, GetPipelinesQueryVariables>;
export const GetPeopleDocument = gql`
    query GetPeople($orderBy: [PersonOrderByWithRelationInput!], $where: PersonWhereInput, $limit: Int) {
  people: findManyPerson(orderBy: $orderBy, where: $where, take: $limit) {
    id
    phone
    email
    city
    firstname
    lastname
    createdAt
    _commentCount
    company {
      id
      name
      domainName
    }
  }
}
    `;

/**
 * __useGetPeopleQuery__
 *
 * To run a query within a React component, call `useGetPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPeopleQuery(baseOptions?: Apollo.QueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
      }
export function useGetPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
        }
export type GetPeopleQueryHookResult = ReturnType<typeof useGetPeopleQuery>;
export type GetPeopleLazyQueryHookResult = ReturnType<typeof useGetPeopleLazyQuery>;
export type GetPeopleQueryResult = Apollo.QueryResult<GetPeopleQuery, GetPeopleQueryVariables>;
export const UpdatePeopleDocument = gql`
    mutation UpdatePeople($id: String, $firstname: String, $lastname: String, $phone: String, $city: String, $companyId: String, $email: String, $createdAt: DateTime) {
  updateOnePerson(
    where: {id: $id}
    data: {city: {set: $city}, company: {connect: {id: $companyId}}, email: {set: $email}, firstname: {set: $firstname}, id: {set: $id}, lastname: {set: $lastname}, phone: {set: $phone}, createdAt: {set: $createdAt}}
  ) {
    city
    company {
      domainName
      name
      id
    }
    email
    firstname
    id
    lastname
    phone
    createdAt
  }
}
    `;
export type UpdatePeopleMutationFn = Apollo.MutationFunction<UpdatePeopleMutation, UpdatePeopleMutationVariables>;

/**
 * __useUpdatePeopleMutation__
 *
 * To run a mutation, you first call `useUpdatePeopleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePeopleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePeopleMutation, { data, loading, error }] = useUpdatePeopleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      phone: // value for 'phone'
 *      city: // value for 'city'
 *      companyId: // value for 'companyId'
 *      email: // value for 'email'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useUpdatePeopleMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePeopleMutation, UpdatePeopleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePeopleMutation, UpdatePeopleMutationVariables>(UpdatePeopleDocument, options);
      }
export type UpdatePeopleMutationHookResult = ReturnType<typeof useUpdatePeopleMutation>;
export type UpdatePeopleMutationResult = Apollo.MutationResult<UpdatePeopleMutation>;
export type UpdatePeopleMutationOptions = Apollo.BaseMutationOptions<UpdatePeopleMutation, UpdatePeopleMutationVariables>;
export const InsertPersonDocument = gql`
    mutation InsertPerson($id: String!, $firstname: String!, $lastname: String!, $phone: String!, $city: String!, $email: String!, $createdAt: DateTime) {
  createOnePerson(
    data: {id: $id, firstname: $firstname, lastname: $lastname, phone: $phone, city: $city, email: $email, createdAt: $createdAt}
  ) {
    city
    company {
      domainName
      name
      id
    }
    email
    firstname
    id
    lastname
    phone
    createdAt
  }
}
    `;
export type InsertPersonMutationFn = Apollo.MutationFunction<InsertPersonMutation, InsertPersonMutationVariables>;

/**
 * __useInsertPersonMutation__
 *
 * To run a mutation, you first call `useInsertPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPersonMutation, { data, loading, error }] = useInsertPersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      phone: // value for 'phone'
 *      city: // value for 'city'
 *      email: // value for 'email'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useInsertPersonMutation(baseOptions?: Apollo.MutationHookOptions<InsertPersonMutation, InsertPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPersonMutation, InsertPersonMutationVariables>(InsertPersonDocument, options);
      }
export type InsertPersonMutationHookResult = ReturnType<typeof useInsertPersonMutation>;
export type InsertPersonMutationResult = Apollo.MutationResult<InsertPersonMutation>;
export type InsertPersonMutationOptions = Apollo.BaseMutationOptions<InsertPersonMutation, InsertPersonMutationVariables>;
export const DeletePeopleDocument = gql`
    mutation DeletePeople($ids: [String!]) {
  deleteManyPerson(where: {id: {in: $ids}}) {
    count
  }
}
    `;
export type DeletePeopleMutationFn = Apollo.MutationFunction<DeletePeopleMutation, DeletePeopleMutationVariables>;

/**
 * __useDeletePeopleMutation__
 *
 * To run a mutation, you first call `useDeletePeopleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePeopleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePeopleMutation, { data, loading, error }] = useDeletePeopleMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeletePeopleMutation(baseOptions?: Apollo.MutationHookOptions<DeletePeopleMutation, DeletePeopleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePeopleMutation, DeletePeopleMutationVariables>(DeletePeopleDocument, options);
      }
export type DeletePeopleMutationHookResult = ReturnType<typeof useDeletePeopleMutation>;
export type DeletePeopleMutationResult = Apollo.MutationResult<DeletePeopleMutation>;
export type DeletePeopleMutationOptions = Apollo.BaseMutationOptions<DeletePeopleMutation, DeletePeopleMutationVariables>;
export const SearchPeopleDocument = gql`
    query SearchPeople($where: PersonWhereInput, $limit: Int, $orderBy: [PersonOrderByWithRelationInput!]) {
  searchResults: findManyPerson(where: $where, take: $limit, orderBy: $orderBy) {
    id
    phone
    email
    city
    firstname
    lastname
    createdAt
  }
}
    `;

/**
 * __useSearchPeopleQuery__
 *
 * To run a query within a React component, call `useSearchPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPeopleQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchPeopleQuery(baseOptions?: Apollo.QueryHookOptions<SearchPeopleQuery, SearchPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPeopleQuery, SearchPeopleQueryVariables>(SearchPeopleDocument, options);
      }
export function useSearchPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPeopleQuery, SearchPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPeopleQuery, SearchPeopleQueryVariables>(SearchPeopleDocument, options);
        }
export type SearchPeopleQueryHookResult = ReturnType<typeof useSearchPeopleQuery>;
export type SearchPeopleLazyQueryHookResult = ReturnType<typeof useSearchPeopleLazyQuery>;
export type SearchPeopleQueryResult = Apollo.QueryResult<SearchPeopleQuery, SearchPeopleQueryVariables>;
export const SearchUserDocument = gql`
    query SearchUser($where: UserWhereInput, $limit: Int) {
  searchResults: findManyUser(where: $where, take: $limit) {
    id
    email
    displayName
  }
}
    `;

/**
 * __useSearchUserQuery__
 *
 * To run a query within a React component, call `useSearchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchUserQuery(baseOptions?: Apollo.QueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
      }
export function useSearchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
        }
export type SearchUserQueryHookResult = ReturnType<typeof useSearchUserQuery>;
export type SearchUserLazyQueryHookResult = ReturnType<typeof useSearchUserLazyQuery>;
export type SearchUserQueryResult = Apollo.QueryResult<SearchUserQuery, SearchUserQueryVariables>;
export const EmptyQueryDocument = gql`
    query EmptyQuery {
  searchResults: findManyUser {
    id
  }
}
    `;

/**
 * __useEmptyQueryQuery__
 *
 * To run a query within a React component, call `useEmptyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmptyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmptyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmptyQueryQuery(baseOptions?: Apollo.QueryHookOptions<EmptyQueryQuery, EmptyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmptyQueryQuery, EmptyQueryQueryVariables>(EmptyQueryDocument, options);
      }
export function useEmptyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmptyQueryQuery, EmptyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmptyQueryQuery, EmptyQueryQueryVariables>(EmptyQueryDocument, options);
        }
export type EmptyQueryQueryHookResult = ReturnType<typeof useEmptyQueryQuery>;
export type EmptyQueryLazyQueryHookResult = ReturnType<typeof useEmptyQueryLazyQuery>;
export type EmptyQueryQueryResult = Apollo.QueryResult<EmptyQueryQuery, EmptyQueryQueryVariables>;
export const SearchCompanyDocument = gql`
    query SearchCompany($where: CompanyWhereInput, $limit: Int, $orderBy: [CompanyOrderByWithRelationInput!]) {
  searchResults: findManyCompany(where: $where, take: $limit, orderBy: $orderBy) {
    id
    name
    domainName
  }
}
    `;

/**
 * __useSearchCompanyQuery__
 *
 * To run a query within a React component, call `useSearchCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCompanyQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchCompanyQuery(baseOptions?: Apollo.QueryHookOptions<SearchCompanyQuery, SearchCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCompanyQuery, SearchCompanyQueryVariables>(SearchCompanyDocument, options);
      }
export function useSearchCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCompanyQuery, SearchCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCompanyQuery, SearchCompanyQueryVariables>(SearchCompanyDocument, options);
        }
export type SearchCompanyQueryHookResult = ReturnType<typeof useSearchCompanyQuery>;
export type SearchCompanyLazyQueryHookResult = ReturnType<typeof useSearchCompanyLazyQuery>;
export type SearchCompanyQueryResult = Apollo.QueryResult<SearchCompanyQuery, SearchCompanyQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser($uuid: String) {
  users: findManyUser(where: {id: {equals: $uuid}}) {
    id
    email
    displayName
    workspaceMember {
      id
      workspace {
        id
        domainName
        displayName
        logo
      }
    }
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  findManyUser {
    id
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;