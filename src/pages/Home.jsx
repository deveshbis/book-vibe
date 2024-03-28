import Books from "../component/Books";
import Hero from "../component/Hero";



const Home = () => {
    return (
        <div className="lg:px-32 mt-12">
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;