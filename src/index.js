import 'bootstrap';
import './scss/index.scss';
import 'jquery-mask-plugin';

//GA - Страница
//1. Логотип FINFAIR вверху
$('#LogoHeader').click(function() {
  gtag('event', 'Click', { event_category: 'Page', event_label: 'LogoHeader' });
});
//2. Логотип FINFAIR внизу
$('#LogoFooter').click(function() {
  gtag('event', 'Click', { event_category: 'Page', event_label: 'LogoFooter' });
});
//3. Кнопка "Регистрация" в хеддере
$('#MenuRegHeader').click(function() {
  gtag('event', 'Click', {
    event_category: 'Page',
    event_label: 'MenuRegHeader',
  });
});
//4. Кнопка "Регистрации" в футере
$('#MenuRegFooter').click(function() {
  gtag('event', 'Click', {
    event_category: 'Page',
    event_label: 'MenuRegFooter',
  });
});
//5. Клик по иконке – Вконтакте
$('#IconVK').click(function() {
  gtag('event', 'Click', { event_category: 'Page', event_label: 'IconVK' });
});
//6. Клик по иконке – Instagram
$('#IconIG').click(function() {
  gtag('event', 'Click', { event_category: 'Page', event_label: 'IconIG' });
});
//7. Клик по иконке – Facebook
$('#IconFB').click(function() {
  gtag('event', 'Click', { event_category: 'Page', event_label: 'IconFB' });
});

//GA-Форма
//1. Клик по полю – Фамилия
$('#lastName').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Surname' });
});
$('#lastName').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Surname' });
});
//2. Клик по полю – Имя
$('#firstName').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Name' });
});
$('#firstName').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Name' });
});
//3. Клик по полю – Отчество
$('#patronymicName').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Patronymic' });
});
//4. Клик по полю – телефон
$('#tel').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Phone' });
});
$('#tel').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Phone' });
});
//5. Клик по кнопке – "отправить код"
$('#sendCode').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'SendCode' });
});
//6. Клик по полю – Код из СМС
$('#code').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'SMS' });
});
$('#code').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'SMS' });
});
//7. Клик по полю – e-mail
$('#email').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'E-mail' });
});
$('#email').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'E-mail' });
});
//8. Клик по полю – Пол
$('#inputSex').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Gender' });
});
$('#inputSex').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Gender' });
});
//9. Выбор значения – Пол
$('#sendCode').change(function() {
  gtag('event', 'Select', { event_category: 'Form', event_label: 'Gender' });
});
//10. Клик по полю – Возраст
$('#inputAge').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Age' });
});
$('#inputAge').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Age' });
});
//11. Выбор значения – Возраст
$('#inputAge').change(function() {
  gtag('event', 'Select', { event_category: 'Form', event_label: 'Age' });
});
//12. Клик по полю – Место работы
$('#inputJob').click(function() {
  gtag('event', 'Click', {
    event_category: 'Form',
    event_label: 'PlaceOfWork',
  });
});
$('#inputJob').on('invalid', function() {
  gtag('event', 'Error', {
    event_category: 'Form',
    event_label: 'PlaceOfWork',
  });
});
//13. Выбор значения – Место работы
$('#inputJob').change(function() {
  gtag('event', 'Select', {
    event_category: 'Form',
    event_label: 'PlaceOfWork',
  });
});
//14. Клик по полю – Должность
$('#inputPosition').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Position' });
});
$('#inputPosition').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Position' });
});
//15. Выбор значения – Должность
$('#inputPosition').change(function() {
  gtag('event', 'Select', { event_category: 'Form', event_label: 'Position' });
});
//16. Клик по полю – Размер личных сбережений
$('#inputSalary').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Savings' });
});
$('#inputSalary').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Savings' });
});
//17. Выбор значения – Размер личных сбережний
$('#inputSalary').change(function() {
  gtag('event', 'Select', { event_category: 'Form', event_label: 'Savings' });
});
//18. Клик по полю – Готовы инвестировать
$('#inputInvest').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Invest' });
});
$('#inputInvest').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Invest' });
});
//19. Выбор значения – Готовы инвестировать
$('#inputInvest').change(function() {
  gtag('event', 'Select', { event_category: 'Form', event_label: 'Invest' });
});
//20. Клик по кнопке – "Зрегистрироваться"
$('#btnSubmit').click(function() {
  gtag('event', 'Click', {
    event_category: 'Form',
    event_label: 'Registration',
  });
});
//20. Клик по чек-боксу "Я принимаю..."
$('#agreement').click(function() {
  gtag('event', 'Click', { event_category: 'Form', event_label: 'Rules' });
});
$('#agreement').on('invalid', function() {
  gtag('event', 'Error', { event_category: 'Form', event_label: 'Rules' });
});
//GA - ОШИБКИ ФОРМЫ

$('#tel').mask('+7(999) 999 99 99', {
  placeholder: '+7(***) *** ** **',
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
              url: 'https://finfair2018.ru/webreg.new.php',
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
                //регистрация успешна
                //отправка цели
                gtag('event', 'Registration', {
                  event_category: 'Form',
                  event_label: 'Successful',
                });
                //установка сообщения о регистрации
                $(regForm).html('<h3>Вы успешно зарегистрированы!</h3>');
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
$('.toregistration').click(function(event) {
  event.preventDefault();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#regAnchor').offset().top - $('.navbar').height(),
    },
    2000
  );
});
$('#sendCode').click(function(event) {
  event.preventDefault();
  if (
    document.getElementById('sendCode').disabled == false &&
    document.getElementById('tel').checkValidity() == true
  ) {
    var data = JSON.stringify({
      tel: $('#tel').val(),
    });
    console.log(data);
    var settings = {
      async: true,
      crossDomain: true,
      url: 'https://finfair2018.ru/webreg.new.php',
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
    $.ajax(settings).always(function() {
      console.log('Код отправлен');
      document.getElementById('sendCode').disabled = true;
      setTimeout(function() {
        if (document.getElementById('sendCode')) {
          document.getElementById('sendCode').disabled = false;
        }
      }, 30000);
    });
  }
});
