import Carousel from './components/Carousel'
const App = () => {
   return (
      <div style={{ maxWidth: 1200, height: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
         <Carousel>
            <img src="image-0.jpg" alt="horses" />
            <img src="image-1.jpg" alt="horses" />
            <img src="image-2.jpg" alt="horses" />
            <img src="image-3.jpg" alt="horses" />
            <img src="image-4.jpg" alt="horses" />
            <img src="image-5.jpg" alt="horses" />
            <img src="image-6.jpg" alt="horses" />
         </Carousel>
      </div>
   )
}

export default App
