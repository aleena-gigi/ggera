interface PlayerCardWrapperProps {
    children: React.ReactNode
}
const PlayerCardWrapper =({children}: PlayerCardWrapperProps) => {
	return (
		<div style={{ display: 'flex',width: '100%', justifyContent:'center', gap: '16px', marginTop: '38px', marginBottom: '20px'}}>
			{children}
		</div>
	)
}

export default PlayerCardWrapper