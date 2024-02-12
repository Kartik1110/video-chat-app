import UserImg from '../assets/user.png'

function UserTile({ height, width }: { height: string, width: string }) {
    return <>
        <img src={UserImg} style={{
            backgroundColor: 'red',
            width,
            height,
            padding: 0,
            margin: 0
        }} />
    </>
}

export default UserTile