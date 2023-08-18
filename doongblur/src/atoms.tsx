import { atom } from "recoil";

export let defaultCategories: string[] = [];
export let defaultAccounts: string[] = [];

export const categoryState = atom<string>({
  key: "category",
  default: defaultCategories[0],
});

export const categoriesState = atom<string[]>({
  key: "categoriesState",
  default: JSON.parse(
    localStorage.getItem("categories") ?? JSON.stringify(defaultCategories)
  ),
});

export const accountState = atom<string>({
  key: "account",
  default: defaultAccounts[0],
});

export const accountsStates = atom<string[]>({
  key: "accountsState",
  default: JSON.parse(
    localStorage.getItem("accounts") ?? JSON.stringify(defaultAccounts)
  ),
});
