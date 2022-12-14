
let employeeDetails = [{
  "TaskId": "Task-01",
  "TaskName": "Support",
  "ActivityId": "Activity-01",
  "ActivityName": "Production",
  "TaskStatus": "Booked",
  "WeekEntry": [
    {
      "BookedHours": "2hrs",
      "Status": "1",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "1",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "4",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "2",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "2",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "1",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "3",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    }
  ]
},
{
  "TaskId": "Task-02",
  "TaskName": "Review",
  "ActivityId": "Activity-02",
  "ActivityName": "Rent",
  "TaskStatus": "Booked",
  "WeekEntry": [
    {
      "BookedHours": "2hrs",
      "Status": "4",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "2",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "1",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "3",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    }
  ]
},
{
  "TaskId": "Task-03",
  "TaskName": "Test",
  "ActivityId": "Activity-03",
  "ActivityName": "Editing",
  "TaskStatus": "NotBooked",
  "WeekEntry": [
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "0",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    },
    {
      "BookedHours": "2hrs",
      "Status": "0",
      "BookedDate": "",
      "InternalDesc": "",
      "Desc": ""
    }
  ]
}
];

let taskActivity;
// var empId = 'E0005';    

$(document).ready(function () {
 // alert(idToken);
  getTaskActiviy();
});


function generate_table(displayRecords) {

  var tr;
  $('#emp_body').html('');

  $.each(
    displayRecords,
    function (i, l) {
      tr = $('<tr/>');
      tr.append("<td>" + displayRecords[i].TaskName + "</td>");
      if (displayRecords[i].TaskStatus == 'NotBooked') {
        tr.append('<td>'
          + '  <select name="" id="" class="select-activity form-control form-control-border ">'
          + '      <option value="" selected>---</option>'

          + '    </select>'
          + '</td>')

      }
      else {
        tr.append("<td>" + displayRecords[i].ActivityName + "</td>");
      }
      tr.append("<td>-</td>");

      $.each(
        displayRecords[i].WeekEntry,
        function (j, l) {

          if (displayRecords[i].WeekEntry[j].Status == '0') {
            tr.append('<td>'
              + '  <select name="" id="" class="form-control">'
              + '      <option value="" selected>0</option>'
              + '      <option value="quarterDay">.25 Day</option>'
              + '      <option value="halfDay">.50 Day</option>'
              + '      <option value="fullDay">1 Day</option>'
              + '    </select>'
              + '</td>')
          }
          else if (displayRecords[i].WeekEntry[j].Status == '1') {
            tr.append('<td>'
              + '  <select name="" id="" class="form-control" title="Saved">'
              + '      <option value="" selected> ' + displayRecords[i].WeekEntry[j].BookedHours + '</option>'
              + '      <option value="quarterDay">.25 Day</option>'
              + '      <option value="halfDay">.50 Day</option>'
              + '      <option value="fullDay">1 Day</option>'
              + '    </select>'
              + '</td>');
          }
          else if (displayRecords[i].WeekEntry[j].Status == '2') {
            tr.append('<td>'
              + '  <select name="" id="" class="form-control" disabled title="Released">'
              + '      <option value="" selected> ' + displayRecords[i].WeekEntry[j].BookedHours + '</option>'
              + '      <option value="quarterDay">.25 Day</option>'
              + '      <option value="halfDay">.50 Day</option>'
              + '      <option value="fullDay">1 Day</option>'
              + '    </select>'
              + '</td>');
          }
          else if (displayRecords[i].WeekEntry[j].Status == '3') {
            tr.append('<td>'
              + '  <select name="" id="" class="form-control" disabled title="Approved">'
              + '      <option value="" selected> ' + displayRecords[i].WeekEntry[j].BookedHours + '</option>'
              + '      <option value="quarterDay">.25 Day</option>'
              + '      <option value="halfDay">.50 Day</option>'
              + '      <option value="fullDay">1 Day</option>'
              + '    </select>'
              + '</td>');
          }
          else {
            tr.append('<td>'
              + '  <select name="" id="" class="form-control" disabled title="Rejected">'
              + '      <option value="" selected> ' + displayRecords[i].WeekEntry[j].BookedHours + '</option>'
              + '      <option value="quarterDay">.25 Day</option>'
              + '      <option value="halfDay">.50 Day</option>'
              + '      <option value="fullDay">1 Day</option>'
              + '    </select>'
              + '</td>');
          }
        }
      )
      $('#emp_body').append(tr);
    });

}


const bindTaskActivity = (taskActivity) => {

  //console.log("object", taskActivity);

  $.each(taskActivity.activityResponse, function (index, value) {
    $('.select-activity').append('<option value="' + value.InternalID + '">' + value.Description + '</option>');
  });

}

const getTaskActiviy = () => {
  var value = $.cookie("auth");

  generate_table(employeeDetails);

  $.ajax({
    url: "https://tjg5g0jtu2.execute-api.us-east-1.amazonaws.com/Development/taskactivity?employeeId=E0005",
    headers: {
      Authorization: value
    },
    success: function (result) {
      //console.log("RESULT", result.body);
      taskActivity = result.body;
     // console.log("TASK", taskActivity);
      bindTaskActivity(taskActivity);
    }
  });
}

const generateTable = (records) => {
 // alert(records);
  $('#table-id').DataTable({
    paging: false,
    // "responsive": true,
    "lengthChange": false,
    data: records,

    columns: [
      { data: records.taskId },
      { data: records.objectId },
      { data: records.employeeId }
    ]
    // 'columnDefs': [
    //     {
    //       'targets': [3,4, 5, 6, 7, 8, 9],
    //       'render': function(data, type, row, meta){

    //         if(type === 'display'){
    //             var api = new $.fn.dataTable.Api(meta.settings);

    //             var $el = $('select', api.cell({ row: meta.row, column: meta.col }).node());

    //             var $html = $(data).wrap('<div/>').parent();

    //             if ($el.prop('tagName') === 'SELECT'){
    //               // alert("SELECT");
    //               $('option:selected', $html).removeAttr('selected');
    //               $('option', $html).filter(function(){
    //                   return ($(this).attr('value') === $el.val());
    //               }).attr('selected', 'selected');
    //             }

    //           }

    //         return data;
    //         }          
    //       }

    // ]

  });
}


const createTableRow = () => {
  var xTable = document.getElementById('table-id');

  var tr = document.createElement('tr');
  tr.innerHTML = '<tr>'
    + '<td>'
    + '<select name="" id="" class="select-task form-control form-control-border"> '
    + '<option value="" selected>---</option>         </select></td>'

    + '<td>'
    + '  <select name="" id="" class="select-activity form-control form-control-border">'
    + '    <option value="" selected>---</option>'

    + '  </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="select-po" class="form-control form-control-border">'
    + '    <option value="" selected>-</option>'

    + '  </select>'
    + '</td>'


    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'

    + '<td>'
    + '  <select name="" id="" class="form-control">'
    + '      <option value="" selected>0</option>'
    + '      <option value="quarterDay">.25 Day</option>'
    + '      <option value="halfDay">.50 Day</option>'
    + '      <option value="fullDay">1 Day</option>'
    + '    </select>'
    + '</td>'
    + '</tr>';

  xTable.appendChild(tr);
  let lastRow = $("#table-id").find("tr").last();
  let tdTask = lastRow.children('td:eq(0)').find('.select-task');
  let tdActivity = lastRow.children('td:eq(1)').find('.select-activity');

  $.each(taskActivity.taskResponse, function (index, value) {
    tdTask.append('<option value="' + value.taskId + '">' + value.taskName + '</option>');
  });

  $.each(taskActivity.activityResponse, function (index, value) {
    tdActivity.append('<option value="' + value.InternalID + '">' + value.Description + '</option>');
  });

}


const deleteTableRow = () => {
  let table = document.getElementById('table-id');
  let rowCount = table.rows.length;
  if (rowCount > 4) {
    table.deleteRow(rowCount - 1);
  }
  else {
    $(document).Toasts('create', {
      class: 'bg-success',
      title: 'Error',
      // subtitle: 'Subtitle',
      body: 'You cannot delete this row.'
    })
  }
}

$(function () {

  $('#reservationdate').on("change.datetimepicker", function (e) {
    date = $('#reservationdate').datetimepicker('viewDate');
    getSelectedDate(date);
  });

  // DatePicker
  $('#reservationdate').datetimepicker({
    format: 'MM-DD-YYYY',
    defaultDate: moment().format(),
  });


  todayDate();

  function todayDate() {

    var date = new Date(); // get current date

    const now = date ? new Date(date) : new Date().setHours(0, 0, 0, 0);
    const sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay());
    const saturday = new Date(now);
    saturday.setDate(saturday.getDate() - saturday.getDay() + 6);
    // console.log("NEW!!!",[sunday, saturday])

    // console.log("object",sunday.toLocaleDateString());

    $('#start-date').val(sunday.toLocaleDateString());
    $('#end-date').val(saturday.toLocaleDateString());

    const dateArray = getDatesInRange(sunday, saturday);

    // console.log("Date Array",dateArray);

    // console.log("Result WEEK:",dateArray[0].toString().substring(4,10));

    $("#sun").text(dateArray[0].toString().substring(4, 10));
    $("#mon").text(dateArray[1].toString().substring(4, 10));
    $("#tue").text(dateArray[2].toString().substring(4, 10));
    $("#wed").text(dateArray[3].toString().substring(4, 10));
    $("#thur").text(dateArray[4].toString().substring(4, 10));
    $("#fri").text(dateArray[5].toString().substring(4, 10));
    $("#sat").text(dateArray[6].toString().substring(4, 10));

  }

  function getDatesInRange(startDate, endDate) {

    // alert(endDate);
    const date = new Date(startDate.getTime());
    // alert(date);
    const dates = [];

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  function getSelectedDate(date) {

    const now = date ? new Date(date) : new Date().setHours(0, 0, 0, 0);
    const sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay());
    const saturday = new Date(now);
    saturday.setDate(saturday.getDate() - saturday.getDay() + 6);
    // console.log("NEW!!!",[sunday, saturday])
    // return [sunday, saturday];    

    $('#start-date').val(sunday.toLocaleDateString());
    $('#end-date').val(saturday.toLocaleDateString());

    const dateArray = getDatesInRange(sunday, saturday);

    // console.log("Result :",dateArray[0].toString().substring(4,10));

    $("#sun").text(dateArray[0].toString().substring(4, 10));
    $("#mon").text(dateArray[1].toString().substring(4, 10));
    $("#tue").text(dateArray[2].toString().substring(4, 10));
    $("#wed").text(dateArray[3].toString().substring(4, 10));
    $("#thur").text(dateArray[4].toString().substring(4, 10));
    $("#fri").text(dateArray[5].toString().substring(4, 10));
    $("#sat").text(dateArray[6].toString().substring(4, 10));
  }

  $(window).resize(function () {

    if (window.innerWidth < 530) {

      $('#div-date-filter').addClass('d-block').removeClass('d-flex');
    }
    else {
      $('#div-date-filter').addClass('d-flex').removeClass('d-block');
    }
  });

  // Datatable
  // $("#example1").DataTable({
  //   "responsive": true, 
  //   "lengthChange": false, 
  //   "autoWidth": false,
  //   'columnDefs': [
  //     {

  //        'render': function(data, type, row, meta){
  //           if(type === 'display'){
  //              var api = new $.fn.dataTable.Api(meta.settings);

  //              var $el = $('th, select', api.cell({ row: meta.row, column: meta.col }).node());

  //              var $html = $(data).wrap('<div/>').parent();

  //              if ($el.prop('th') === 'TH'){
  //                 $('textarea', $html).html($el.val());

  //              } else if ($el.prop('tagName') === 'SELECT'){
  //                 $('option:selected', $html).removeAttr('selected');
  //                 $('option', $html).filter(function(){
  //                    return ($(this).attr('value') === $el.val());
  //                 }).attr('selected', 'selected');
  //              }

  //              data = $html.html();
  //           }

  //           return data;
  //        }
  //     }
  //   ],
  //     'responsive': true,

  //   // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
  // });

});





