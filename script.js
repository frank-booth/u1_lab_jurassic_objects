// Warm Up
const myMovie = {
    title: 'Jurassic Park',
    director: 'Stephen Spielberg',
    actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum', 'Samuel L. Jackson'],
    releaseYear: 1993,
    duration: 128
  }
//  console.log(myMovie.title)
// console.log(myMovie.director)
// console.log(myMovie.releaseYear)
// console.log(myMovie.actors[3])
myMovie.duration +=25
// console.log(myMovie.duration)

//Part 1
const montana = {
    scientist: 'Dr. Alan Grant',
    depth: '10 meters',
    dino: 'Velociraptor'
  }

montana.guestOfHonor = montana.scientist
// console.log(montana.guestOfHonor)

montana.cleverGirl = montana.dino
// console.log(montana.cleverGirl)

// Part 2
const costaRica = {
    programmer: 'Dennis Nedry',
    contact: 'Lewis Dodgson',
    payment: 750000,
    specimens: [
      'Tyrannosaurus Rex',
      'Triceratops',
      'Brachiosaurus',
      'Velociraptor',
      'Dilophasaurus',
      'Gallimimus'
    ],
    menthol: false
  }

costaRica.barbasol = costaRica.specimens
// console.log(costaRica.barbasol)

costaRica.favoriteDino = costaRica.specimens[0]
// console.log(costaRica.favoriteDino)

costaRica.payment += 750000
// console.log(costaRica.payment)

// Part 3
const jurassicPark = {
    expenseSpared: 0,
    staff: {
      founder: 'John Hammond',
      programmer: 'Dennis Nedry',
      engineer: 'John Arnold',
      security: 'Robert Muldoon',
      scientist: 'Dr. Henry Wu'
    },
    guests: ['Dr. Alan Grant', 'Dr. Ellie Sattler', 'Dr. Ian Malcolm', 'Donald Gennaro'],
    systems: [
      {
        area: 'Perimeter Fence',
        volts: 10000,
        online: true
      },
      {
        area: 'T-Rex Paddock',
        volts: 10000,
        online: true
      },
      {
        area: 'Velociraptor Pen',
        volts: 10000,
        online: true
      }
    ]
  }
  jurassicPark.founderName = jurassicPark.staff.founder
console.log(jurassicPark.founderName)

jurassicPark.guests.push('Tim', 'Alex')
// console.log(jurassicPark.guests)

for (let i = 0; i < jurassicPark.guests.length; i++) {
   // console.log(jurassicPark.guests[i])
}

jurassicPark.systems.push({ area: 'Tour Vehicles', lockingMechanisms: false, online: true})
//console.log(jurassicPark.systems)

jurassicPark.systems[0].online = false
jurassicPark.systems[1].online = false
jurassicPark.systems[3].online = false
//console.log(jurassicPark.systems[3])

delete jurassicPark.staff.programmer
//console.log(jurassicPark.staff)

jurassicPark.guests.splice(3, 1)
//console.log(jurassicPark.guests)

jurassicPark.systems[2].online = false
delete jurassicPark.staff.security
//console.log(jurassicPark.staff)

for (let i = 0; i < jurassicPark.systems.length; i++) {
    jurassicPark.systems[i].online = true
}
