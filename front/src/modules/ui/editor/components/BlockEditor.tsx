import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/react';
import styled from '@emotion/styled';

interface BlockEditorProps {
  editor: BlockNoteEditor;
}

const StyledEditor = styled.div`
  min-height: 200px;
  width: 100%;
  & .editor {
    background: ${({ theme }) => theme.background.primary};
    font-size: 13px;
    color: ${({ theme }) => theme.font.color.primary};
  }
  & .editor [class^='_inlineContent']:before {
    color: ${({ theme }) => theme.font.color.tertiary};
    font-style: normal !important;
  }
  .tippy-box:has(.mantine-Toolbar-root) {
    transform: translateX(-13%);
  }
`;

export const BlockEditor = ({ editor }: BlockEditorProps) => (
  <StyledEditor>
    <BlockNoteView editor={editor} />
  </StyledEditor>
);
