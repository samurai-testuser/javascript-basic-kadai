// 現在時刻を取得
const date = new Date();

// 年、月、日を配列に格納
const ymd = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
]

// yyyy年mm月dd日の形式で出力
console.log(ymd[0] + "年" + ymd[1] + "月" + ymd[2] + "日");