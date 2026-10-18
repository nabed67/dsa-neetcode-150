class Solution {
  encode(strs: string[]): string {
    let token = "";

    strs.forEach((str) => {
      token += `${str.length}#${str}`;
    });

    return token;
  }

  decode(str: string): string[] {
    let out: string[] = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") j++;

      const len = parseInt(str.slice(i, j));
      out.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }

    return out;
  }
}

const sol = new Solution();

// const encodedStr = sol.encode(["Hello", "World"]);
const encodedStr = sol.encode(["1,23", "45,6", "7,8,9"]);
console.log(sol.decode(encodedStr));
