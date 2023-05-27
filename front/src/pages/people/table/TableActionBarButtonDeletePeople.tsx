import { TbTrash } from 'react-icons/tb';
import { EntityTableActionBarButton } from '../../../components/table/action-bar/EntityTableActionBarButton';
import { useDeletePeopleMutation } from '../../../generated/graphql';
import { selectedRowIdsState } from '../../../modules/ui/tables/states/selectedRowIdsState';
import { useRecoilValue } from 'recoil';
import { useResetTableRowSelection } from '../../../modules/ui/tables/hooks/useResetTableRowSelection';

export function TableActionBarButtonDeletePeople() {
  const selectedRowIds = useRecoilValue(selectedRowIdsState);

  const resetRowSelection = useResetTableRowSelection();

  const [deletePeople] = useDeletePeopleMutation({
    refetchQueries: ['GetPeople'],
  });

  async function handleDeleteClick() {
    await deletePeople({
      variables: {
        ids: selectedRowIds,
      },
    });

    resetRowSelection();
  }

  return (
    <EntityTableActionBarButton
      label="Delete"
      icon={<TbTrash size={16} />}
      onClick={handleDeleteClick}
    />
  );
}
