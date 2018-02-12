function CreateBehaveChart(target){
  return c3.generate({
      data: {
        columns: [
            // ['Don\'t Care',31],
            // ['Always',5],
            // ['Sometimes',41],
            // ['Never',76]
            ['Data',31,5,41,76]
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
      axis: {
        x: {
            type: 'category',
            categories: ['Don\'t Care', 'Always', 'Sometimes','Never']
        }
      },
      tooltip: {
        grouped: false
      },
      bindto: target
  });
}
