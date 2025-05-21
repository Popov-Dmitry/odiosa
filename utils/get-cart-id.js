export const getCartId = (id, size) => {
  if (!id) {
    return undefined;
  }
  if (!size) {
    return id;
  }
  return `${id}-${size}`;
};