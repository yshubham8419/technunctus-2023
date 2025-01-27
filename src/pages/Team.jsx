import TeamCard from "../components/Team/team"
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";

const Team = () => {
    return (
        <div>
              
            <img style={{
                width:"100%",
                height:"100vh",
                position:"fixed",
                zIndex:"-1"
            }}
            
            src="https://dl.dropbox.com/s/mpmu0gjtxv2x3fs/Webp.net-resizeimage%20%281%29.jpg?raw=1" alt="" />
            <Navbar />
            <h1 style={{
                paddingTop: "3em",
                marginBottom:"1em",
                fontFamily: "Spaceboards",
                width:"100%",
                textAlign:"center",
            }}
            > Our Team </h1>
            <h2 style={{
                width:"100%",
                textAlign:"center",
                marginBottom:"2em"
            }}
            >Chairperson</h2>
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
                <TeamCard />
            </div>
            <Footer />
        </div>
    )
}

export default Team