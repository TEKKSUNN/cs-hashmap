import HashMap from "../src/modules/hashMap";

describe("HashMap", () => {
  let map;

  beforeEach(() => {
    map = new HashMap();
  });

  test("set and get values", () => {
    map.set("foo", "bar");
    expect(map.get("foo")).toBe("bar");

    map.set("foo", "baz"); // overwrite
    expect(map.get("foo")).toBe("baz");
  });

  test("has method", () => {
    map.set("key1", "value1");
    expect(map.has("key1")).toBe(true);
    expect(map.has("key2")).toBe(false);
  });

  test("remove method", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");

    expect(map.remove("key1")).toBe(true);
    expect(map.has("key1")).toBe(false);
    expect(map.get("key1")).toBe(null);

    expect(map.remove("nonExistentKey")).toBe(false);
  });

  test("length method", () => {
    expect(map.length()).toBe(0);
    map.set("key1", "value1");
    map.set("key2", "value2");
    expect(map.length()).toBe(2);
  });

  test("clear method", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    map.clear();
    expect(map.length()).toBe(0);
    expect(map.get("key1")).toBe(null);
    expect(map.get("key2")).toBe(null);
  });

  test("keys method", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    expect(map.keys()).toEqual(expect.arrayContaining(["key1", "key2"]));
  });

  test("values method", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    expect(map.values()).toEqual(expect.arrayContaining(["value1", "value2"]));
  });

  test("entries method", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    expect(map.entries()).toEqual(
      expect.arrayContaining([
        ["key1", "value1"],
        ["key2", "value2"],
      ]),
    );
  });
});
