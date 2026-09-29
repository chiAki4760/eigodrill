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
  ]},
  { title:"例文：§366", items:[
  { q:"何か起こったときのために", a:"In case anything happens," },
  { q:"すぐに電話をくれ", a:"give me a call immediately;" },
  { q:"何か起こったらすぐに電話をくれ", a:"In case anything happens, give me a call immediately;" },
  { q:"急行するよ", a:"I'll rush over" },
  { q:"君の居るところに着くために", a:"to get to where you are." },
  { q:"君の居るところへ急行するよ", a:"I'll rush over to get to where you are." },
  { q:"何か起こったらすぐに電話をくれ。君の居るところへ急行するよ。", a:"In case anything happens, give me a call immediately; I'll rush over to get to where you are.", full:true },
  { q:"そら見たことか", a:"Serves you right." },
  { q:"(私は)あなたに言った", a:"I told you" },
  { q:"データのコピーを取っておくように", a:"to make a copy of the data" },
  { q:"データのコピーを取っておくように言ったのに", a:"I told you to make a copy of the data" },
  { q:"コンピュータの調子が悪くなるといけないので", a:"in case the computer went wrong." },
  { q:"コンピュータの調子が悪くなるといけないので、データのコピーを取っておくように言ったのに", a:"I told you to make a copy of the data in case the computer went wrong." },
  { q:"そら見たことか。コンピュータの調子が悪くなるといけないので、データのコピーを取っておくように言ったのに。", a:"Serves you right. I told you to make a copy of the data in case the computer went wrong.", full:true },
  { q:"もうおいとましよう", a:"We'd better go now" },
  { q:"余計に時間がかかるかもしれないから", a:"in case it takes more time" },
  { q:"予定より", a:"than we expect" },
  { q:"そこに着くのに", a:"to get there" },
  { q:"そこに着くのに予定より余計に時間がかかるかもしれないから", a:"in case it takes more time than we expect to get there" },
  { q:"交通渋滞のために", a:"because of the traffic jam." },
  { q:"交通渋滞のためにそこに着くのに予定より余計に時間がかかるかもしれないから", a:"in case it takes more time than we expect to get there because of the traffic jam." },
  { q:"交通渋滞のためにそこに着くのに予定より余計に時間がかかるかもしれないから、もうおいとましよう。", a:"We'd better go now in case it takes more time than we expect to get there because of the traffic jam.", full:true }
]},

  // ▲ ここより上に追加
];
