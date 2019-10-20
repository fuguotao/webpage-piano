const defaultPckey2keyOld = {
  // 键位对应
  90: 28, // z
  83: 29, // s
  88: 30, // x
  68: 31, // d
  67: 32, // c
  86: 33, // v
  71: 34, // g
  66: 35, // b
  72: 36, // h
  78: 37, // n
  74: 38, // j
  77: 39, // m
  188: 40, // ,
  81: 40, // q
  76: 41, // L
  50: 41, // 2
  190: 42, // .
  87: 42, // w
  186: 43, // ;
  51: 43, // 3
  191: 44, // /
  69: 44, // e
  82: 45, // r
  53: 46, // 5
  84: 47, // t
  54: 48, // 6
  89: 49, // y
  55: 50, // 7
  85: 51, // u
  73: 52, // i
  57: 53, // 9
  79: 54, // o
  48: 55, // 0
  80: 56, // p
  219: 57, // [
  187: 58, // =
  221: 59, // ]
};

// for (let i in defaultPckey2keyOld) {
//     defaultPckey2keyOld[i] = defaultPckey2keyOld[i] + 27;
// }

// const t = `
// 90: 1,  // z
// 83: 2,  // s
// 88: 3,  // x
// 68: 4,  // d
// 67: 5,  // c
// 86: 6,  // v
// 71: 7,  // g
// 66: 8,  // b
// 72: 9,  // h
// 78: 10, // n
// 74: 11, // j
// 77: 12, // m
// 188: 13,// ,
// 81: 13, // q
// 76: 14, // L
// 50: 14, // 2
// 190: 15,// .
// 87: 15, // w
// 186: 16,// ;
// 51: 16, // 3
// 191: 17,// /
// 69: 17, // e
// 82: 18, // r
// 53: 19, // 5
// 84: 20, // t
// 54: 21, // 6
// 89: 22, // y
// 55: 23, // 7
// 85: 24, // u
// 73: 25, // i
// 57: 26, // 9
// 79: 27, // o
// 48: 28, // 0
// 80: 29, // p
// 219: 30, // [
// 187: 31, // =
// 221: 32, // ]
// `;
// let a = t.replace(/: (\d+),/g, (a, b) => {
//     return `: ${parseInt(b, 10) + 27},`;
// });
// console.log(a);

const defaultPckey2key = {
  8: 73,
  32: 40,
  37: 44,
  38: 42,
  39: 47,
  40: 45,
  48: 68,
  49: 52,
  50: 54,
  51: 56,
  52: 57,
  53: 59,
  54: 61,
  55: 63,
  56: 64,
  57: 66,
  65: 28,
  66: 23,
  67: 20,
  68: 32,
  69: 44,
  70: 33,
  71: 35,
  72: 37,
  73: 52,
  74: 39,
  75: 40,
  76: 42,
  77: 27,
  78: 25,
  79: 54,
  80: 56,
  81: 40,
  82: 45,
  83: 30,
  84: 47,
  85: 51,
  86: 21,
  87: 42,
  88: 18,
  89: 49,
  90: 16,
  96: 49,
  97: 52,
  98: 54,
  99: 56,
  100: 57,
  101: 59,
  102: 61,
  103: 63,
  104: 64,
  105: 66,
  106: 71,
  107: 68,
  109: 73,
  110: 51,
  111: 69,
  186: 44,
  187: 71,
  188: 28,
  189: 69,
  190: 30,
  191: 32,
  192: 51,
  219: 57,
  220: 61,
  221: 59,
  222: 45,
};

export default () => ({
  ...defaultPckey2key,
});

/**
 * 老版本的键盘映射
 */
export const pckey2keyType2 = () => ({
  ...defaultPckey2keyOld,
});
