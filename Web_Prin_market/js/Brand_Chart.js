function CreateBrandChart(target){
  return c3.generate({
      data: {
          columns: [
              ['Montfleur', 2],['Dent Chula',1],['Crystal',38],['Chang',14],
              ['Seven-eleven',2],['Namthip',8],['Nestle',66],['Minere',12],
              ['Singha',7],['Aura',1],['Siam',1],['From Home',1]
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
        grouped: false
      },
      bindto: target
  });
}

function brandSort(){
    Brand_chart.load({
      unload :   ['Montfleur','Dent Chula','Crystal','Chang',
                'Seven-eleven','Namthip','Nestle','Minere',
                'Singha','Aura','Siam','From Home'],
      columns : [
        ['Nestle',66],['Crystal',38],['Chang',14],['Minere',12],['Singha',7],
        ['Namthip',8],['Montfleur', 2],['Seven-eleven',2],['Dent Chula',1],
        ['Aura',1],['Siam',1],['From Home',1]
      ]
    });
//     setTimeout(function () {
//     Gender_Piechart.load({
//         columns: [
//            ['Communication Art',2],['Education',2],
//            ['Fine Arts',1],['Psychology',1]
//         ]
//     });
// }, 1000);
}
