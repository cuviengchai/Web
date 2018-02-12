function CreateTestChart(target){
  return c3.generate({
      data: {
        columns: [
            ['Price', 25,15,56,36,21],
            ['Teste',7,6,30,60,50],
            ['Volume',22,4,43,70,14],
            ['Convenience',0,3,20,63,67],
            ['Mineral water',19,26,43,53,12],
            ['Material',25,9,69,32,18],
            ['Shape',27,15,69,36,6]
        ],
        type: 'bar',
        order : 'desc',
        onclick: function (d, i) {
            Test_chart.groups([['Price','Teste','Volume','Convenience',
                                'Mineral water','Material','Shape']]);
            console.log("onclick", d, i);
        },
    },
    subchart: {
        show: true
    },
    zoom: {
        enabled: true
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
