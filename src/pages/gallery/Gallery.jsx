import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const image = []

  for(let i = 1; i<= galleryLength; i++) {
    image.push(require(`../../images/gallery${i}.jpg`))
  }

  // console.log(image);

  return (
    <>
     <Header title="Our Gallery" image={HeaderImage}>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rem eum aliquam expedita, minima reiciendis adipisci. Doloribus.
     </Header>
     <section className="gallery">
      <div className="container gallery__container">
        {
          image.map ((image, index) => {
            return <article key={index}>
              <img src={image} alt={`gallery Image ${index + 1}`} />
            </article>
          })
        }
      </div>
     </section> 
    </>
  )
}

export default Gallery
