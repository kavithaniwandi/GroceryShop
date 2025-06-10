import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <h1>Welcome to Our Product Store</h1>
        <p>Explore and shop amazing products!</p>
      </div>
    </div>
  );
}
