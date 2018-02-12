export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function toggleModal(id) {
  return {
    type: TOGGLE_MODAL,
    id
  }
}
