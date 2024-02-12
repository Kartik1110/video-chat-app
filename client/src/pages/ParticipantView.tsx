import Box from "@mui/material/Box"
import UserTile from "../components/UserTile"

function ParticipantView() {
    return <Box sx={{
        display: 'flex',
    }}>
        <Box sx={{ width: '11%', borderRight: 'solid 1px white', overflow: "hidden", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* DYNAMIC - Accoring to number of participants */}
            <UserTile height="20vh" />
            <UserTile height="20vh" />
            <UserTile height="20vh" />
            <UserTile height="20vh" />
        </Box>
        <Box sx={{ width: '14%', backgroundColor: 'black' }}></Box>
        <Box sx={{ width: '75%', backgroundColor: 'black' }}>
            <UserTile height="100vh" />
        </Box>
        <Box sx={{
            position: 'absolute',
            left: '80%',
            top: '65%',
            border: 'solid 1px white'
        }}>
            <UserTile height="30vh" />
        </Box>
    </Box>
}

export default ParticipantView