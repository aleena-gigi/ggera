interface PlayerCardWrapperProps {
    children: React.ReactNode
}
const PlayerCardWrapper =({children}: PlayerCardWrapperProps) => {
	return (
		<div style={{ display: 'flex', gap: '16px', marginTop: '38px', marginBottom: '20px'}}>
			{children}
		</div>
	)
}

export default PlayerCardWrapper