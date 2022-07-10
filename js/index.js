const testimonialsContainer = document.querySelector('.testimonial-container') 
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    Name: 'Miyah Myles',
    position: 'Marketing',
    photo: './assets/images/f-2.png',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui excepturi assumenda harum laboriosam explicabo nostrum cum molestias enim! Ipsa accusamus blanditiis, tenetur quisquam, doloremque commodi fugiat atque itaque quia asperiores, necessitatibus iure laboriosam qui repudiandae eum quos? Numquam harum neque rem. Obcaecati excepturi accusamus mollitia voluptatibus, libero delectus magni non.'
  },
  {
    Name: 'John Deo',
    position: 'Marketing',
    photo: './assets/images/1.png',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui excepturi assumenda harum laboriosam explicabo nostrum cum molestias enim! Ipsa accusamus blanditiis, tenetur quisquam, doloremque commodi fugiat atque itaque quia asperiores, necessitatibus iure laboriosam qui repudiandae eum quos? Numquam harum neque rem. Obcaecati excepturi accusamus mollitia voluptatibus, libero delectus magni non.'
  },
  {
    Name: 'Archana',
    position: 'Ui Developer',
    photo: './assets/images/f-2.png',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui excepturi assumenda harum laboriosam explicabo nostrum cum molestias enim! Ipsa accusamus blanditiis, tenetur quisquam, doloremque commodi fugiat atque itaque quia asperiores, necessitatibus iure laboriosam qui repudiandae eum quos? Numquam harum neque rem. Obcaecati excepturi accusamus mollitia voluptatibus, libero delectus magni non.'
  },
  {
    Name: 'Ravi',
    position: 'Marketing',
    photo: './assets/images/1.png',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui excepturi assumenda harum laboriosam explicabo nostrum cum molestias enim! Ipsa accusamus blanditiis, tenetur quisquam, doloremque commodi fugiat atque itaque quia asperiores, necessitatibus iure laboriosam qui repudiandae eum quos? Numquam harum neque rem. Obcaecati excepturi accusamus mollitia voluptatibus, libero delectus magni non.'
  },
];

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx] 

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)








