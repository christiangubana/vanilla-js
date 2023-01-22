var customers = [
  {
    name: "Rocky Green",
    birthdate: "1988-10-01",
  },
  {
    name: "Sara Pink",
    birthdate: "1982-03-15",
  },
  {
    name: "Tom Black",
    birthdate: "1995-01-25",
  },
  {
    name: "Tina White",
    birthdate: "1975-12-12",
  },
  {
    name: "Danny Yellow",
    birthdate: "1979-11-10",
  },
  {
    name: "Anya Aqua",
    birthdate: "1982-08-18",
  },
  {
    name: "Peter Purple",
    birthdate: "1971-04-16",
  },
  {
    name: "Dean Teal",
    birthdate: "1991-05-17",
  },
  {
    name: "John Grey",
    birthdate: "1992-09-05",
  },
  {
    name: "Paul Magenta",
    birthdate: "1985-03-04",
  },
  {
    name: "Oscar Orange",
    birthdate: "1990-01-22",
  },
];

$.each(customers, function(i, customer) {
    var birthdate = new Date(customer.birthdate);
    var age = new Date().getFullYear() - birthdate.getFullYear();
    $('#customers-table-body').append(
      '<tr>' +
        '<td>' + customer.name + '</td>' +
        '<td>' + customer.birthdate + '</td>' +
        '<td>' + age + '</td>' +
      '</tr>'
    );
  });

  $('#search-input').on('input', function() {
    var searchValue = $(this).val();
    var range = searchValue.split("-");
    var lower = +range[0];
    var upper = +range[1];
    
    if (isNaN(lower) || isNaN(upper)) {
      $('#customers-table-body tr').show();
      $('#customers-table-body tr').filter(function () {
          return $(this).find("td:first").text().toLowerCase().indexOf(searchValue.toLowerCase()) == -1;
      }).hide();
    } else {
      $('#customers-table-body tr').show();
      $('#customers-table-body tr').filter(function () {
          return $(this).find("td:last").text() < lower || $(this).find("td:last").text() > upper;
      }).hide();
    }
  });
  
  
