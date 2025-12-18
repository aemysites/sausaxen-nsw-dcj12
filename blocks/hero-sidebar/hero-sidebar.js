export default function decorate(block) {
  // Restructure: move columns from row wrapper to direct children of block
  const row = block.querySelector(':scope > div');
  if (row) {
    const columns = Array.from(row.children);
    columns.forEach(col => block.appendChild(col));
    row.remove();
  }

  if (!block.querySelector(':scope > div:first-child picture')) {
    block.classList.add('no-image');
  }
}
