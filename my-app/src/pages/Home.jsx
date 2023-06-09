import './home.css'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Home = () => {

    return (
        <div>
            <Header/>
            <div className='container'>
                <h3>NOTRE CONCEPT</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit unde odio dolores explicabo veniam earum exercitationem, maxime expedita, qui dolorem modi delectus rerum dignissimos omnis. Quae maiores delectus optio at doloremque sequi sed dolor dolorem, fugiat perspiciatis dolorum perferendis ipsum a odit obcaecati cumque harum sunt fugit blanditiis commodi esse molestias impedit. Possimus quaerat qui iure, reiciendis incidunt eligendi molestias non. Facilis, voluptas. Officia fuga maiores modi rem cum quae ab, hic perferendis ex officiis praesentium dolor dicta illum saepe. Cumque eos sapiente provident nulla, expedita dolorum optio ad sed amet nihil, quia numquam vitae obcaecati dolor veritatis quisquam.
                    </p>
                <a href='/' className='btn'> EN SAVOIR PLUS</a>
            </div>
            <div className='divtrans'>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/PDjdVC_DoDI" title="TFA MIX LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> 
            <Footer/>               
        </div>
    )
}

export default Home 