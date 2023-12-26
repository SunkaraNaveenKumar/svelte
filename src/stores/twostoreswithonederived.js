import { derived, writable } from "svelte/store";

const firstStore = writable("");
const secondStore = writable("");
const combineStore = derived([firstStore, secondStore], ([$a, $b]) => {
  return `${$a} ${$b}`;
});
const handleChangeFirstStore = (text) => {
  // firstStore=val
  // this will not work and through out the typeError
  firstStore.set(text)
  // firstStore.update((val) => val + text);
};
const handleCombineStore = (text) => {
  // combineStore.set(text) 
  // combineStore = textnvm 
  // above both process will not work and through out the typeError
};
console.log("combinedDerivedStore",combineStore)
export {
  firstStore,
  secondStore,
  combineStore,
  handleChangeFirstStore,
  handleCombineStore,
};
