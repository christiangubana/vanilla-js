var customers = [
    {
        name: "Rocky Green",
        birthdate: "1988-10-01"
    },
    {
        name: "Sara Pink",
        birthdate: "1982-03-15"
    },
    {
        name: "Tom Black",
        birthdate: "1995-01-25"
    },
    {
        name: "Tina White",
        birthdate: "1975-12-12"
    },
    {
        name: "Danny Yellow",
        birthdate: "1979-11-10"
    },
    {
        name: "Anya Aqua",
        birthdate: "1982-08-18"
    },
    {
        name: "Peter Purple",
        birthdate: "1971-04-16"
    },
    {
        name: "Dean Teal",
        birthdate: "1991-05-17"
    },
    {
        name: "John Grey",
        birthdate: "1992-09-05"
    },
    {
        name: "Paul Magenta",
        birthdate: "1985-03-04"
    },
    {
        name: "Oscar Orange",
        birthdate: "1990-01-22"
    },
]

let tableStr = '';

// iterate over he array and create strings of the td's
Object.values(customers).map(function(customer, index) {
    console.log('RESULT', customer)
    //destructure the object to give nicer aliases for the iterations.
    const {name: name, birthdate: birthdate} = customer;
    
    // build the string with the contents of the iterated row data
    tableStr +='<tr>';
     tableStr +='<td>' + (index + 1) + '</td>';
     tableStr +='<td>' + name + '</td>';
     tableStr +='<td>' + birthdate + '</td>';
    tableStr +='</tr>';
})
 
 // insert the string as the html of the tbody
 document.querySelector('#customers-table tbody').innerHTML = tableStr;