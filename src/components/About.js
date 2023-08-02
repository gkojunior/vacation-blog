import React from 'react'
import aboutImage from '../images/about.jpg'
import Title from './Title'
const About = () => {
	return (
		<section className='section' id='about'>
		<Title title='about' subTitle='me'/>

			<div className='section-center about-center'>
				<div className='about-img'>
					<img src={aboutImage} className='about-photo' alt='awesome beach' />
				</div>
				<article className='about-info'>
					<h3>Place of birth</h3>
					<p>
						Hi! I am George Owusu, a Full-Stack Software Developer. I am from
						Cape-coast, Ghana.
					</p>
					<p>
						I am a web developer seeking an entry-level engineering position
						that leverages my educational background, knowledge, skill set, and
						passion for software development. With my current knowlegde and
						recent certifications, my goal is to add value to any business and
						contribute to organizational operations.
					</p>
					<a href='/' className='btn'>
						read more
					</a>
				</article>
			</div>
		</section>
	)
}

export default About
