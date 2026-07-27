// The canonical pest list. Single source of truth for anything that tells a
// visitor which pests a provider handles — the badges on the provider page and
// the auto-generated description both read this array and nothing else.
//
// This module is deliberately free of 'use client' and of any React import so
// server code (generateProfileText, JSON-LD) can import it too. Do not add
// either.
//
// OVERLAP RULES — these are load-bearing. The schema carries broader duplicate
// columns alongside the specific ones; only the specific column is ever read,
// so no provider is described or badged twice for the same pest:
//   * pest_birds is read. pest_birds_general is NEVER read — it holds stale
//     import data and was the cause of mole catchers being described as
//     treating birds.
//   * pest_rats and pest_mice are read individually. pest_rodents and
//     pest_rodents_general are NEVER read.
//
// Every column below exists on "Providers" and is a boolean. Do not add an
// entry without confirming the column exists.

export interface PestDefinition {
  /** Column name on "Providers". */
  column: string;
  /** Title-case label, used for badges. */
  label: string;
  /** Lower-case form, used mid-sentence in generated prose. */
  proseLabel: string;
}

export const PESTS: PestDefinition[] = [
  { column: 'pest_rats', label: 'Rats', proseLabel: 'rats' },
  { column: 'pest_mice', label: 'Mice', proseLabel: 'mice' },
  { column: 'pest_squirrels', label: 'Squirrels', proseLabel: 'squirrels' },
  { column: 'pest_foxes', label: 'Foxes', proseLabel: 'foxes' },
  { column: 'pest_moles', label: 'Moles', proseLabel: 'moles' },
  { column: 'pest_wasps', label: 'Wasps', proseLabel: 'wasps' },
  { column: 'pest_bees', label: 'Bees', proseLabel: 'bees' },
  { column: 'pest_ants', label: 'Ants', proseLabel: 'ants' },
  { column: 'pest_cockroaches', label: 'Cockroaches', proseLabel: 'cockroaches' },
  { column: 'pest_bed_bugs', label: 'Bed Bugs', proseLabel: 'bed bugs' },
  { column: 'pest_fleas', label: 'Fleas', proseLabel: 'fleas' },
  { column: 'pest_moths', label: 'Moths', proseLabel: 'moths' },
  { column: 'pest_flies', label: 'Flies', proseLabel: 'flies' },
  { column: 'pest_beetles', label: 'Beetles', proseLabel: 'beetles' },
  { column: 'pest_spiders', label: 'Spiders', proseLabel: 'spiders' },
  { column: 'pest_silverfish', label: 'Silverfish', proseLabel: 'silverfish' },
  { column: 'pest_ladybirds', label: 'Ladybirds', proseLabel: 'ladybirds' },
  { column: 'pest_pigeons', label: 'Pigeons', proseLabel: 'pigeons' },
  { column: 'pest_seagulls', label: 'Seagulls', proseLabel: 'seagulls' },
  { column: 'pest_birds', label: 'Birds', proseLabel: 'birds' },
];

/**
 * The pests a provider explicitly handles.
 *
 * Only an explicit `true` counts. NULL means the provider was never researched
 * for that pest and false means they do not offer it — both are treated as
 * absent, so an unresearched provider is never presented as either offering or
 * refusing a service.
 */
export function activePests(provider: Record<string, unknown>): PestDefinition[] {
  return PESTS.filter((pest) => provider[pest.column] === true);
}
