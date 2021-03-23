/*
* Can be imported and placed as a child of any component
* to be used to determine when it re-renders.
*
* <Log message="Home Component Rendered" />
*/
export function Log({ message = 'Log ran with no message.' }) {
  console.log(message)
  return null
}