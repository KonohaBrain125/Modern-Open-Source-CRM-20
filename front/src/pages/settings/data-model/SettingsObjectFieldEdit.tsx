import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useMetadataField } from '@/metadata/hooks/useMetadataField';
import { useMetadataObjectForSettings } from '@/metadata/hooks/useMetadataObjectForSettings';
import { getFieldSlug } from '@/metadata/utils/getFieldSlug';
import { SaveAndCancelButtons } from '@/settings/components/SaveAndCancelButtons/SaveAndCancelButtons';
import { SettingsHeaderContainer } from '@/settings/components/SettingsHeaderContainer';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { SettingsObjectFieldFormSection } from '@/settings/data-model/components/SettingsObjectFieldFormSection';
import { SettingsObjectFieldTypeSelectSection } from '@/settings/data-model/components/SettingsObjectFieldTypeSelectSection';
import { MetadataFieldDataType } from '@/settings/data-model/types/ObjectFieldDataType';
import { AppPath } from '@/types/AppPath';
import { IconArchive, IconSettings } from '@/ui/display/icon';
import { H2Title } from '@/ui/display/typography/components/H2Title';
import { Button } from '@/ui/input/button/components/Button';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Section } from '@/ui/layout/section/components/Section';
import { Breadcrumb } from '@/ui/navigation/bread-crumb/components/Breadcrumb';

export const SettingsObjectFieldEdit = () => {
  const navigate = useNavigate();

  const { objectSlug = '', fieldSlug = '' } = useParams();
  const { findActiveMetadataObjectBySlug, loading } =
    useMetadataObjectForSettings();

  const activeMetadataObject = findActiveMetadataObjectBySlug(objectSlug);

  const { disableMetadataField, editMetadataField } = useMetadataField();
  const activeMetadataField = activeMetadataObject?.fields.find(
    (metadataField) =>
      metadataField.isActive && getFieldSlug(metadataField) === fieldSlug,
  );

  const [formValues, setFormValues] = useState<
    Partial<{
      icon: string;
      label: string;
      description: string;
    }>
  >({});

  useEffect(() => {
    if (loading) return;

    if (!activeMetadataObject || !activeMetadataField) {
      navigate(AppPath.NotFound);
      return;
    }

    if (!Object.keys(formValues).length) {
      setFormValues({
        icon: activeMetadataField.icon ?? undefined,
        label: activeMetadataField.label,
        description: activeMetadataField.description ?? undefined,
      });
    }
  }, [
    activeMetadataField,
    activeMetadataObject,
    formValues,
    loading,
    navigate,
  ]);

  if (!activeMetadataObject || !activeMetadataField) return null;

  const areRequiredFieldsFilled = !!formValues.label;

  const hasChanges =
    formValues.description !== activeMetadataField.description ||
    formValues.icon !== activeMetadataField.icon ||
    formValues.label !== activeMetadataField.label;

  const canSave = areRequiredFieldsFilled && hasChanges;

  const handleSave = async () => {
    const editedField = { ...activeMetadataField, ...formValues };

    await editMetadataField(editedField);

    navigate(`/settings/objects/${objectSlug}`);
  };

  const handleDisable = async () => {
    await disableMetadataField(activeMetadataField);
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
              { children: activeMetadataField.label },
            ]}
          />
          {activeMetadataField.isCustom && (
            <SaveAndCancelButtons
              isSaveDisabled={!canSave}
              onCancel={() => navigate(`/settings/objects/${objectSlug}`)}
              onSave={handleSave}
            />
          )}
        </SettingsHeaderContainer>
        <SettingsObjectFieldFormSection
          disabled={!activeMetadataField.isCustom}
          name={formValues.label}
          description={formValues.description}
          iconKey={formValues.icon}
          onChange={(values) =>
            setFormValues((previousFormValues) => ({
              ...previousFormValues,
              ...values,
            }))
          }
        />
        <SettingsObjectFieldTypeSelectSection
          disabled
          type={activeMetadataField.type as MetadataFieldDataType}
        />
        <Section>
          <H2Title title="Danger zone" description="Disable this field" />
          <Button
            Icon={IconArchive}
            title="Disable"
            size="small"
            onClick={handleDisable}
          />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
