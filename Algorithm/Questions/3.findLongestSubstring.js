var lengthOfLongestSubstring = function(s) {
	let arr = [];
	let maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (arr.indexOf(char) !== -1) {
			/*如果有的話，因為重複了，所以把從該位置之前的字元都從陣列中拿掉
          陣列中保持著在該字串中連續，且不重複的字元*/
			arr = arr.slice(arr.indexOf(char) + 1);
		}

		//經過判斷後把目前這個字元加進陣列中
		arr.push(char);

		//如果目前陣列的長度，大於目前要回傳的最大長度，就把要回傳的最大長度更新
		maxLen = Math.max(maxLen, arr.length);
	}

	//最後回傳
	return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('dvdfsdsdsadtyuuiop')); // 3
