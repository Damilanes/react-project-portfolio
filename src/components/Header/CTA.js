import React from 'react'
// import CV from '../../assets/cv.pdf'
// className="btn btn-primary"  
const CTA = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '500px', height: '100px', 
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '5px'}}>
        <div  style={{position: 'relative'}}>
          <a hrf="#" download style={{width: '200px', position: 'absolute', right: '0', 
          height: '70%', marginTop: '10px', borderRadius: '6px', backgroundColor: 'blue', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', }}>Download CV</a>
        </div>
        <div style={{position: 'relative'}}>
          <a href="#contact" style={{width: '200px', height: '70%',
          marginTop: '10px', position: 'absolute', left: '0', backgroundColor: 'blue', 
          borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderColor: 'red'}}>Let's Talk</a>
         </div>
      </div>
    </div>

  )
}

export default CTA