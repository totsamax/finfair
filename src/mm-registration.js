import 'bootstrap';
import './scss/custom.scss';
import 'jquery-mask-plugin';

$('#tel').mask('+7(999) 999 99 99', {
  placeholder: '+7(***) *** ** **',
});
var regForm = $('#regForm');
window.addEventListener(
  'load',
  function() {
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener(
        'submit',
        function(event) {
          var data = {};
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            $.each(regForm[0], function(k, v) {
              if (v.id != 'btnSubmit' && v.id != 'sendCode') {
                data[v.id] = v.value;
              }
            });
            data.timestamp = (Date.now() / 1000) | 0;
            data = JSON.stringify(data);
            console.log(data);
            var settings = {
              async: true,
              crossDomain: true,
              url: 'https://finfair2018.ru/webreg.smi.php',
              method: 'POST',
              headers: {
                'X-API-Key':
                  '997d223bc24b9afd1ccec8fd7dd66e200da4b2eccecabd14e039f4d79e00c61139daa6e7864e0c87aa3813180d6e86c3',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'Postman-Token': 'a778497f-9d04-4ff7-ab0e-7d9a965fcf15',
              },
              data: data,
            };
            $.ajax(settings).always(function(response) {
              if (response == 'Error: code invalid') {
                $('#code').val('');
                form.classList.add('was-validated');
              } else {
                $(regForm).html(
                  '<h3>Спасибо за регистрацию. Подтверждение участия будет направлено на указанный вами адрес электронной почты</h3>'
                );
                $([document.documentElement, document.body]).animate(
                  {
                    scrollTop:
                      $('#regForm').offset().top - $('.navbar').height(),
                  },
                  0
                );
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
