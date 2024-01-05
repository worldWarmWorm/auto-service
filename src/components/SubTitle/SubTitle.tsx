import React from 'react'
import './SubTitle.css'

type SubTitleText = {
	text: string
}

export default function SubTitle({ text }: SubTitleText) {
	return (
		<h2 className="sub-title text-center">
			{text}
		</h2>
	)
}