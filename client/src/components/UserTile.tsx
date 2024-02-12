import UserImg from '../assets/user.png'

function UserTile({ height }: { height: string }) {
    return <>
        <img src={UserImg} style={{
            width: 'auto',
            height,
            padding: 0,
            margin: 0,
        }} />
    </>
}

export default UserTile