import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251004_011314 from './20251004_011314';
import * as migration_20251004_012640 from './20251004_012640';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251004_011314.up,
    down: migration_20251004_011314.down,
    name: '20251004_011314',
  },
  {
    up: migration_20251004_012640.up,
    down: migration_20251004_012640.down,
    name: '20251004_012640'
  },
];
