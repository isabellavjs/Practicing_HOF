const universities = [
  {
    name: 'Universidade de Minas Gerais',
    acronym: 'UFM',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade MG',
      number: 1170,
      city: 'Belo Horizonte',
      state: 'MG',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Engineering',
        grade: 3,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 770,
      },
      {
        course: 'Computer Science',
        grade: 4,
        campus: 'City',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 750,
      },
      {
        course: 'Ancient History',
        grade: 2,
        campus: 'City',
        duration: 7,
        mode: 'Part time',
        entryGrade: 600,
      },
    ],
  },
  {
    name: 'Universidade de São Paulo',
    acronym: 'UFSP',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade SSPU',
      number: 482,
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Engineering',
        grade: 4,
        campus: 'City-1',
        duration: 4,
        mode: 'Full time',
        entryGrade: 800,
      },
      {
        course: 'Computer Science',
        grade: 3,
        campus: 'City-2',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 710,
      },
      {
        course: 'Ancient History',
        grade: 4,
        campus: 'City-2',
        duration: 8,
        mode: 'Part time',
        entryGrade: 700,
      },
      {
        course: 'Business',
        grade: 4,
        campus: 'City-1',
        duration: 3,
        mode: 'Full time',
        entryGrade: 743,
      },
      {
        course: 'Medicine',
        grade: 5,
        campus: 'Health',
        duration: 5.5,
        mode: 'Full time',
        entryGrade: 835,
      },
    ],
  },
  {
    name: 'Universidade de Palmas',
    acronym: 'UTO',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade TOUF',
      number: 777,
      city: 'Tocantins',
      state: 'TO',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Medicine',
        grade: 2.5,
        campus: 'Health+',
        duration: 6,
        mode: 'Full time',
        entryGrade: 710,
      },
      {
        course: 'Computer Science',
        grade: 2,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 468,
      },
    ],
  },
  {
    name: 'Universidade Nova São Paulo',
    acronym: 'UNSP',
    overallGrade: null,
    address: {
      street: 'Rua Da Nova Global',
      number: 653,
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Art History',
        grade: 3,
        campus: 'City',
        duration: 3,
        mode: 'Full time',
        entryGrade: 496,
      },
      {
        course: 'Computer Science',
        grade: 2,
        campus: 'City',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 517,
      },
      {
        course: 'Public Policy',
        grade: 4,
        campus: 'City',
        duration: 6.5,
        mode: 'Part time',
        entryGrade: 580,
      },
    ],
  },
  {
  name: 'Exvort University',
  acronym: 'ExUn',
  overallGrade: null,
  address: {
    street: 'New York Street',
    number: 120,
    city: 'Boston',
    state: 'MA',
    country: 'USA'
  },
  courses: [
    {
      course: 'Art History',
      grade: 5,
      campus: 'City',
      duration: 4,
      mode: 'Full time',
      entryGrade: 760,
    },
  ],
},
];

// Exercise 1: Create an array with the names of the universities in alphabetic order.
const sortedUniversityNames = universities.map(element => element.name).sort();
console.log(sortedUniversityNames);

//  Exercise 2: Create an array of strings in the format UNIVERSITY_NAME: COMPLETE_ADDRESS. Complete addres = Street, number, city, state, country.
const universitiesAddress = universities.map((element) => {
  const universityName = element.name;
  const CompleteAddress = `${element.address.street}, nº ${element.address.number}, ${element.address.city}, ${element.address.state}, ${element.address.country}.`

  return `${universityName}: ${CompleteAddress}`;
})
console.log(universitiesAddress);

//  Exercise 3: Create an array of strings in the format: SIGLA: CIDADE. But all cities must be Brazilians and ordered in alphabetic order
const abbreviationBrazilianCities = universities
.filter(city => city.address.country === 'Brazil')
.map(element => `${element.acronym}: ${element.address.city}`)
.sort();
console.log(abbreviationBrazilianCities);

//  Exercise 4: Create an array of objects with: nome da universidade, a sua sigla, a quantidade de campus diferentes e a quantidade de cursos que ela oferece.

const arrayOfObj = universities.map((element) => {
  const differentCampus = element.courses.reduce((accumulator, course) => {
    if (accumulator.includes(course.campus)) return accumulator;
    accumulator.push(course.campus);
    return accumulator;
  }, []);

  const info = {
  name: element.name,
  abbreviation: element.acronym,
  numberOfCampus: differentCampus.length,
  numberOfCourses: element.courses.length,
  }
  return info;
})
console.log(arrayOfObj);