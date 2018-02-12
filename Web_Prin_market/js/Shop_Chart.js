function CreateShopChart(target){
  return c3.generate({
      data: {
        columns: [
            ['Price', 1,1,3,2,0],
            ['Transportation',0,1,0,2,4],
            ['Fame',0,1,0,3,3],
            ['Mineral water',0, 1, 0, 6, 0],
            ['Material',0,0,0,4,3],
            ['Shape',0,3,0,4,0]
        ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      },
      tooltip: {
        grouped: true
      },
      bindto: target
  });
}
// function shopSort(){
//     Shop_chart.load({
//       unload :   ['Montfleur','Dent Chula','Crystal','Chang',
//                 'Seven-eleven','Namthip','Nestle','Minere',
//                 'Singha','Aura','Siam','From Home'],
//       columns : [
//         ['Nestle',66],['Crystal',38],['Chang',14],['Minere',12],['Singha',7],
//         ['Namthip',8],['Montfleur', 2],['Seven-eleven',2],['Dent Chula',1],
//         ['Aura',1],['Siam',1],['From Home',1]
//       ]
//     });
//     setTimeout(function () {
//     Gender_Piechart.load({
//         columns: [
//            ['Communication Art',2],['Education',2],
//            ['Fine Arts',1],['Psychology',1]
//         ]
//     });
// }, 1000);
//}
