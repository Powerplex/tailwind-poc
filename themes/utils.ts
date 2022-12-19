const capitalize = (str: string): string =>
  str[0].toUpperCase() + str.substring(1);

type FlattenObjectKeys<
  T extends Record<string, unknown>,
  Key = keyof T
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}${Capitalize<FlattenObjectKeys<T[Key]>>}`
    : `${Key}`
  : never;

export function flattenThemeValues<T extends Record<string, unknown>>(
  namespace: T,
  prefix?: string
): Partial<Record<FlattenObjectKeys<T>, string>> {
  const pairs = Object.entries(namespace);

  return Object.entries(namespace).reduce((acc, [key, value]) => {
    const finalKey = prefix ? prefix + capitalize(key) : key;

    return typeof value === "object" && value !== null
      ? {
          ...acc,
          ...flattenThemeValues(value as Record<string, unknown>, finalKey),
        }
      : { ...acc, [finalKey]: value };
  }, {});
}
