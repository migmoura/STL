/**
 * Columns Block
 * Adds a class for the number of columns and marks image-only columns
 * so CSS can reorder them on mobile. No React — pure DOM decoration.
 */
export default function decorate(block: HTMLElement): void {
  const cols = [...(block.firstElementChild?.children ?? [])];
  block.classList.add(`columns-${cols.length}-cols`);

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector("picture");
      if (pic) {
        const picWrapper = pic.closest("div");
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add("columns-img-col");
        }
      }
    });
  });
}

