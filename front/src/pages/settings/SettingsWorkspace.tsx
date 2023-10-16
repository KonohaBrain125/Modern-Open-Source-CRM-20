import styled from '@emotion/styled';

import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { DeleteWorkspace } from '@/settings/profile/components/DeleteWorkspace';
import { NameField } from '@/settings/workspace/components/NameField';
import { WorkspaceLogoUploader } from '@/settings/workspace/components/WorkspaceLogoUploader';
import { IconSettings } from '@/ui/display/icon';
import { H1Title } from '@/ui/display/typography/components/H1Title';
import { H2Title } from '@/ui/display/typography/components/H2Title';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Section } from '@/ui/layout/section/components/Section';

const StyledH1Title = styled(H1Title)`
  margin-bottom: 0;
`;

export const SettingsWorkspace = () => (
  <SubMenuTopBarContainer Icon={IconSettings} title="Settings">
    <SettingsPageContainer width={350}>
      <StyledH1Title title="General" />
      <Section>
        <H2Title title="Picture" />
        <WorkspaceLogoUploader />
      </Section>
      <Section>
        <H2Title title="Name" description="Name of your workspace" />
        <NameField />
      </Section>

      <Section>
        <DeleteWorkspace />
      </Section>
    </SettingsPageContainer>
  </SubMenuTopBarContainer>
);
