import { useState } from 'react';

import { FieldRecoilScopeContext } from '@/ui/editable-field/states/recoil-scope-contexts/FieldRecoilScopeContext';
import { DoubleTextInputEdit } from '@/ui/input/components/DoubleTextInputEdit';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { Person, useUpdateOnePersonMutation } from '~/generated/graphql';

type OwnProps = {
  people: Pick<Person, 'id' | 'firstName' | 'lastName'>;
};

export const PeopleFullNameEditableField = ({ people }: OwnProps) => {
  const [internalValueFirstName, setInternalValueFirstName] = useState(
    people.firstName,
  );
  const [internalValueLastName, setInternalValueLastName] = useState(
    people.lastName,
  );

  const [updatePeople] = useUpdateOnePersonMutation();

  const handleChange = async (
    newValueFirstName: string,
    newValueLastName: string,
  ) => {
    setInternalValueFirstName(newValueFirstName);
    setInternalValueLastName(newValueLastName);
    handleSubmit(newValueFirstName, newValueLastName);
  };

  const handleSubmit = async (
    newValueFirstName: string,
    newValueLastName: string,
  ) => {
    await updatePeople({
      variables: {
        where: {
          id: people.id,
        },
        data: {
          firstName: newValueFirstName ?? '',
          lastName: newValueLastName ?? '',
        },
      },
    });
  };

  return (
    <RecoilScope CustomRecoilScopeContext={FieldRecoilScopeContext}>
      <DoubleTextInputEdit
        firstValuePlaceholder="Empty"
        secondValuePlaceholder="Empty"
        firstValue={internalValueFirstName ?? ''}
        secondValue={internalValueLastName ?? ''}
        onChange={handleChange}
      />
    </RecoilScope>
  );
};
