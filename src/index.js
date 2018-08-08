import 'bootstrap';
import './scss/index.scss';
//import validator from 'validator';

$('#btnSubmit').click(function(event) {
  //var form = $('#regForm');
  //var valid = false;
  event.preventDefault();
  var settings = {
    async: true,
    crossDomain: true,
    url: 'https://mainserver.accredcenter.ru/api/app/formdata/import/13',
    method: 'PUT',
    headers: {
      'X-API-Key':
        '997d223bc24b9afd1ccec8fd7dd66e200da4b2eccecabd14e039f4d79e00c61139daa6e7864e0c87aa3813180d6e86c3',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
    },
    data: JSON.stringify({
      name: '${form[0].name}',
      tel: '${form[0].tel}',
      email: '${form[0].email}',
      inputSex: '${form[0].inputSex}',
      inputAge: '${form[0].inputAge}',
      inputJob: '${form[0].inputJob}',
      inputPosition: '${form[0].inputPosition}',
      inputSalary: '${form[0].inputSalary}',
      inputInvest: '${fform[0].inputInvest}',
    }),
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
});
