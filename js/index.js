$(document).ready(function() {

  const person = {
    name : "Khatt"
  };

  const personJSON = JSON.stringify(person);

  localStorage.setItem("person",personJSON);

  let employeeDetails = {};
  let employeeId = 'E0005';    

  getTaskActiviy();

});

  const bindTaskActivity = () => {
  $.each(employeeDetails, function(index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('.select-task').append('<option value="' + value.taskId + '">' + value.taskName + '</option>');
      // console.log("object",value.taskId);
  });

  $.each(employeeDetails, function(index, value) {
    // APPEND OR INSERT DATA TO SELECT ELEMENT.
    $('.select-activity').append('<option value="' + value.objectId + '">' + value.objectId + '</option>');
  });
  }

  const getTaskActiviy = () => {

    var settings = {
      "url": "https://zn5pe8sal5.execute-api.us-east-1.amazonaws.com/Development/employeetasks?employeeId=E0005",
      "method": "GET"
    };
    
    $.ajax(settings).done(function (response) {

      // console.log("RESPONSE",response.body.d.results);
      employeeDetails = response.body.d.results.map(employee => ({ employeeId: employee.AssignedEmployeeID,
                                                                  objectId: employee.ObjectID, 
                                                                  taskName:employee.ProjectTask.Name,
                                                                  taskId: employee.ProjectTask.ID,
                                                                  statusCode:  employee.ProjectTask.ReleaseStatusCode,
                                                                  statusCodeText: employee.ProjectTask.ReleaseStatusCodeText
                                                                }));
       console.log("EmployeeDetails",employeeDetails);  
      //  generateTable(employeeDetails);  
     bindTaskActivity();

    });
      
  } 


  const generateTable = (records) => {
    alert(records);
      $('#table-id').DataTable({
        paging:false,
        // "responsive": true,
        "lengthChange": false,
        data: records,

        columns : [
              {data:records.taskId},
              {data:records.objectId},
              {data:records.employeeId}
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
    var xTable=document.getElementById('table-id');

    var tr=document.createElement('tr');
    tr.innerHTML ='<tr>'
    +'<td><select name="" id="" class="select-task form-control form-control-border">      <option value="" selected>---</option>         </select></td>'

    +'<td>'  
    +'  <select name="" id="" class="select-activity form-control form-control-border">'
    +'    <option value="" selected>---</option>'
    
    +'  </select>'
    +'</td>'

    +'<td>'  
    +'  <select name="" id="select-po" class="form-control form-control-border">'
    +'    <option value="" selected>---</option>'
   
    +'  </select>'
    +'</td>'
  

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'

    +'<td>' 
    +'  <select name="" id="" class="form-control">'
    +'      <option value="" selected>0</option>'
    +'      <option value="quarterDay">.25 Day</option>'
    +'      <option value="halfDay">.50 Day</option>'
    +'      <option value="fullDay">1 Day</option>'
    +'    </select>'
    +'</td>'
    +'</tr>';

    xTable.appendChild(tr);
   let lastRow =  $("#table-id").find("tr").last();
    let tdTask = lastRow.children('td:eq(0)').find('.select-task');
    let tdActivity = lastRow.children('td:eq(0)').find('.select-activity');

    $.each(employeeDetails, function(index, value) {
        // APPEND OR INSERT DATA TO SELECT ELEMENT.
        tdTask.append('<option value="' + value.taskId + '">' + value.taskName + '</option>');
        // console.log("object",value.taskId);
    });

    $.each(employeeDetails, function(index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      tdActivity.append('<option value="' + value.objectId + '">' + value.objectId + '</option>');
    });

  }
  
  
  $("select.select-task").change (function () {  
    $('#text-status').val('');
    var selectedTask = $(this).children("option:selected").text();   
    let selectedTaskStatus = employeeDetails.filter(temp => temp.taskName == selectedTask);
    $('#text-status').val(selectedTaskStatus[0].statusCodeText);
  });  

  const deleteTableRow = () => {
    
    if($("#table-id").find("tr").last()){
      alert();
    }
    var table = document.getElementById('table-id');
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
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

    $("#sun").text(dateArray[0].toString().substring(4,10));
    $("#mon").text(dateArray[1].toString().substring(4,10));
    $("#tue").text(dateArray[2].toString().substring(4,10));
    $("#wed").text(dateArray[3].toString().substring(4,10));
    $("#thur").text(dateArray[4].toString().substring(4,10));
    $("#fri").text(dateArray[5].toString().substring(4,10));
    $("#sat").text(dateArray[6].toString().substring(4,10));

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

    $("#sun").text(dateArray[0].toString().substring(4,10));
    $("#mon").text(dateArray[1].toString().substring(4,10));
    $("#tue").text(dateArray[2].toString().substring(4,10));
    $("#wed").text(dateArray[3].toString().substring(4,10));
    $("#thur").text(dateArray[4].toString().substring(4,10));
    $("#fri").text(dateArray[5].toString().substring(4,10));
    $("#sat").text(dateArray[6].toString().substring(4,10));    
  }

  $(window).resize(function() {

    if(window.innerWidth < 530){
    
      $('#div-date-filter').addClass('d-block').removeClass('d-flex');
    }
    else{
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

