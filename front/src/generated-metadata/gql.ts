/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateOneMetadataObject($input: CreateOneObjectInput!) {\n    createOneObject(input: $input) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateOneMetadataObjectDocument,
    "\n  mutation CreateOneMetadataField($input: CreateOneFieldInput!) {\n    createOneField(input: $input) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateOneMetadataFieldDocument,
    "\n  mutation UpdateOneMetadataField(\n    $idToUpdate: ID!\n    $updatePayload: UpdateFieldInput!\n  ) {\n    updateOneField(input: { id: $idToUpdate, update: $updatePayload }) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateOneMetadataFieldDocument,
    "\n  mutation UpdateOneMetadataObject(\n    $idToUpdate: ID!\n    $updatePayload: UpdateObjectInput!\n  ) {\n    updateOneObject(input: { id: $idToUpdate, update: $updatePayload }) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateOneMetadataObjectDocument,
    "\n  mutation DeleteOneMetadataObject($idToDelete: ID!) {\n    deleteOneObject(input: { id: $idToDelete }) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n": types.DeleteOneMetadataObjectDocument,
    "\n  mutation DeleteOneMetadataField($idToDelete: ID!) {\n    deleteOneField(input: { id: $idToDelete }) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n": types.DeleteOneMetadataFieldDocument,
    "\n  query MetadataObjects {\n    objects(paging: { first: 1000 }) {\n      edges {\n        node {\n          id\n          dataSourceId\n          nameSingular\n          namePlural\n          labelSingular\n          labelPlural\n          description\n          icon\n          isCustom\n          isActive\n          createdAt\n          updatedAt\n          fields(paging: { first: 1000 }) {\n            edges {\n              node {\n                id\n                type\n                name\n                label\n                description\n                icon\n                placeholder\n                isCustom\n                isActive\n                isNullable\n                createdAt\n                updatedAt\n              }\n            }\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n            }\n            totalCount\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.MetadataObjectsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOneMetadataObject($input: CreateOneObjectInput!) {\n    createOneObject(input: $input) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOneMetadataObject($input: CreateOneObjectInput!) {\n    createOneObject(input: $input) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOneMetadataField($input: CreateOneFieldInput!) {\n    createOneField(input: $input) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOneMetadataField($input: CreateOneFieldInput!) {\n    createOneField(input: $input) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateOneMetadataField(\n    $idToUpdate: ID!\n    $updatePayload: UpdateFieldInput!\n  ) {\n    updateOneField(input: { id: $idToUpdate, update: $updatePayload }) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateOneMetadataField(\n    $idToUpdate: ID!\n    $updatePayload: UpdateFieldInput!\n  ) {\n    updateOneField(input: { id: $idToUpdate, update: $updatePayload }) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateOneMetadataObject(\n    $idToUpdate: ID!\n    $updatePayload: UpdateObjectInput!\n  ) {\n    updateOneObject(input: { id: $idToUpdate, update: $updatePayload }) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateOneMetadataObject(\n    $idToUpdate: ID!\n    $updatePayload: UpdateObjectInput!\n  ) {\n    updateOneObject(input: { id: $idToUpdate, update: $updatePayload }) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteOneMetadataObject($idToDelete: ID!) {\n    deleteOneObject(input: { id: $idToDelete }) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteOneMetadataObject($idToDelete: ID!) {\n    deleteOneObject(input: { id: $idToDelete }) {\n      id\n      dataSourceId\n      nameSingular\n      namePlural\n      labelSingular\n      labelPlural\n      description\n      icon\n      isCustom\n      isActive\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteOneMetadataField($idToDelete: ID!) {\n    deleteOneField(input: { id: $idToDelete }) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteOneMetadataField($idToDelete: ID!) {\n    deleteOneField(input: { id: $idToDelete }) {\n      id\n      type\n      name\n      label\n      description\n      icon\n      placeholder\n      isCustom\n      isActive\n      isNullable\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MetadataObjects {\n    objects(paging: { first: 1000 }) {\n      edges {\n        node {\n          id\n          dataSourceId\n          nameSingular\n          namePlural\n          labelSingular\n          labelPlural\n          description\n          icon\n          isCustom\n          isActive\n          createdAt\n          updatedAt\n          fields(paging: { first: 1000 }) {\n            edges {\n              node {\n                id\n                type\n                name\n                label\n                description\n                icon\n                placeholder\n                isCustom\n                isActive\n                isNullable\n                createdAt\n                updatedAt\n              }\n            }\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n            }\n            totalCount\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MetadataObjects {\n    objects(paging: { first: 1000 }) {\n      edges {\n        node {\n          id\n          dataSourceId\n          nameSingular\n          namePlural\n          labelSingular\n          labelPlural\n          description\n          icon\n          isCustom\n          isActive\n          createdAt\n          updatedAt\n          fields(paging: { first: 1000 }) {\n            edges {\n              node {\n                id\n                type\n                name\n                label\n                description\n                icon\n                placeholder\n                isCustom\n                isActive\n                isNullable\n                createdAt\n                updatedAt\n              }\n            }\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n            }\n            totalCount\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;