import styled from '@emotion/styled';

import { useSpreadsheetImportInitialStep } from '@/spreadsheet-import/hooks/useSpreadsheetImportInitialStep';
import { useSpreadsheetImportInternal } from '@/spreadsheet-import/hooks/useSpreadsheetImportInternal';
import { IconX } from '@/ui/display/icon/index';
import { useDialog } from '@/ui/feedback/dialog//hooks/useDialog';
import { IconButton } from '@/ui/input/button/components/IconButton';
import { useStepBar } from '@/ui/navigation/step-bar/hooks/useStepBar';

const StyledCloseButtonContainer = styled.div`
  align-items: center;
  aspect-ratio: 1;
  display: flex;
  height: 60px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

type ModalCloseButtonProps = {
  onClose: () => void;
};

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  const { initialStepState } = useSpreadsheetImportInternal();

  const { initialStep } = useSpreadsheetImportInitialStep(
    initialStepState?.type,
  );

  const { activeStep } = useStepBar({
    initialStep,
  });

  const { enqueueDialog } = useDialog();

  const handleClose = () => {
    if (activeStep === -1) {
      onClose();
      return;
    }
    enqueueDialog({
      title: 'Exit import flow',
      message: 'Are you sure? Your current information will not be saved.',
      buttons: [
        { title: 'Cancel' },
        { title: 'Exit', onClick: onClose, accent: 'danger', role: 'confirm' },
      ],
    });
  };

  return (
    <StyledCloseButtonContainer>
      <IconButton Icon={IconX} onClick={handleClose} />
    </StyledCloseButtonContainer>
  );
};
