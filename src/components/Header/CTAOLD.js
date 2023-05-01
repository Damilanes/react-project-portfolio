import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '500px', height: '100%', backgroundColor: 'white', 
                display: 'grid', gridTemplateColumns: '45% 45%',  columnGap: '2%'}}>
      {/* style={{}} */}
        <div  style={{backgroundColor: 'green'}}>
          <a hrf="www.test.com" download className='btn' style={{width: '200px', 
          height: '70%', marginTop: '10px'}}>Download CV</a>
        </div>
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <div style={{backgroundColor: 'black'}}>
          <a href="#contact" className="btn btn-primary"  style={{width: '150px', height: '70%',
          marginTop: '10px'}}>Let's Talk</a>
         </div>
      </div>
    </div>

  )
}

export default CTA