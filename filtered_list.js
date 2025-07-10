function filterdList(items) {
  const filtered = [];
  for (let i = 0; i < items.length; i++) {
    const value = items[i];
    if (typeof value === "number") {
      filtered.push(value);
    }
  }
  return filtered;
}

function filteredList2(items) {
  return items.filter((item) => {
    return typeof item === "number";
  });
}
console.log(filteredList2(["a", "b", 1, 2]));
