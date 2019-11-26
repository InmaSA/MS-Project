const mongoose = require('mongoose')
const Employee = require('../models/Employee.model')

require('../configs/mongoose.config')

const employees = [
  { name: "Anakin Skywalker",
    image:"https://res.cloudinary.com/dfevkaska/image/upload/v1574693801/member-database/vrrq25ag3cf1wigrsx2b.jpg",
    age: 45,
    bio: "Originally a Jedi prophesied to bring balance to the Force, Anakin Skywalker is lured to the dark side of the Force by Palpatine and becomes a Sith Lord. After fighting a lightsaber battle with his former mentor Obi-Wan Kenobi in which he is dismembered, Vader is transformed into a cyborg. He then serves the Galactic Empire as Darth Vader"
  },
  {
    name: "Chewbacca",
    image:"https://res.cloudinary.com/dfevkaska/image/upload/v1574693795/member-database/wxxwwcolkb6dmugwkygv.jpg",
    age: 203,
    bio: 'Nicknamed "Chewie", he is a Wookiee, a tall, hirsute, bipedal, and intelligent species from the planet Kashyyyk. During his long life Chewbacca has been many things: engineer, warrior, slave, smuggler and rebel hero. Chewie fought with the Republic on Kashyyyk during the Clone Wars, then befriended Han Solo while in Imperial captivity on Mimban.'
  },
  {
    name: "Han Solo",
    image:"https://res.cloudinary.com/dfevkaska/image/upload/v1574693811/member-database/v4oomgdekzincnsgorvd.jpg",
    age: 32,
    bio: "Han is the captain of the Millennium Falcon, along with his Wookiee co-pilot Chewbacca, whereby both pilots became involved in the Rebel Alliance's struggle against the Galactic Empire"
  },
  {
    name: "Lando Calrissian",
    image:"https://res.cloudinary.com/dfevkaska/image/upload/v1574693829/member-database/d1uqbagxihe9dcqkdclt.jpg",
    age: 34,
    bio: "Lando made a career as a gambler, con artist, playboy, mining engineer, businessman, and was the original owner of the Millennium Falcon until losing the ship to Han in a bet. He has become the Baron Administrator of Cloud City on the gas planet Bespin. He becomes a general in the Rebel Alliance and leads the attack on the second Death Star." 
  },
  {
    name: "Leia Organa",
    image:"https://res.cloudinary.com/dfevkaska/image/upload/v1574693837/member-database/kmpmojt1ocomge2l6dkl.png",
    age: 22,
    bio: "Leia is princess of the planet Alderaan, a member of the Imperial Senate and an agent of the Rebel Alliance. She thwarts the sinister Sith lord Darth Vader and helps bring about the destruction of the Empire's cataclysmic superweapon, the Death Star. Leia commands a Rebel base and evades Vader as she falls in love with the smuggler Han Solo."
  },
  {
    name: "Luke Skywalker",
    image: "https://res.cloudinary.com/dfevkaska/image/upload/v1574693846/member-database/kqrancvupmxgmpgkmsc8.jpg",
    age: 22,
    bio: "Friend of smuggler Han Solo and the twin brother of Rebellion leader Princess Leia.  He trains under Jedi Masters Obi-Wan Kenobi and Yoda, and is the son of Anakin Skywalker and Padmé Amidala"
  },
  {
    name: "Yoda",
    image: "https://res.cloudinary.com/dfevkaska/image/upload/v1574693853/member-database/vywflwor1owbobstu21z.jpg",
    age: 899,
    bio: "When Luke Skywlaker arrives on Dagobah to seek Yoda's guidance, having been instructed to do so by the Force ghost of Obi-Wan Kenobi, Yoda does not initially identify himself to Luke and instead tests his patience by presenting himself as a comical and senile backwater individual, deliberately provoking both Luke and R2-D2 "
  },
  {
    name: "Jabba the Hutt",
    image: "https://res.cloudinary.com/dfevkaska/image/upload/v1574693817/member-database/olhmistfgiqafhge8klx.jpg",
    age: 603,
    bio: "The most powerful crime boss on Tatooine, who has placed a bounty on the head of heroic smuggler Han Solo and employs bounty hunters such as Greedo and Boba Fett to capture or kill him. Jabba is cruel and has a grim sense of humor, an insatiable appetite (as is typical of his species), and affinities for torture and other heinous activities. "
  }
]


Employee.create(employees, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${employees.length} members`)
  mongoose.connection.close()
})