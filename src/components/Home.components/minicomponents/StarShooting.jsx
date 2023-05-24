function Starshooting() {

    let poseX = Math.random() * 10;
    let delay = Math.random() * 20;

  return (
    <span className="star-shooting" style={{"--poseX" : poseX, animation : "animate-shooting 20s infinite linear " + delay + "s"}}>

    </span>
  )
}

export default Starshooting