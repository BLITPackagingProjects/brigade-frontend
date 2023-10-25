import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
const Home = () =>{
    
    return(
        <>
            <div className="container text-center">
                <h1>Adopt Pets</h1>
            </div>
            {/* <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/img1/jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/img2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/img3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<div style={{ display: 'block', width: 840, padding: 30 }} className='container text-center'> 
      <Carousel> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="img1.jpg" alt="Image One"
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img className="d-block w-100" src="img2.jpg" alt="Image Two"
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img className="d-block w-100" src="img3.jpg" alt="Image Three"
          /> 
        </Carousel.Item>
      </Carousel> 
    </div> <br/>
    <p className='text-center'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea consequuntur perspiciatis optio repellendus, dolorem nobis perferendis libero animi ullam, sed excepturi enim possimus. Magnam.</p>
      <p>Dignissimos, voluptas ad quam sequi, eos nulla assumenda laboriosam inventore illum fuga cupiditate ut necessitatibus natus ea, deserunt esse! Cum earum dolorum optio quis repudiandae?</p>
      <p>Error, iusto! A animi assumenda, provident id ex nihil, voluptate ipsam consequuntur officia fugit neque in fuga molestiae? Tempore provident saepe, veritatis corrupti amet odio.</p>
      <p>Pariatur ipsam vel consequuntur delectus aut nisi corrupti, molestias numquam eligendi consequatur! Rerum architecto corrupti, quibusdam sapiente sint harum temporibus, voluptatibus pariatur voluptates, officia inventore!</p>
      <p>Ex, ad unde! Doloribus, ea pariatur quidem aut cumque voluptas voluptatibus tenetur dolore eum nobis non porro. Ex optio quisquam voluptatem consequatur quasi ad quam.</p>
      <p>Perferendis dicta obcaecati rerum et unde, consequatur incidunt, exercitationem perspiciatis autem alias ipsum! Pariatur, inventore beatae! Reprehenderit eos, minus autem magni a nemo. Assumenda, blanditiis.</p>
      <p>Sed laudantium optio reprehenderit libero dolore eius odio consequuntur, expedita, hic veritatis quibusdam asperiores in saepe iste, nisi ad voluptatibus alias distinctio quo illum neque.</p>
      <p>Nemo, quos exercitationem quis aperiam, provident minima commodi beatae vel incidunt deleniti dolorum sunt itaque sapiente soluta ipsa dicta, fugit officiis debitis qui eos doloremque!</p>
      <p>Perspiciatis soluta pariatur voluptatem, perferendis culpa odio velit earum? Reprehenderit, veniam ab soluta sed quaerat quasi. Distinctio, optio? Ratione numquam consequuntur exercitationem voluptate sed. Dolore.</p>
      <p>Possimus sequi incidunt aliquid animi ratione qui quasi, nam obcaecati illo ab in beatae similique nesciunt magnam eligendi suscipit exercitationem maxime blanditiis. Ratione, labore expedita!</p>
    </p>
        </>
            
    )
}
export default Home;