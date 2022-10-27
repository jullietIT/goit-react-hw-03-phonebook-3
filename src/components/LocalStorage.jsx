// import React, { useEffect } from 'react';

// export function uselocalStorage(intialValue, key) {
//   const getValue = () => {
//     const storage = localStorage.getItem(key);

//     if (storage) {
//       return JSON.parce(storage);
//     }

//     return intialValue;
//   };

//   const [value, setValue] = useState(getValue);

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// }
