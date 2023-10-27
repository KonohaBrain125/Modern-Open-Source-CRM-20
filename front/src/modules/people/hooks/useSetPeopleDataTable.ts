import { useLocation } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';

import { useResetTableRowSelection } from '@/ui/data/data-table/hooks/useResetTableRowSelection';
import { isFetchingDataTableDataState } from '@/ui/data/data-table/states/isFetchingDataTableDataState';
import { numberOfTableRowsState } from '@/ui/data/data-table/states/numberOfTableRowsState';
import { tableRowIdsState } from '@/ui/data/data-table/states/tableRowIdsState';
import { currentPageLocationState } from '@/ui/utilities/loading-state/states/currentPageLocationState';
import { GetPeopleQuery } from '~/generated/graphql';

import { peopleCityFamilyState } from '../states/peopleCityFamilyState';
import { peopleCompanyFamilyState } from '../states/peopleCompanyFamilyState';
import { peopleCreatedAtFamilyState } from '../states/peopleCreatedAtFamilyState';
import { peopleEmailFamilyState } from '../states/peopleEmailFamilyState';
import { peopleJobTitleFamilyState } from '../states/peopleJobTitleFamilyState';
import { peopleLinkedinUrlFamilyState } from '../states/peopleLinkedinUrlFamilyState';
import { peopleNameCellFamilyState } from '../states/peopleNamesFamilyState';
import { peoplePhoneFamilyState } from '../states/peoplePhoneFamilyState';

export const useSetPeopleDataTable = () => {
  const resetTableRowSelection = useResetTableRowSelection();

  const currentLocation = useLocation().pathname;

  return useRecoilCallback(
    ({ set, snapshot }) =>
      (newPeopleArray: GetPeopleQuery['people']) => {
        for (const person of newPeopleArray) {
          const currentEmail = snapshot
            .getLoadable(peopleEmailFamilyState(person.id))
            .valueOrThrow();

          if (currentEmail !== person.email) {
            set(peopleEmailFamilyState(person.id), person.email ?? null);
          }

          const currentCity = snapshot
            .getLoadable(peopleCityFamilyState(person.id))
            .valueOrThrow();

          if (currentCity !== person.city) {
            set(peopleCityFamilyState(person.id), person.city ?? null);
          }

          const currentCompany = snapshot
            .getLoadable(peopleCompanyFamilyState(person.id))
            .valueOrThrow();

          if (
            JSON.stringify(currentCompany) !== JSON.stringify(person.company)
          ) {
            set(peopleCompanyFamilyState(person.id), person.company);
          }

          const currentPhone = snapshot
            .getLoadable(peoplePhoneFamilyState(person.id))
            .valueOrThrow();

          if (currentPhone !== person.phone) {
            set(peoplePhoneFamilyState(person.id), person.phone ?? null);
          }

          const currentCreatedAt = snapshot
            .getLoadable(peopleCreatedAtFamilyState(person.id))
            .valueOrThrow();

          if (currentCreatedAt !== person.createdAt) {
            set(peopleCreatedAtFamilyState(person.id), person.createdAt);
          }

          const currentJobTitle = snapshot
            .getLoadable(peopleJobTitleFamilyState(person.id))
            .valueOrThrow();

          if (currentJobTitle !== person.jobTitle) {
            set(peopleJobTitleFamilyState(person.id), person.jobTitle ?? null);
          }

          const currentLinkedinUrl = snapshot
            .getLoadable(peopleLinkedinUrlFamilyState(person.id))
            .valueOrThrow();

          if (currentLinkedinUrl !== person.linkedinUrl) {
            set(
              peopleLinkedinUrlFamilyState(person.id),
              person.linkedinUrl ?? null,
            );
          }

          const currentNameCell = snapshot
            .getLoadable(peopleNameCellFamilyState(person.id))
            .valueOrThrow();

          if (
            currentNameCell.firstName !== person.firstName ||
            currentNameCell.lastName !== person.lastName ||
            currentNameCell.commentCount !== person._activityCount
          ) {
            set(peopleNameCellFamilyState(person.id), {
              firstName: person.firstName ?? null,
              lastName: person.lastName ?? null,
              commentCount: person._activityCount,
              displayName: person.displayName ?? null,
              avatarUrl: person.avatarUrl ?? null,
            });
          }
        }

        const peopleIds = newPeopleArray.map((people) => people.id);

        set(tableRowIdsState, (currentRowIds) => {
          if (JSON.stringify(currentRowIds) !== JSON.stringify(peopleIds)) {
            return peopleIds;
          }

          return currentRowIds;
        });

        resetTableRowSelection();

        set(numberOfTableRowsState, peopleIds.length);

        set(currentPageLocationState, currentLocation);

        set(isFetchingDataTableDataState, false);
      },
    [currentLocation, resetTableRowSelection],
  );
};
