import { PrismaClient } from '@prisma/client';

import { seedCompanies } from './companies';
import { seedWorkspaces } from './workspaces';
import { seedPeople } from './people';
import { seedComments } from './comments';
import { seedUsers } from './users';
import { seedPipelines } from './pipelines';
import { seedMetadata } from './metadata';

const seed = async () => {
  const prisma = new PrismaClient();
  await seedWorkspaces(prisma);
  await seedUsers(prisma);
  await seedCompanies(prisma);
  await seedPeople(prisma);
  await seedComments(prisma);
  await seedPipelines(prisma);
  await seedMetadata(prisma);
  await prisma.$disconnect();
};

seed();
