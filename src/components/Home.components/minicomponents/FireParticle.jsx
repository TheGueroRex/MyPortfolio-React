function FireParticle() {
  let poseX = Math.random() * 10;
  let scale = Math.random() * 2.5;
  let delay = Math.random() * 6;

  return (
    <span
      className="fire-particle"
      style={{
        "--poseX": poseX,
        "--scale": scale,
        animation: "animation-fire-particles 6s infinite linear " + delay + "s",
      }}
    ></span>
  );
}

export default FireParticle;
