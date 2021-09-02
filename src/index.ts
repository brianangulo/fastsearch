/**
 * Binary search based algorithm returns index to the first found item matchin the key or false
 * @param arr Iterable array or string to perform the search on
 * @param key Key to be matched
 * @param start index at which to begin the search if not provided it will defaul to 0
 * @param end index at which to end the search
 * @returns The index for the key within the arr or false if not found
 */
 export const find: (arr: any[] | string, key: any, start?: number, end?: number) => number | false = (arr: any[] | string, key: any, start: number = 0, end: number = arr.length - 1) => {
    if (start > end) return false;

    const midPoint = Math.floor((start+end)/2);
    //returns the index at which the key was found
    if (arr[midPoint] === key) return midPoint;

    if (arr[midPoint] > key) return find(arr, key, start, midPoint - 1);
    else return find(arr, key, midPoint+1, end);
};
/**
 * Sequential search based algorithm returns index of only the first matching key or false
 * @param arr Mandatory iterable array or string
 * @param key Mandatory item being searched for
 * @returns The index of the looked for item or false if not found
 */
export const bruteFind = (arr: any[] | string, key: any) => {
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] === key) return i;
    };
    return false;
}

