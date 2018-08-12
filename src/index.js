import 'bootstrap';
import './scss/index.scss';
import 'jquery-mask-plugin';
$('#tel').mask('+7(999) 999 99 99', {
  placeholder: '+7(***)*** ** **',
});
$('#lastName,#firstName,#patronymicName').mask(
  'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
  {
    translation: {
      S: {
        pattern: /[А-Яа-я]/,
        optional: true,
      },
    },
  }
);
('use strict');

var regForm = $('#regForm');
var data = {};
$.each(regForm[0], function(k, v) {
  if (v.id != 'btnSubmit') {
    data[v.id] = v.value;
  }
});
data = JSON.stringify(data);
console.log(data);
// var settings = {
//   async: true,
//   crossDomain: true,
//   url: 'https://mainserver.accredcenter.ru/api/app/formdata/import/13',
//   method: 'PUT',
//   headers: {
//     'X-API-Key':
//       '997d223bc24b9afd1ccec8fd7dd66e200da4b2eccecabd14e039f4d79e00c61139daa6e7864e0c87aa3813180d6e86c3',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Cache-Control': 'no-cache',
//     'Postman-Token': 'a778497f-9d04-4ff7-ab0e-7d9a965fcf15',
//   },
//   data: data,
// };

window.addEventListener(
  'load',
  function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener(
        'submit',
        function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            alert(data);
            $.each(regForm[0], function(k, v) {
              if (v && v.id && v.id != 'btnSubmit' && v.value) {
                v.value = '';
              }
            });
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  },
  false
);
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
