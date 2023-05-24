function Star() {
    let poseX = Math.random() * 10;
    let poseY = Math.random() * 10;
    let scale = Math.random() * 2;

  return (
    <div className="star-box" style={{"--poseX" : poseX, "--poseY" : poseY, "--scale": scale}}>
        <span className="star">

        </span>
    </div>
  )
}

export default Star