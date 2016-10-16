// Compare two version numbers version1 and version2.
// If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

// Here is an example of version numbers ordering:

// 0.1 < 1.1 < 1.2 < 13.37
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var arr1 = version1.split("."),
      arr2 = version2.split("."),
      arr1Len = arr1.length,
      arr2Len = arr2.length,
      maxLen = arr1Len;

  if (arr1Len > arr2Len) {
    for (var i = arr2Len; i < arr1Len; i++) {
      arr2[i] = 0;
    }
    maxLen = arr1Len;
  } else if (arr1Len < arr2Len) {
    for (var j = arr1Len; j < arr2Len; j++) {
      arr1[j] = 0;
    }
    maxLen = arr2Len;
  }

  if (Number(arr1[0]) > Number(arr2[0])) {
    return 1;
  } else if (Number(arr1[0]) < Number(arr2[0])) {
    return -1;
  } else {
    var k=0;
    while (k < maxLen) {
      if (Number(arr1[k]) > Number(arr2[k])) {
          return 1;
      } else if(Number(arr1[k]) < Number(arr2[k])) {
          return -1;
      } else {
        k++;
      }
    }
    return 0;
  }
};
