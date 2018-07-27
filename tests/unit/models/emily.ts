export function getAverage(a: number, b: number, c?: number): string { 
  let total = a;
  let count = 1;
      total += b;
      count++;
      if (typeof c !== 'undefined') {
          total += c;
  count++; }
      const average = total / count;
      return 'The average is ' + average;
  }


 export function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
    let result = '';
    for (let i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
}
    return result;
}

export function getAverageRest(...a: number[]): string { 
  let total = 0;
  let count = 0;
      for (let i = 0; i < a.length; i++) {
          total += a[i];
  count++; }
      const average = total / count;
      return 'The average is ' + average;
  }

 export function getAverageOverload(a: string, b: string, c: string): string; 
 export function getAverageOverload(a: number, b: number, c: number): string; 
 export function getAverageOverload(a: any, b: any, c: any): string {
    const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    const average = total / 3;
    return 'The average is ' + average;
}

/*const mediumAddNumbers = (a: number, b: number) => { return a + b;
}*/

export const scopePreservingExample = {
  text: "Property from lexical scope",
  run: function () {
setTimeout(() => { alert(this.text);
}, 1000); }
};
