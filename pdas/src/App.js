import ProfileCard from "./ProfileCrad";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <div>Personal Digital Assisants</div>

      <img alt="Alexa" src={AlexaImage} />
      <img alt="Cortana" src={CortanaImage} />
      <img alt="Siri" src={SiriImage} />

      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
