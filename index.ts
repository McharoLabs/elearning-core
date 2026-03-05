import * as UserEntities from './src/user/entities';
import * as CourseEntities from './src/course/entities';

export const CORE_ENTITIES = [
  ...Object.values(UserEntities),
  ...Object.values(CourseEntities),
];

export * from './src/user';
