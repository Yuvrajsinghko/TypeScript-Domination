function getNum(kind: string | number) {
  if (typeof kind === "string") {
    return `Getting ${kind} number`;
  }

  return `Number type:${kind}`;
}
