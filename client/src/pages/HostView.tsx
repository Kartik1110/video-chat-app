import Box from "@mui/material/Box"
import { Divider } from "@mui/material"
import UserTile from "../components/UserTile"

function HostView() {
    return <Box sx={{
        display: 'flex',
    }}>
        <Box sx={{ width: '100vw', overflow: "hidden", backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* DYNAMIC - Accoring to number of participants */}
            <Box sx={{ borderRight: 'solid 1px white', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <UserTile height="50vh" />
                <UserTile height="50vh" />
            </Box>
            <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '60px' }}>
                <UserTile height="50vh" />
                <UserTile height="50vh" />
            </Box>
        </Box>
        <Divider sx={{ position: 'absolute', backgroundColor: 'white', height: '1px', width: '100vw', top: '50%' }} />
        <Box sx={{
            position: 'absolute',
            left: '80%',
            top: '70%',
            border: 'solid 1px white'
        }}>
            <UserTile height="25vh" />
        </Box>
    </Box>
}

export default HostView