import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { useMetadataField } from '@/metadata/hooks/useMetadataField';
import { useMetadataObjectForSettings } from '@/metadata/hooks/useMetadataObjectForSettings';
import { SaveAndCancelButtons } from '@/settings/components/SaveAndCancelButtons/SaveAndCancelButtons';
import { SettingsHeaderContainer } from '@/settings/components/SettingsHeaderContainer';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import {
  SettingsObjectFieldItemTableRow,
  StyledObjectFieldTableRow,
} from '@/settings/data-model/object-details/components/SettingsObjectFieldItemTableRow';
import { AppPath } from '@/types/AppPath';
import { IconMinus, IconPlus, IconSettings } from '@/ui/display/icon';
import { H2Title } from '@/ui/display/typography/components/H2Title';
import { Button } from '@/ui/input/button/components/Button';
import { LightIconButton } from '@/ui/input/button/components/LightIconButton';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Section } from '@/ui/layout/section/components/Section';
import { Table } from '@/ui/layout/table/components/Table';
import { TableHeader } from '@/ui/layout/table/components/TableHeader';
import { TableSection } from '@/ui/layout/table/components/TableSection';
import { Breadcrumb } from '@/ui/navigation/bread-crumb/components/Breadcrumb';

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const StyledAddCustomFieldButton = styled(Button)`
  align-self: flex-end;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const SettingsObjectNewFieldStep1 = () => {
  const navigate = useNavigate();

  const { objectSlug = '' } = useParams();
  const { findActiveMetadataObjectBySlug, loading } =
    useMetadataObjectForSettings();

  const activeMetadataObject = findActiveMetadataObjectBySlug(objectSlug);

  const { activateMetadataField, disableMetadataField } = useMetadataField();
  const [metadataFields, setMetadataFields] = useState(
    activeMetadataObject?.fields ?? [],
  );

  const activeMetadataFields = metadataFields.filter((field) => field.isActive);
  const disabledMetadataFields = metadataFields.filter(
    (field) => !field.isActive,
  );

  const canSave = metadataFields.some(
    (field, index) =>
      field.isActive !== activeMetadataObject?.fields[index].isActive,
  );

  useEffect(() => {
    if (loading) return;

    if (!activeMetadataObject) {
      navigate(AppPath.NotFound);
      return;
    }

    if (!metadataFields.length) setMetadataFields(activeMetadataObject.fields);
  }, [activeMetadataObject, metadataFields.length, loading, navigate]);

  if (!activeMetadataObject) return null;

  const handleToggleField = (fieldId: string) =>
    setMetadataFields((previousFields) =>
      previousFields.map((field) =>
        field.id === fieldId ? { ...field, isActive: !field.isActive } : field,
      ),
    );

  const handleSave = async () => {
    await Promise.all(
      metadataFields.map((metadataField, index) => {
        if (
          metadataField.isActive === activeMetadataObject.fields[index].isActive
        ) {
          return;
        }

        return metadataField.isActive
          ? activateMetadataField(metadataField)
          : disableMetadataField(metadataField);
      }),
    );

    navigate(`/settings/objects/${objectSlug}`);
  };

  return (
    <SubMenuTopBarContainer Icon={IconSettings} title="Settings">
      <SettingsPageContainer>
        <SettingsHeaderContainer>
          <Breadcrumb
            links={[
              { children: 'Objects', href: '/settings/objects' },
              {
                children: activeMetadataObject.labelPlural,
                href: `/settings/objects/${objectSlug}`,
              },
              { children: 'New Field' },
            ]}
          />
          <SaveAndCancelButtons
            isSaveDisabled={!canSave}
            onCancel={() => navigate(`/settings/objects/${objectSlug}`)}
            onSave={handleSave}
          />
        </SettingsHeaderContainer>
        <StyledSection>
          <H2Title
            title="Check disabled fields"
            description="Before creating a custom field, check if it already exists in the disabled section."
          />
          <Table>
            <StyledObjectFieldTableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Field type</TableHeader>
              <TableHeader>Data type</TableHeader>
              <TableHeader></TableHeader>
            </StyledObjectFieldTableRow>
            {!!activeMetadataFields.length && (
              <TableSection isInitiallyExpanded={false} title="Active">
                {activeMetadataFields.map((field) => (
                  <SettingsObjectFieldItemTableRow
                    key={field.id}
                    fieldItem={field}
                    ActionIcon={
                      <LightIconButton
                        Icon={IconMinus}
                        accent="tertiary"
                        onClick={() => handleToggleField(field.id)}
                      />
                    }
                  />
                ))}
              </TableSection>
            )}
            {!!disabledMetadataFields.length && (
              <TableSection title="Disabled">
                {disabledMetadataFields.map((field) => (
                  <SettingsObjectFieldItemTableRow
                    key={field.name}
                    fieldItem={field}
                    ActionIcon={
                      <LightIconButton
                        Icon={IconPlus}
                        accent="tertiary"
                        onClick={() => handleToggleField(field.id)}
                      />
                    }
                  />
                ))}
              </TableSection>
            )}
          </Table>
          <StyledAddCustomFieldButton
            Icon={IconPlus}
            title="Add Custom Field"
            size="small"
            variant="secondary"
            onClick={() =>
              navigate(`/settings/objects/${objectSlug}/new-field/step-2`)
            }
          />
        </StyledSection>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
