function CreatePie(target) {
  return c3.generate({
    data: {
        // iris data from R
        columns: [
            ['male', 79],
            ['female', 74]
        ],
        type : 'pie',
        onclick: function (d, i) {
          if(d.id == 'male')         mouseClickMale();
          else if(d.id == 'female')  mouseClickFemale();
          console.log("onclick", d, i);
        },
        //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    tooltip: {
      grouped: false
    },
    bindto: target
  });
}

function mouseClickMale() {
    document.getElementById("title_gender").innerText = "Male";
    Gender_Piechart.load({
        unload: ['male'],
        columns: [
          ['Education',3],['Psychology',1],['Dentistry', 5],
          ['Accounting',1],['Political',2],['Science',18],
          ['Engineering',43],['Economics',6]
        ]
    });
}

function mouseClickFemale() {
    document.getElementById("title_gender").innerText = "Faculty Pie chart";
    Gender_Piechart.load({
        unload : [ 'female','Education','Psychology','Dentistry'
                ,'Accounting','Political','Science','Engineering','Economics'],
        columns: [
           ['Education',2],['Psychology',1],['Dentistry', 11],['Communication Art',2],
           ['Accounting',7],['Political',13],['Science',32],['Engineering',59],
           ['Fine Arts',1],['Economics',20],['Arts',5]
        ]
    });
}

function changeToBar() {
    if(state == "pie") {
        state = "bar";
        console.log(document.getElementsByClassName("GenderButton")[0].children[0]);
        document.getElementsByClassName("GenderButton")[0].children[0].innerText= "Change to Pie chart";
        document.getElementById("title_gender").innerText = "Faculty Bar chart";
        Gender_Piechart.transform('bar');
    // tooltips false   Gender_Piechart
    } else {
        state = "pie";
        document.getElementsByClassName("GenderButton")[0].children[0].innerText = "Change to Bar chart";
        document.getElementById("title_gender").innerText = "Faculty Pie chart";
        Gender_Piechart.transform('pie');
    }
}

function genderSort(){
    Gender_Piechart.load({
      unload : ['Education','Psychology','Dentistry','Communication Art'
              ,'Accounting','Political','Science','Fine Arts','Economics','Arts'],
      columns : [
          ['Science',32],['Economics',20],['Political',13],['Dentistry', 11],
          ['Accounting',7],['Arts',5]

      ]
    });
    setTimeout(function () {
    Gender_Piechart.load({
        columns: [
           ['Communication Art',2],['Education',2],
           ['Fine Arts',1],['Psychology',1]
        ]
    });
}, 1000);
}
