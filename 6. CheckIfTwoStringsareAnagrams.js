function areAnagrams(str1, str2) {
    let sortedStr1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
