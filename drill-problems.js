/*
  猛特訓アプリ 問題データ（このファイルだけ編集すれば問題を追加できます）

  追加のしかた：
  「▲ ここより上に追加」の行の直上に、下の形のセットを1つ貼ります（前のセットの } のあとにカンマ）。
  { title:"セット名", items:[
      { q:"日本語（意味のかたまり）", a:"English chunk" },
      { q:"つなげる日本語", a:"English chunk chunk" },
      { q:"全文の日本語", a:"Full English sentence.", full:true }   // 最後は full:true
  ]}

  ルール：
  ・a（英語）はユーザーが決めた英文をそのまま使う（書き換えない）
  ・すべての a は、全文の英語の「連続した一部分」にする
  ・最後の1問に full:true を付ける

  下のセットは動作確認用のサンプルです。自分の問題を追加したら、消して構いません。
*/
window.DRILL_SETS = [
  { title:"サンプル：父の通勤", items:[
    { q:"私の父は", a:"My father" },
    { q:"小さな会社で働いている", a:"who works at a small company" },
    { q:"私の父は、小さな会社で働いていて、", a:"My father, who works at a small company," },
    { q:"毎日電車で会社へ行きます", a:"goes to the office by train every day." },
    { q:"小さな会社で働いている私の父は、毎日電車で会社へ行きます。", a:"My father, who works at a small company, goes to the office by train every day.", full:true }
  ]},
  { title:"サンプル：もしもの話", items:[
    { q:"もしもっと時間があれば", a:"If I had more time," },
    { q:"毎朝英語を勉強するのに", a:"I would study English every morning." },
    { q:"もしもっと時間があれば、毎朝英語を勉強するのに。", a:"If I had more time, I would study English every morning.", full:true }
  ]}
  // ▲ ここより上に追加
];
