import { gql } from '@apollo/client';

export const GET_PIPELINES = gql`
  query GetPipelines($where: PipelineWhereInput) {
    findManyPipeline(where: $where) {
      id
      name
      pipelineProgressableType
      pipelineStages {
        id
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

export const UPDATE_PIPELINE_STAGE = gql`
  mutation UpdateOnePipelineProgress($id: String, $pipelineStageId: String) {
    updateOnePipelineProgress(
      where: { id: $id }
      data: { pipelineStage: { connect: { id: $pipelineStageId } } }
    ) {
      id
    }
  }
`;

export const ADD_ENTITY_TO_PIPELINE = gql`
  mutation CreateOnePipelineProgress(
    $uuid: String!
    $entityType: PipelineProgressableType!
    $entityId: String!
    $pipelineId: String!
    $pipelineStageId: String!
  ) {
    createOnePipelineProgress(
      data: {
        id: $uuid
        progressableType: $entityType
        progressableId: $entityId
        pipeline: { connect: { id: $pipelineId } }
        pipelineStage: { connect: { id: $pipelineStageId } }
      }
    ) {
      id
    }
  }
`;
