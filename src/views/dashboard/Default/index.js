import React, { useEffect, useState } from "react"

const Dashboard = () => {
	const [isLoading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<h3>Hello world isLoading={isLoading}</h3>
	)
}

export default Dashboard